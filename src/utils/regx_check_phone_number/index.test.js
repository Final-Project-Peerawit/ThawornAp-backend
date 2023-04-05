const regex = require("./index");

test("phone number regex matches", () => {
  expect(regex.test("0123456789")).toBe(false);
  expect(regex.test("01234567890")).toBe(false);
  expect(regex.test("0112345678")).toBe(false);
  expect(regex.test("0612345678")).toBe(true);
  expect(regex.test("0812345678")).toBe(true);
  expect(regex.test("0912345678")).toBe(true);
  expect(regex.test("0800023148")).toBe(true);
  expect(regex.test("08asdffasd")).toBe(false);
  expect(regex.test("08000000000")).toBe(false);
  expect(regex.test("0899999999")).toBe(true);
});

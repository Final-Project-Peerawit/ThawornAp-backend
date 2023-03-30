test("phone number regex matches", () => {
  const regex = /^0(6|8|9)\d{9}$/;
  expect(regex.test("0123456789")).toBe(false); // Invalid phone number
  expect(regex.test("01234567890")).toBe(false); // Invalid phone number
  expect(regex.test("01123456789")).toBe(false); // Invalid phone number
  expect(regex.test("06123456789")).toBe(true); // Valid phone number
  expect(regex.test("08123456789")).toBe(true); // Valid phone number
  expect(regex.test("09123456789")).toBe(true); // Valid phone number
});

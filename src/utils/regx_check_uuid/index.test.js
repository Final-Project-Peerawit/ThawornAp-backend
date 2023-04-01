const uuidRegex = require("./index");

test("Uuid regex matches", () => {
  expect(uuidRegex.test("550e8400-e29b-41d4-a716-446655440000")).toBe(true);
  expect(uuidRegex.test("f47ac10b-58cc-4372-a567-0e02b2c3d479")).toBe(true);
  expect(uuidRegex.test("a987fbc9-4bed-3078-cf07-9141ba07c9f3")).toBe(false);
  expect(uuidRegex.test("00000000-0000-4000-8000-000000000000")).toBe(true);
});

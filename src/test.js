import healthTest from "../src/index";
test("function test", () => {
  const obj = { name: "Маг", health: 90 };
  const prof = healthTest(obj);
  expect(prof).toBe("healthy");
});
test("function test", () => {
  const obj = { name: "Маг", health: 40 };
  const prof = healthTest(obj);
  expect(prof).toBe("wounded");
});
test("function test", () => {
  const obj = { name: "Маг", health: 10 };
  const prof = healthTest(obj);
  expect(prof).toBe("critical");
});

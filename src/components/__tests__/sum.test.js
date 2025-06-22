import { sum } from "../sum";

test("Sum fn should calculate the sum of two Numbers", () => {
  const result = sum(4, 3);

  //Assertion - is not mandatory  
  expect(result).toBe(7);
});

// DniTest.test.js
import { describe, it, expect } from "vitest";
import { calculateLetter } from "./DniApp";

describe("calculateLetter", () => {
  it('should return "Q" for DNI number 71975319', () => {
    expect(calculateLetter(71975319)).toBe("Q");
  });

  it('should return "E" for DNI number 99999998', () => {
    expect(calculateLetter(99999998)).toBe("E");
  });

  it('should return "T" for DNI number 0', () => {
    expect(calculateLetter(0)).toBe("T");
  });

  it('should return "R" for DNI number 99999999', () => {
    expect(calculateLetter(99999999)).toBe("R");
  });

  it("should throw an error for invalid DNI number", () => {
    expect(() => calculateLetter(-1)).toThrow("The provided data is incorrect");
    expect(() => calculateLetter(100000000)).toThrow(
      "The provided data is incorrect"
    );
    expect(() => calculateLetter(NaN)).toThrow(
      "The provided data is incorrect"
    );
  });
});

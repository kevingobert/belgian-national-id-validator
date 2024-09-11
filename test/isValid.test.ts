import { expect, test } from "vitest";
import { isValid } from "../src/validations";

test("valid national id", () => {
  expect(isValid("09082428248")).toBe(true);
  expect(isValid("75120513714")).toBe(true);
  expect(isValid("75.12.05-137.14")).toBe(true);
});

test("wrong national id", () => {
  expect(isValid("75.12.05-137.12")).toBe(false);
  expect(isValid("75120513712")).toBe(false);
});

test("invalid national id", () => {
  expect(isValid("")).toBe(false);
  expect(isValid("test")).toBe(false);
  expect(isValid("91180")).toBe(false);
  expect(isValid("75.28.05-137.12")).toBe(false);
});

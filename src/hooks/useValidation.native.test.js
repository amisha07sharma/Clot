import { renderHook } from "@testing-library/react-hooks";
import useValidation from "./useValidation";

describe("useValidation hook", () => {
  it("should validate email correctly", () => {
    const { result } = renderHook(() => useValidation());

    const { emailValidation } = result.current;

    expect(emailValidation("test@example.com")).toBe(true);
    expect(emailValidation("testexample.com")).toBe(false);
    expect(emailValidation("test@example")).toBe(false);
    expect(emailValidation("te@.com")).toBe(true);
    expect(emailValidation("")).toBe(false);
    expect(emailValidation("a@b.c")).toBe(false);
  });

  it("should validate password correctly", () => {
    const { result } = renderHook(() => useValidation());

    const { passwordValidation } = result.current;

    expect(passwordValidation("12345")).toBe(true);
    expect(passwordValidation("1234")).toBe(false);
    expect(passwordValidation("")).toBe(false);
  });

  it("should validate first name correctly", () => {
    const { result } = renderHook(() => useValidation());

    const { firstNameValidation } = result.current;

    expect(firstNameValidation("John")).toBe(true);
    expect(firstNameValidation("Jo")).toBe(false);
    expect(firstNameValidation("")).toBe(false);
  });

  it("should validate last name correctly", () => {
    const { result } = renderHook(() => useValidation());

    const { lastNameValidation } = result.current;

    expect(lastNameValidation("Doe")).toBe(true);
    expect(lastNameValidation("Do")).toBe(false);
    expect(lastNameValidation("")).toBe(false);
  });
});

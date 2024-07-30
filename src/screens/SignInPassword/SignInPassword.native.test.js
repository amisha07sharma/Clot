import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import SignInPassword from "./SignInPassword";

jest.mock("../../hooks", () => ({
  useValidation: () => ({
    passwordValidation: jest.fn(),
  }),
}));

jest.mock("../../components/CustomButton", () => (props) => (
  <MockView {...props} />
));

const mockOnContinue = jest.fn();
const mockOnResetPress = jest.fn();

const renderComponent = (props) => {
  render(
    <SignInPassword
      onContinue={mockOnContinue}
      onResetPress={mockOnResetPress}
      {...props}
    />
  );
};
describe("<SignInPassword />", () => {
  it("renders correctly", () => {
    const { component } = renderComponent;
    expect(component).toMatchSnapshot();
  });

  it("calls onContinue with password when Continue button is pressed", () => {
    renderComponent();

    const passwordInput = screen.getByTestId("PasswordInput");
    fireEvent.changeText(passwordInput, "testPassword");
    const continueButton = screen.getByTestId("ContinueButton");

    fireEvent.changeText(passwordInput, "testPassword");

    fireEvent.press(continueButton);

    expect(mockOnContinue).toHaveBeenCalledWith("testPassword");
  });

  it("calls onResetPress when Reset link is pressed", () => {
    renderComponent();

    const resetLink = screen.getByTestId("Reset");

    fireEvent.press(resetLink);

    expect(mockOnResetPress).toHaveBeenCalled();
  });
});

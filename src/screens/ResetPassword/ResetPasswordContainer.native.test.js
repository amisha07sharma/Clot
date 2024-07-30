import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import ResetPasswordContainer from "./ResetPasswordContainer";

const mockNavigation = {
  push: jest.fn(),
};
jest.mock("./ResetPassword", () => (props) => <MockView {...props} />);

describe("ResetPasswordContainer", () => {
  it("navigates to SignIn screen on continue press", () => {
    render(<ResetPasswordContainer navigation={mockNavigation} />);

    const ResetPasswordComponent = screen.getByTestId("ResetPassword");

    fireEvent(ResetPasswordComponent, "onContinue");

    expect(mockNavigation.push).toHaveBeenCalledWith("SignIn");
  });

  it("renders the SignIn component with correct props", () => {
    render(<ResetPasswordContainer navigation={mockNavigation} />);

    const ResetPasswordComponent = screen.getByTestId("ResetPassword");

    expect(ResetPasswordComponent).toBeTruthy();
    expect(ResetPasswordComponent.props.onContinue).toBeDefined();
  });
});

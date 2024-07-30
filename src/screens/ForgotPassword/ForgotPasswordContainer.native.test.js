import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import ForgotPasswordContainer from "./ForgotPasswordContainer";

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock("./ForgotPassword", () => (props) => <MockView {...props} />);

describe("ForgotPasswordContainer", () => {
  it("navigates to ResetPassword screen on continue press", () => {
    render(<ForgotPasswordContainer navigation={mockNavigation} />);

    const ForgotPasswordComponent = screen.getByTestId("ForgotPassword");

    fireEvent(ForgotPasswordComponent, "onContinue");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("ResetPassword");
  });

  it("renders the ForgotPassword component with correct props", () => {
    render(<ForgotPasswordContainer navigation={mockNavigation} />);

    const ForgotPasswordComponent = screen.getByTestId("ForgotPassword");

    expect(ForgotPasswordComponent).toBeTruthy();
    expect(ForgotPasswordComponent.props.onContinue).toBeDefined();
  });
});

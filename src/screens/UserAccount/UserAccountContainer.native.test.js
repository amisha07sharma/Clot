import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import SignInContainer from "./UserAccountContainer";

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock("./SignIn", () => (props) => <MockView {...props} />);

describe("SignInContainer", () => {
  it("navigates to SignInPassword screen on continue press", () => {
    render(<SignInContainer navigation={mockNavigation} />);

    const signInComponent = screen.getByTestId("SignIn");

    fireEvent(signInComponent, "onContinue");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("SignInPassword");
  });

  it("navigates to CreateAccount screen on create account press", () => {
    render(<SignInContainer navigation={mockNavigation} />);
    const signInComponent = screen.getByTestId("SignIn");

    fireEvent(signInComponent, "onCreateAccountPress");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("CreateAccount");
  });

  it("renders the SignIn component with correct props", () => {
    render(<SignInContainer navigation={mockNavigation} />);

    const signInComponent = screen.getByTestId("SignIn");

    expect(signInComponent).toBeTruthy();
    expect(signInComponent.props.onContinue).toBeDefined();
    expect(signInComponent.props.onCreateAccountPress).toBeDefined();
  });
});

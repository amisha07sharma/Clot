import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import CreateAccountContainer from "./CreateAccountContainer";

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock("./CreateAccount", () => (props) => <MockView {...props} />);

describe("CreateAccountContainer", () => {
  it("navigates to BasicDetails screen on continue press", () => {
    render(<CreateAccountContainer navigation={mockNavigation} />);

    const CreateAccountComponent = screen.getByTestId("CreateAccount");

    fireEvent(CreateAccountComponent, "onContinue");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("BasicDetails");
  });

  it("navigates to ForgotPassword screen on reset press", () => {
    render(<CreateAccountContainer navigation={mockNavigation} />);
    const CreateAccountComponent = screen.getByTestId("CreateAccount");

    fireEvent(CreateAccountComponent, "onResetPress");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("ForgotPassword");
  });

  it("renders the CreateAccount component with correct props", () => {
    render(<CreateAccountContainer navigation={mockNavigation} />);

    const CreateAccountComponent = screen.getByTestId("CreateAccount");

    expect(CreateAccountComponent).toBeTruthy();
    expect(CreateAccountComponent.props.onContinue).toBeDefined();
    expect(CreateAccountComponent.props.onResetPress).toBeDefined();
  });
});

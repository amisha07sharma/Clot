import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import ResetPassword from "./ResetPassword";

jest.mock("../../components/CustomButton", () => (props) => (
  <MockView {...props} />
));
const mockOnContinue = jest.fn();

const renderComponent = (props) => {
  render(<ResetPassword onContinue={mockOnContinue} {...props} />);
};
describe("ResetPassword", () => {
  it("renders correctly", () => {
    const component = renderComponent();
    expect(component).toMatchSnapshot();
  });

  it('calls onContinue when "Return to Login" button is pressed', () => {
    renderComponent();

    fireEvent(screen.getByTestId("ReturnToLogin"), "onPress");

    expect(mockOnContinue).toHaveBeenCalledTimes(1);
  });
});

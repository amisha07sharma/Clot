import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import MockAppProvider from "../../mocks/MockAppProvider";
import ForgotPassword from "./ForgotPassword";

jest.mock("../../hooks", () => ({
  useValidation: () => jest.fn(),
}));

jest.mock("../../components/CustomButton", () => (props) => (
  <MockView {...props} />
));

const mockOnContinue = jest.fn();
const mockProps = {
  onContinue: mockOnContinue,
};

const renderComponent = (props = {}) => {
  return render(
    <MockAppProvider>
      <ForgotPassword {...mockProps} {...props} />
    </MockAppProvider>
  );
};
describe("Tests for ForgotPassword Screen", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("updates email state when text input changes", () => {
    renderComponent();

    const emailInput = screen.getByTestId("EmailInput");

    fireEvent.changeText(emailInput, "new_email@example.com");
    expect(emailInput.props.value).toBe("new_email@example.com");
  });

  it("calls onContinue function when Continue button is pressed", () => {
    renderComponent();

    fireEvent(screen.getByTestId("ContinueButton"), "onPress");

    expect(mockOnContinue).toHaveBeenCalledTimes(1);
  });
});

import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import MockAppProvider from "../../mocks/MockAppProvider";
import SignIn from "./SignIn.native";

jest.mock("../../hooks", () => ({
  useValidation: () => jest.fn(),
}));

jest.mock("../../components/CustomButton", () => (props) => (
  <MockView {...props} />
));

jest.mock("../../components/CustomizeButtonWithLogo", () => (props) => (
  <MockView {...props} />
));

const mockOnContinue = jest.fn();
const mockOnCreateAccountPress = jest.fn();
const mockProps = {
  onContinue: mockOnContinue,
  onCreateAccountPress: mockOnCreateAccountPress,
};

const renderComponent = (props = {}) => {
  return render(
    <MockAppProvider>
      <SignIn {...mockProps} {...props} />
    </MockAppProvider>
  );
};
describe("Tests for SignIn Screen", () => {
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
    expect(emailInput.props.value).toBe("mocked_email@example.com");

    fireEvent.changeText(emailInput, "new_email@example.com");
    expect(emailInput.props.value).toBe("new_email@example.com");
  });

  it("calls onContinue function when Continue button is pressed", () => {
    renderComponent();

    fireEvent(screen.getByTestId("ContinueButton"), "onPress");

    expect(mockOnContinue).toHaveBeenCalledTimes(1);
  });
});

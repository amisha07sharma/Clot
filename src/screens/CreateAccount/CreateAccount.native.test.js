import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import MockAppProvider from "../../mocks/MockAppProvider";
import CreateAccount from "./CreateAccount";

jest.mock("../../hooks", () => ({
  useValidation: () => ({
    passwordValidation: jest.fn(),
    emailValidation: jest.fn(),
    firstNameValidation: jest.fn(),
    lastNameValidation: jest.fn(),
  }),
}));

jest.mock("../../components/CustomButton", () => (props) => (
  <MockView {...props} />
));

const mockOnContinue = jest.fn();
const mockOnResetPress = jest.fn();
const mockProps = {
  onContinue: mockOnContinue,
  onResetPress: mockOnResetPress,
};

const renderComponent = (props = {}) => {
  return render(
    <MockAppProvider>
      <CreateAccount {...mockProps} {...props} />
    </MockAppProvider>
  );
};
describe("Tests for CreateAccount Screen", () => {
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

  it("calls onResetPress callback when Reset text is pressed", () => {
    renderComponent();

    fireEvent.press(screen.getByTestId("Reset"));

    expect(mockOnResetPress).toHaveBeenCalledTimes(1);
  });

  it("updates state when input fields are changed", () => {
    const { getByTestId } = renderComponent();

    fireEvent.changeText(getByTestId("FirstNameInput"), "name1");
    fireEvent.changeText(getByTestId("LastNameInput"), "lastName");
    fireEvent.changeText(getByTestId("EmailInput"), "email@example.com");
    fireEvent.changeText(getByTestId("PasswordInput"), "password123");
    expect(getByTestId("FirstNameInput").props.value).toBe("name1");
    expect(getByTestId("LastNameInput").props.value).toBe("lastName");
    expect(getByTestId("EmailInput").props.value).toBe("email@example.com");
    expect(getByTestId("PasswordInput").props.value).toBe("password123");
  });

  it("disables Continue button when any input is invalid", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("ContinueButton").props.disabled).toBe(true);

    fireEvent.changeText(getByTestId("FirstNameInput"), "name1");
    fireEvent.changeText(getByTestId("LastNameInput"), "lastName");
    fireEvent.changeText(getByTestId("EmailInput"), "email@example.com");
    fireEvent.changeText(getByTestId("PasswordInput"), "password123");

    expect(getByTestId("ContinueButton").props.disabled).toBe(false);
  });
});

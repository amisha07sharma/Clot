import React from "react";
import { View as MockView } from "react-native";
import { render, screen, fireEvent } from "@testing-library/react-native";
import BasicDetails from "./BasicDetails";

jest.mock("react-native-dropdown-picker", () =>
  require("../../mocks/MockDropdownPicker")
);

jest.mock("./RadioButton", () => (props) => (
  <MockView {...props} testID={props.testID} />
));

jest.mock("../../components/CustomButton", () => (props) => (
  <MockView {...props} />
));

const mockOnContinue = jest.fn();
const renderComponent = (props) => {
  render(<BasicDetails onContinue={mockOnContinue} {...props} />);
};
describe("BasicDetails Component", () => {
  it("should render BasicDetails component correctly", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("should toggle between men and women", () => {
    renderComponent();

    expect(screen.getByTestId("Men").props.isActive).toBe(true);

    fireEvent.press(screen.getByTestId("Women"));

    expect(screen.getByTestId("Women").props.isActive).toBe(true);
    expect(screen.getByTestId("Men").props.isActive).toBe(false);
  });

  it("should interact with mocked DropDownPicker", () => {
    renderComponent();

    fireEvent.press(screen.getByTestId("Dropdown"));
  });

  it("should call onContinue prop when button is pressed", () => {
    renderComponent();

    fireEvent.press(screen.getByTestId("ContinueButton"));

    expect(mockOnContinue).toHaveBeenCalledTimes(1);
  });
});

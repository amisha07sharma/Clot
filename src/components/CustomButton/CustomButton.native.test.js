import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import CustomButton from "./CustomButton";

const mockOnPress = jest.fn();
const mockProps = {
  title: "Title",
  onPress: mockOnPress,
};

const renderComponent = (props) => {
  render(<CustomButton {...mockProps} {...props} />);
};
describe("CustomButton component", () => {
  it("renders correctly with default props", () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly when isActive is true", () => {
    const wrapper = renderComponent({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("handles onPress event correctly", () => {
    renderComponent();
    fireEvent(screen.getByTestId("Press"), "onPress");
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

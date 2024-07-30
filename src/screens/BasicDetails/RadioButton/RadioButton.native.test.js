import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import RadioButton from "./RadioButton";

const mockOnPress = jest.fn();
const mockProps = {
  title: "Title",
  onPress: mockOnPress,
};

const renderComponent = (props) => {
  render(<RadioButton {...mockProps} {...props} />);
};
describe("RadioButton component", () => {
  it("renders correctly with default props", () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly when isActive is true", () => {
    const wrapper = renderComponent({ isActive: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("handles onPress event correctly", () => {
    renderComponent();
    fireEvent(screen.getByTestId("Press"), "onPress");
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

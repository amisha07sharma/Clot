import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import CustomizeButtonWithLogo from "./CustomizeButtonWithLogo";

const mockOnPress = jest.fn();
const mockProps = {
  imageSource: "someImageURL",
  buttonText: "Button",
  onPress: mockOnPress,
};

const renderComponent = (props) => {
  render(<CustomizeButtonWithLogo {...mockProps} {...props} />);
};
describe("CustomizeButtonWithLogo component", () => {
  it("renders correctly with default props", () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it("handles onPress event correctly", () => {
    renderComponent();
    fireEvent(screen.getByTestId("Press"), "onPress");
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

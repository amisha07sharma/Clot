import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import Notifications from "./Notifications";

jest.mock("../../components/CustomButton", () => (props) => (
  <MockView {...props} />
));
const mockOnContinue = jest.fn();

const renderComponent = (props) => {
  render(<Notifications onContinue={mockOnContinue} {...props} />);
};
describe("Notifications", () => {
  it("renders correctly", () => {
    const component = renderComponent();
    expect(component).toMatchSnapshot();
  });

  it('calls onContinue when "Explore Categories" button is pressed', () => {
    renderComponent();

    fireEvent(screen.getByTestId("ExploreCategories"), "onPress");

    expect(mockOnContinue).toHaveBeenCalledTimes(1);
  });
});

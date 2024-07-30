import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import MockAppProvider from "../../mocks/MockAppProvider";
import Categories from "./Categories.native";

jest.mock("../../components/CustomizeButtonWithLogo", () => (props) => (
  <MockView {...props} />
));

const mockOnContinue = jest.fn();
const mockCategories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const mockProps = {
  onContinue: mockOnContinue,
  categories: mockCategories,
};

const renderComponent = (props = {}) => {
  return render(
    <MockAppProvider>
      <Categories {...mockProps} {...props} />
    </MockAppProvider>
  );
};
describe("Tests for Categories Screen", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("calls onContinue function when Continue button is pressed", () => {
    renderComponent();

    fireEvent(screen.getByTestId("ContinueButton"), "onPress");

    expect(mockOnContinue).toHaveBeenCalledTimes(1);
  });
});

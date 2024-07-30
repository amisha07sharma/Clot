import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import CategoriesContainer from "./CategoriesContainer";

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock("./Categories", () => (props) => <MockView {...props} />);

describe("CategoriesContainer", () => {
  it("navigates to ProductsByCategory screen on continue press", () => {
    render(<CategoriesContainer navigation={mockNavigation} />);

    const CategoriesComponent = screen.getByTestId("Categories");

    fireEvent(CategoriesComponent, "onContinue");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("ProductsByCategory");
  });

  it("renders the Categories component with correct props", () => {
    render(<CategoriesContainer navigation={mockNavigation} />);

    const CategoriesComponent = screen.getByTestId("Categories");

    expect(CategoriesComponent).toBeTruthy();
    expect(CategoriesComponent.props.onContinue).toBeDefined();
    expect(CategoriesComponent.props.categories).toBeDefined();
  });
});

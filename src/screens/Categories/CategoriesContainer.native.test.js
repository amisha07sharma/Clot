import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import MockAppProvider from "../../mocks/MockAppProvider";
import CategoriesContainer from "./CategoriesContainer";

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock("./Categories", () => (props) => <MockView {...props} />);

describe("CategoriesContainer", () => {
  it("navigates to ProductsByCategory screen on continue press", () => {
    render(
      <MockAppProvider>
        <CategoriesContainer navigation={mockNavigation} />
      </MockAppProvider>
    );

    const CategoriesComponent = screen.getByTestId("Categories");

    fireEvent(CategoriesComponent, "onContinue");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("ProductsByCategory");
  });

  it("renders the Categories component with correct props", () => {
    render(
      <MockAppProvider>
        <CategoriesContainer navigation={mockNavigation} />
      </MockAppProvider>
    );

    const CategoriesComponent = screen.getByTestId("Categories");

    expect(CategoriesComponent).toBeTruthy();
    expect(CategoriesComponent.props.onContinue).toBeDefined();
    expect(CategoriesComponent.props.categories).toBeDefined();
  });
});

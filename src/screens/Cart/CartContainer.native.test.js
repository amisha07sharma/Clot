import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import CartContainer from "./CartContainer";

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock("./Cart", () => (props) => <MockView {...props} />);

describe("CartContainer", () => {
  it("navigates to Categories screen on continue press", () => {
    render(<CartContainer navigation={mockNavigation} />);

    const CartComponent = screen.getByTestId("Cart");

    fireEvent(CartComponent, "onContinue");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("Categories");
  });

  it("renders the Cart component with correct props", () => {
    render(<CartContainer navigation={mockNavigation} />);

    const CartComponent = screen.getByTestId("Cart");

    expect(CartComponent).toBeTruthy();
    expect(CartComponent.props.onContinue).toBeDefined();
  });
});

import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import OrdersContainer from "./OrdersContainer";

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock("./Orders", () => (props) => <MockView {...props} />);

describe("OrdersContainer", () => {
  it("navigates to Categories screen on continue press", () => {
    render(<OrdersContainer navigation={mockNavigation} />);

    const OrdersComponent = screen.getByTestId("Orders");

    fireEvent(OrdersComponent, "onContinue");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("Categories");
  });

  it("renders the Categories component with correct props", () => {
    render(<OrdersContainer navigation={mockNavigation} />);

    const OrdersComponent = screen.getByTestId("Orders");

    expect(OrdersComponent).toBeTruthy();
    expect(OrdersComponent.props.onContinue).toBeDefined();
  });
});

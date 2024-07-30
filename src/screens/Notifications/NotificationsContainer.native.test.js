import React from "react";
import { View as MockView } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import NotificationsContainer from "./NotificationsContainer";

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock("./Notifications", () => (props) => <MockView {...props} />);

describe("NotificationsContainer", () => {
  it("navigates to Categories screen on continue press", () => {
    render(<NotificationsContainer navigation={mockNavigation} />);

    const NotificationsComponent = screen.getByTestId("Notifications");

    fireEvent(NotificationsComponent, "onContinue");

    expect(mockNavigation.navigate).toHaveBeenCalledWith("Categories");
  });

  it("renders the Notifications component with correct props", () => {
    render(<NotificationsContainer navigation={mockNavigation} />);

    const NotificationsComponent = screen.getByTestId("Notifications");

    expect(NotificationsComponent).toBeTruthy();
    expect(NotificationsComponent.props.onContinue).toBeDefined();
  });
});

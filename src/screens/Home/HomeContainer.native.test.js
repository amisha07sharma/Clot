import React from "react";
import { View as MockView } from "react-native";
import { render, act, screen } from "@testing-library/react-native";
import HomeContainer from "./HomeContainer";

jest.mock("./Home", () => (props) => <MockView {...props} />);

const mockNavigation = {
  navigate: jest.fn(),
};

const renderComponent = (props) => {
  render(<HomeContainer navigation={mockNavigation} {...props} />);
};

describe("HomeContainer", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Mock timers to control setTimeout
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should navigate to 'SignIn' after 2 seconds", () => {
    renderComponent();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(mockNavigation.navigate).toHaveBeenCalledWith("SignIn");
  });
});

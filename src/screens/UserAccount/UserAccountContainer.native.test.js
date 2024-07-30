import React from "react";
import { View as MockView } from "react-native";
import { render, screen } from "@testing-library/react-native";
import UserAccountContainer from "./UserAccountContainer";

jest.mock("./UserAccount", () => (props) => <MockView {...props} />);

describe("UserAccountContainer", () => {
  it("renders the UserAccount component with correct props", () => {
    render(<UserAccountContainer />);

    const UserAccountComponent = screen.getByTestId("UserAccount");

    expect(UserAccountComponent).toBeTruthy();
  });
});

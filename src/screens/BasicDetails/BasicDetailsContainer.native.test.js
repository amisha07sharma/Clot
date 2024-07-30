import React from "react";
import { View as MockView } from "react-native";
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react-native";
import BasicDetailsContainer from "./BasicDetailsContainer";

const navigation = {
  navigate: jest.fn(),
};
jest.mock("./BasicDetails", () => (props) => <MockView {...props} />);

jest.mock("../../api/clot", () => ({
  post: jest.fn(),
}));

const renderComponent = (props) => {
  render(<BasicDetailsContainer navigation={navigation} {...props} />);
};

describe("BasicDetailsContainer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call clot api with correct credentials on continue", async () => {
    const mockResponse = { data: { token: "mockToken" } };
    require("../../api/clot").post.mockResolvedValue(mockResponse);

    renderComponent();

    fireEvent(screen.getByTestId("BasicDetails"), "onContinue");

    await waitFor(() => {
      expect(require("../../api/clot").post).toHaveBeenCalledWith(
        "/auth/login",
        {
          username: "mor_2314",
          password: "83r5^_",
        }
      );
    });
    expect(navigation.navigate).toHaveBeenCalledWith("HomePage");
  });

  it("should throw an error on clot API call failure", async () => {
    require("../../api/clot").post.mockRejectedValue(new Error("API Error"));

    console.error = jest.fn();

    renderComponent();

    fireEvent(screen.getByTestId("BasicDetails"), "onContinue");

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(new Error("API Error"));
    });

    expect(navigation.navigate).not.toHaveBeenCalled();
  });
});

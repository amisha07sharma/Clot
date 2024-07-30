import React from "react";
import { View as MockView } from "react-native";
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react-native";
import SignInPasswordContainer from "./SignInPasswordContainer";

const navigation = {
  navigate: jest.fn(),
  push: jest.fn(),
};

jest.mock("./SignInPassword", () => (props) => <MockView {...props} />);

jest.mock("../../api/clot", () => ({
  post: jest.fn(),
}));

const renderComponent = (props) => {
  render(<SignInPasswordContainer navigation={navigation} {...props} />);
};
describe("SignInPasswordContainer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call clot api with correct credentials on continue", async () => {
    const mockResponse = { data: { token: "mockToken" } };
    require("../../api/clot").post.mockResolvedValue(mockResponse);

    renderComponent();

    fireEvent(screen.getByTestId("SignInPassword"), "onContinue");

    await waitFor(() => {
      expect(require("../../api/clot").post).toHaveBeenCalledWith(
        "/auth/login",
        {
          username: "mor_2314",
          password: "83r5^_",
        }
      );
    });

    expect(navigation.push).toHaveBeenCalledWith("BasicDetails");
  });

  it("should navigate to ForgotPassword on reset press", () => {
    renderComponent();

    fireEvent(screen.getByTestId("SignInPassword"), "onResetPress");

    expect(navigation.navigate).toHaveBeenCalledWith("ForgotPassword");
  });

  it("should throw an error on clot API call failure", async () => {
    require("../../api/clot").post.mockRejectedValue(new Error("API Error"));

    console.error = jest.fn();

    renderComponent();

    fireEvent(screen.getByTestId("SignInPassword"), "onContinue");

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(new Error("API Error"));
    });

    expect(navigation.push).not.toHaveBeenCalled();
  });
});

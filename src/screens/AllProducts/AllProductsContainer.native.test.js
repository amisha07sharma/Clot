import React from "react";
import { View as MockView } from "react-native";
import { render, screen } from "@testing-library/react-native";
import AllProductsContainer from "./AllProductsContainer";

jest.mock("./AllProducts", () => (props) => <MockView {...props} />);

describe("AllProductsContainer", () => {
  it("renders the AllProducts component with correct props", () => {
    render(<AllProductsContainer />);

    const signInComponent = screen.getByTestId("SignIn");

    expect(signInComponent).toBeTruthy();
    expect(signInComponent.props.productsList).toBeDefined();
  });
});

import React from "react";
import { View as MockView } from "react-native";
import { render, screen } from "@testing-library/react-native";
import MockAppProvider from "../../mocks/MockAppProvider";
import ProductsByCategoryContainer from "./ProductsByCategoryContainer";

jest.mock("./ProductsByCategory", () => (props) => <MockView {...props} />);

describe("ProductsByCategoryContainer", () => {
  it("renders the ProductsByCategory component with correct props", () => {
    render(
      <MockAppProvider>
        <ProductsByCategoryContainer />
      </MockAppProvider>
    );

    const ProductsByCategoryComponent =
      screen.getByTestId("ProductsByCategory");

    expect(ProductsByCategoryComponent).toBeTruthy();
    expect(ProductsByCategoryComponent.props.productsList).toBeDefined();
    expect(ProductsByCategoryComponent.props.category).toBeDefined();
  });
});

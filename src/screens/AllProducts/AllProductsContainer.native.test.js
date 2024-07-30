import React from "react";
import { View as MockView } from "react-native";
import { render, screen, waitFor } from "@testing-library/react-native";
import AllProductsContainer from "./AllProductsContainer";

jest.mock("./AllProducts", () => (props) => <MockView {...props} />);

const mockProductsList = [
  {
    id: 5,
    title: "abc",
    price: "123",
    image: "image.url",
  },
  {
    id: 7,
    title: "abcd",
    price: "129",
    image: "image2.url",
  },
];

jest.mock("../../api/clot", () => ({
  get: jest.fn(),
}));

describe("AllProductsContainer", () => {
  it("renders the AllProducts component with correct props", () => {
    render(<AllProductsContainer />);

    const AllProductsComponent = screen.getByTestId("AllProducts");

    expect(AllProductsComponent).toBeTruthy();
    expect(AllProductsComponent.props.productsList).toBeDefined();
  });

  it("fetches products successfully", async () => {
    require("../../api/clot").get.mockResolvedValueOnce({
      data: mockProductsList,
    });

    render(<AllProductsContainer />);

    await waitFor(() => {
      expect(require("../../api/clot").get).toHaveBeenCalledWith("/products");
      expect(screen.getByTestId("AllProducts")).toBeInTheDocument();

      mockProducts.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
      });
    });
  });

  it("handles API error", async () => {
    const errorMessage = "API Error";
    require("../../api/clot").get.mockRejectedValueOnce(
      new Error(errorMessage)
    );

    render(<AllProductsContainer />);

    await waitFor(() => {
      expect(require("../../api/clot").get).toHaveBeenCalledWith("/products");
      expect(screen.getByText("Error fetching data")).toBeInTheDocument();
    });
  });
});

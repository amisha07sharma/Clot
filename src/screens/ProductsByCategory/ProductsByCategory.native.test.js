import React from "react";
import { render } from "@testing-library/react-native";
import MockAppProvider from "../../mocks/MockAppProvider";
import ProductsByCategory from "./ProductsByCategory";

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
const mockProps = {
  productsList: mockProductsList,
  category: "jewelery",
};

const renderComponent = (props = {}) => {
  return render(
    <MockAppProvider>
      <ProductsByCategory {...mockProps} {...props} />
    </MockAppProvider>
  );
};
describe("Tests for ProductsByCategory Screen", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });
});

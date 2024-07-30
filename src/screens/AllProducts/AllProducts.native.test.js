import React from "react";
import { render } from "@testing-library/react-native";
import MockAppProvider from "../../mocks/MockAppProvider";
import AllProducts from "./AllProducts";

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
};

const renderComponent = (props = {}) => {
  return render(
    <MockAppProvider>
      <AllProducts {...mockProps} {...props} />
    </MockAppProvider>
  );
};
describe("Tests for AllProducts Screen", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });
});

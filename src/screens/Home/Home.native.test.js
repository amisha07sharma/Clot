import React from "react";
import { render } from "@testing-library/react-native";
import Home from "./Home";

describe("Home component", () => {
  it("renders correctly", () => {
    const { component } = render(<Home />);

    expect(component).toMatchSnapshot();
  });
});

import React from "react";
import { render } from "enzyme";
import { Button, amount } from "./index";

describe("index", () => {
  it("should render correctly", () => {
    expect(render(<Button />)).toMatchSnapshot();
  });

  it("should get me the right amount", async () => {
    const result = await amount();
    expect(result).toEqual(3);
  });
});

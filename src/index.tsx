import React from "react";
import glamorous, { Div } from "glamorous";

const StyledButton = glamorous.button({
  color: "red"
});

export class Button extends React.Component {
  public render() {
    return (
      <Div>
        <StyledButton>Click me</StyledButton>
      </Div>
    );
  }
}

export async function amount() {
  const { add } = await import("./calc");
  return add(1, 2);
}

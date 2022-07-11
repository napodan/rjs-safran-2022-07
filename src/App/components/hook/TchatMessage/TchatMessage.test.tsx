import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TchatMessage from "./TchatMessage";

describe("<TchatMessage />", () => {
  test("it should mount", () => {
    render(
      <TchatMessage
        message={{
          text: "Premier message",
          id: 0,
          dt: "XXXX",
          from: 1,
        }}
        user={undefined}
      />
    );

    const tchatMessage = screen.getByTestId("TchatMessage");

    expect(tchatMessage).toBeInTheDocument();
  });
});

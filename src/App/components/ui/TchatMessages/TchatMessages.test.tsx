import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TchatMessages from "./TchatMessages";

describe("<TchatMessages />", () => {
  test("it should mount", () => {
    render(<TchatMessages messages={[]} users={[]} />);

    const tchatMessages = screen.getByTestId("TchatMessages");

    expect(tchatMessages).toBeInTheDocument();
  });
});

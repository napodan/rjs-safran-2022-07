import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("<Header version/>", () => {
  test("it should mount", () => {
    render(<Header version="" />);

    const header = screen.getByTestId("Header");
    expect(header).toBeInTheDocument();
    const svgNode = header.childNodes[0];
    expect(svgNode.nodeName).toBe("svg");
    console.log((svgNode.childNodes[0] as Text).data);
    expect(svgNode.childNodes.length).toBe(1);
  });
});

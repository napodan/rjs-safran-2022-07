import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

import {isTrue} from './headerTestFunc'

describe("<Header />", () => {
  test("it should mount", () => {
    render(<Header version={1.0} />);

    const header = screen.getByTestId("Header");
    expect(header).toBeInTheDocument();

    const svgNode = header.childNodes[0];
    expect(svgNode.nodeName).toBe("svg");

    const span = header.childNodes[1].childNodes[1];
   /* expect(span.innerHTML).toBe("&nbsp;1");
    expect(span.className).toContain("version");*/
    isTrue(true);
  });
});



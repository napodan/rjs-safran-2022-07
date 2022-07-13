import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TchatUser from "./TchatUser";

describe("<TchatUser />", () => {
  test("it should mount", () => {
    render(
      <TchatUser
        user={{
          id: 0,
          fullName: "",
          img: null,
          nick: "",
          timeLastAction: new Date().toString(),
        }}
        ondbclick={()=>{}}
      />
    );

    const tchatUser = screen.getByTestId("TchatUser");

    expect(tchatUser).toBeInTheDocument();
  });
});

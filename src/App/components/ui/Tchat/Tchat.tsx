import React, { useEffect, useState } from "react";
import IUser from "../../../interfaces/IUsers";
import FlexH from "../../layout/FlexH/FlexH";
import FlexW from "../../layout/FlexW/FlexW";
import TchatMessage from "../TchatMessage/TchatMessage";
import TchatMessages from "../TchatMessages/TchatMessages";
import TchatUsers from "../TchatUsers/TchatUsers";
import TchatWriter from "../TchatWriter/TchatWriter";
import style from "./Tchat.module.css";
/**
 * interface du composant Tchat
 */
export interface ITchatProps {}

export interface ITchatState {
  users: Array<IUser>;
}
const tchatInitialState: ITchatState = {
  users: [
    {
      id: 0,
      nick: "champix",
      fullName: "Alex champix",
      img: null,
      timeLastAction: new Date().toString(),
    },
    {
      id: 1,
      nick: "Alex",
      fullName: "Alexandre",
      img: null,
      timeLastAction: new Date().toString(),
    },
  ],
};
class Tchat extends React.Component<ITchatProps, ITchatState> {
  constructor(props: ITchatProps) {
    super(props);
    this.state = tchatInitialState;
  }
  render() {
    return (
      <div className={style.Tchat} data-testid="Tchat">
        <FlexH>
          <FlexW>
            <TchatMessages users={this.state.users} />
            <TchatUsers users={this.state.users} />
          </FlexW>
          <div>
            <TchatWriter />
          </div>
        </FlexH>
      </div>
    );
  }
}

export default Tchat;

import React from "react";
import FlexH from "../../layout/FlexH/FlexH";
import FlexW from "../../layout/FlexW/FlexW";
import TchatMessages from "../TchatMessages/TchatMessages";
import TchatUsers from "../TchatUsers/TchatUsers";
import TchatWaiter from "../TchatWaiter/TchatWaiter";
import { IUser } from "../../interfaces/IUser";
import style from "./Tchat.module.css";

export interface ITchatProps {}

export interface ITchatState {
  users: Array<IUser>;
}
/**
 * etat initial des props du composant Tchat
 */
const tchatInitialState: ITchatState = {
  users: [
    {
      id: 0,
      nick: "champix",
      fullName: "Alex Champix",
      img: null,
      timeLastAction: new Date().toString(),
    },
    {
      id: 1,
      nick: "Alex 2",
      fullName: "Alexandre Champix",
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
          <TchatWaiter />
        </FlexH>
      </div>
    );
  }
}

export default Tchat;

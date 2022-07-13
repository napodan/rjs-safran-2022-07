import React from "react";
import { useSelector } from "react-redux";
import TchatMessages from "./TchatMessages";
import { IStotreState } from "../../../store/store";
import IUser from "../../../interfaces/IUsers";
import IMessage from "../../../interfaces/IMessage";

export default function TchatMessagesConnected() {
  const ressources= useSelector((s: IStotreState) => ({messages:s.messages.values,users:s.users.values}));
  return <TchatMessages messages={ressources.messages} users={ressources.users} />;
}

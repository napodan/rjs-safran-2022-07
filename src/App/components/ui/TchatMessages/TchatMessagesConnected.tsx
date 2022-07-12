import React from "react";
import { useSelector } from "react-redux";
import TchatMessages from "./TchatMessages";
import { IStotreState } from "../../../store/store";

export default function TchatMessagesConnected() {
  const messages = useSelector((s: IStotreState) => s.messages.values);
  return <TchatMessages messages={messages} users={[]} />;
}

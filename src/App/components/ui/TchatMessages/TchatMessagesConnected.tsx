import React from "react";
import { useSelector } from "react-redux";
import TchatMessages from "./TchatMessages";
import { IStoreState } from "../../../store/store";

const TchatMessagesConnected = () => {
  const messages = useSelector((s: IStoreState) => s.messages.values);
  return <TchatMessages messages={messages} users={[]} />;
};

export default TchatMessagesConnected;

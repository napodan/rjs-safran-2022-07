import React from "react";
import { useSelector } from "react-redux";
import { IStotreState } from "../../../store/store";
import TchatUsers from "./TchatUsers";

export default function TchatUsersConnected(props) {
  const users = useSelector((s: IStotreState) => s.users.values);
  return <TchatUsers users={users} />;
}

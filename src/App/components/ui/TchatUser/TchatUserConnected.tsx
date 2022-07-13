import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStotreState } from "../../../store/store";
import TchatUser, { TchatUserConnect } from "./TchatUser";


export default function TchatUsersConnected(props) {
  const d=useDispatch();
  return <TchatUserConnect user={props.user}  />;
}

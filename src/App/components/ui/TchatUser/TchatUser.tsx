import { Avatar } from "@mui/material";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import IUser from "../../../interfaces/IUsers";
import { selectUser } from "../../../store/usersSlice";
import FlexW from "../../layout/FlexW/FlexW";
import AvatarUser from "../AvatarUser/AvatarUser";
import AvatarUserStories from "../AvatarUser/AvatarUser.stories";
import style from "./TchatUser.module.css";
/**
 * interface du composant TchatUser
 */
export interface ITchatUserProps {
  user: IUser;
  ondbclick: Function;
}
/**
 * etat initial des props du composant TchatUser
 */

const TchatUser: React.FC<ITchatUserProps> = (props) => {
  return (
    <div
      className={style.TchatUser}
      data-testid="TchatUser"
      onDoubleClick={()=>props.ondbclick()}
    >
      <AvatarUser user={props.user} />
      <span className={style.nick}>{props.user.nick}</span>
    </div>
  );
};
export const TchatUserConnect = (props: { user: IUser }) => {
  const d = useDispatch();
  return (
    <TchatUser
      user={props.user}
      ondbclick={(evt) => d(selectUser(props.user.id))}
    />
  );
};
export default TchatUser;

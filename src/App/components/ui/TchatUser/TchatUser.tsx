import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import IUser from "../../../interfaces/IUsers";
import FlexW from "../../layout/FlexW/FlexW";
import AvatarUser from "../AvatarUser/AvatarUser";
import AvatarUserStories from "../AvatarUser/AvatarUser.stories";
import style from "./TchatUser.module.css";
/**
 * interface du composant TchatUser
 */
export interface ITchatUserProps {
  user: IUser;
}
/**
 * etat initial des props du composant TchatUser
 */
const tchatUserInitialState = {};
const TchatUser: React.FC<ITchatUserProps> = (props) => {
  return (
    <div className={style.TchatUser} data-testid="TchatUser">
      <AvatarUser user={props.user}/>
      <span className={style.nick}>{props.user.nick}</span>
    </div>
  );
};

export default TchatUser;

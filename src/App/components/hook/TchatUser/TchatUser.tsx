import { Avatar } from "@mui/material";
import React from "react";
import { IUser } from "../../interfaces/IUser";
import style from "./TchatUser.module.css";
/**
 * interface du composant TchatUser
 */
export interface ITchatUserProps {
  user: IUser;
}

const TchatUser: React.FC<ITchatUserProps> = (props) => {
  return (
    <div className={style.TchatUser} data-testid="TchatUser">
      <Avatar
        alt={props.user.fullName + " Sharp"}
        src={props.user.img ? props.user.img : undefined}
        sx={{ display: "inline", marginRight: "10px", height: 70, width: 70 }}
      >
        {props.user.nick.substring(0, 2)}
      </Avatar>
      <span className={style.nick}>{props.user.nick}</span>
    </div>
  );
};

export default TchatUser;

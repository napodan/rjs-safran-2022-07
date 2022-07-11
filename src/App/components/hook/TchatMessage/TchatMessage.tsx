import { Avatar } from "@mui/material";
import React from "react";
import { IMessage } from "../../interfaces/IMessage";
import { IUser } from "../../interfaces/IUser";
import style from "./TchatMessage.module.css";
/**
 * interface du composant TchatMessage
 */
export interface ITchatMessageProps {
  message: IMessage;
  user: IUser | undefined;
}

const TchatMessage: React.FC<ITchatMessageProps> = (props) => {
  return (
    <div className={style.TchatMessage} data-testid="TchatMessage">
      <Avatar
        alt={props.user?.fullName + " Sharp"}
        src={props.user?.img ? props.user.img : undefined}
        sx={{ display: "inline", marginRight: "10px", height: 70, width: 70 }}
      >
        {props.user?.nick.substring(0, 2)}
      </Avatar>
      {props.message.dt}
      {props.message.text}
    </div>
  );
};

export default TchatMessage;

import React from "react";
import { IUser } from "../../interfaces/IUser";
import TchatUser from "../TchatUser/TchatUser";
import style from "./TchatUsers.module.css";
/**
 * interface du composant TchatUsers
 */
export interface ITchatUsersProps {
  users: Array<IUser>;
}

const TchatUsers: React.FC<ITchatUsersProps> = (props) => {
  return (
    <div className={style.TchatUsers} data-testid="TchatUsers">
      {props.users.map((value) => (
        <TchatUser key={value.id.toString()} user={value} />
      ))}
    </div>
  );
};

export default TchatUsers;

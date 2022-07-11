import React from "react";
import IUser from "../../../interfaces/IUsers";
import TchatUser from "../TchatUser/TchatUser";
import style from "./TchatUsers.module.css";
/**
 * interface du composant TchatUsers
 */
export interface ITchatUsersProps {
  users:Array<IUser>
}
/**
 * etat initial des props du composant TchatUsers
 */
const TchatUsers: React.FC<ITchatUsersProps> = (props) => {
  return (
    <div className={style.TchatUsers} data-testid="TchatUsers">
      {props.users.map(u=><TchatUser user={u} key={'u'+u.id}/>)}
    </div>
  );
};

export default TchatUsers;

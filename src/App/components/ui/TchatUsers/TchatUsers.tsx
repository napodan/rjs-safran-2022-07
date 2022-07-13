import React from "react";
import { useDispatch } from "react-redux";
import IUser from "../../../interfaces/IUsers";
import { selectUser } from "../../../store/usersSlice";
import TchatUser from "./TchatUsers";
import style from "./TchatUsers.module.css";
import TchatUserConnected from "../TchatUser/TchatUserConnected";
/**
 * interface du composant TchatUsers
 */
export interface ITchatUsersProps {
  users: Array<IUser>;
}
/**
 * etat initial des props du composant TchatUsers
 */
const TchatUsers: React.FC<ITchatUsersProps> = (props) => {
   
  return (
    <div className={style.TchatUsers} data-testid="TchatUsers">
      {props.users.map((u) => (
        <TchatUserConnected
          user={u}
          key={"u" + u.id} 
         
        />
      ))}
    </div>
  );
};

export default TchatUsers;

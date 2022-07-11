import React, { useEffect, useState } from "react";
import TchatUser from "../TchatUser/TchatUser";
import style from "./TchatUsers.module.css";
/**
 * interface du composant TchatUsers
 */
export interface ITchatUsersProps {}
/**
 * etat initial des props du composant TchatUsers
 */
const tchatUsersInitialState = {};
const TchatUsers: React.FC<ITchatUsersProps> = (props) => {
  /*const [state, setstate] = useState(tchatUsersInitialState);
  useEffect(() => {
    console.log("update/mount");

    return () => {};
  }, [state]);*/
  return (
    <div className={style.TchatUsers} data-testid="TchatUsers">
      <TchatUser />
    </div>
  );
};

export default TchatUsers;

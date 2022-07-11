import React, { useEffect, useState } from "react";
import style from "./TchatUser.module.css";
/**
 * interface du composant TchatUser
 */
export interface ITchatUserProps {}
/**
 * etat initial des props du composant TchatUser
 */
const tchatUserInitialState = {};
const TchatUser: React.FC<ITchatUserProps> = (props) => {
  const [state, setstate] = useState(tchatUserInitialState);
  useEffect(() => {
    console.log("update/mount");

    return () => {};
  }, [state]);
  return <div className={style.TchatUser} data-testid="TchatUser">tchatUser</div>;
};

export default TchatUser;

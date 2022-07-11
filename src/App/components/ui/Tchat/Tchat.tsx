import React, { useEffect, useState } from "react";
import style from "./Tchat.module.css";
/**
 * interface du composant Tchat
 */
export interface ITchatProps {}
/**
 * etat initial des props du composant Tchat
 */
const tchatInitialState = {};
const Tchat: React.FC<ITchatProps> = (props) => {
  const [state, setstate] = useState(tchatInitialState);
  useEffect(() => {
    console.log("update/mount");

    return () => {};
  }, [state]);
  return <div className={style.Tchat} data-testid="Tchat">tchat</div>;
};

export default Tchat;

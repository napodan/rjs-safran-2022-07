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
  const [state, setState] = useState(tchatInitialState);
  useEffect(() => {
    console.log("update/mount");
    return () => {};
  }, [state]);
  return (
    <div className={style.Tchat} data-testid="Tchat">
      Tchat
    </div>
  );
};

export default Tchat;

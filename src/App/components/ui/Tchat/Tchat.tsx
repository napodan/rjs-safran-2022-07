import React, { useEffect, useState } from "react";
import FlexH from "../../layout/FlexH/FlexH";
import FlexW from "../../layout/FlexW/FlexW";
import TchatMessage from "../TchatMessage/TchatMessage";
import TchatMessages from "../TchatMessages/TchatMessages";
import TchatUsers from "../TchatUsers/TchatUsers";
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
//  const [state, setstate] = useState(tchatInitialState);
/*  useEffect(() => {
    console.log("update/mount");

    return () => {};
  }, [state]);*/
  return <div className={style.Tchat} data-testid="Tchat">
<FlexH>
  <FlexW>
    <TchatMessages/>
    <TchatUsers/>
  </FlexW>
<div>Writer</div>
</FlexH>

  </div>;
};

export default Tchat;

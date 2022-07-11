import React, { useEffect, useState } from "react";
import TchatMessage from "../TchatMessage/TchatMessage";
import style from "./TchatMessages.module.css";
/**
 * interface du composant TchatMessages
 */
export interface ITchatMessagesProps {}
/**
 * etat initial des props du composant TchatMessages
 */
const tchatMessagesInitialState = {};
const TchatMessages: React.FC<ITchatMessagesProps> = (props) => {
 /* const [state, setstate] = useState(tchatMessagesInitialState);
  useEffect(() => {
    console.log("update/mount");

    return () => {};
  }, [state]);*/
  return <div className={style.TchatMessages} data-testid="TchatMessages"><TchatMessage/></div>;
};

export default TchatMessages;

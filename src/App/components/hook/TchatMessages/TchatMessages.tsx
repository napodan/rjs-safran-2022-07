import React, { useEffect, useState } from "react";
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
  const [state, setState] = useState(tchatMessagesInitialState);
  useEffect(() => {
    console.log("update/mount");
    return () => {};
  }, [state]);
  return (
    <div className={style.TchatMessages} data-testid="TchatMessages">
      TchatMessages
    </div>
  );
};

export default TchatMessages;

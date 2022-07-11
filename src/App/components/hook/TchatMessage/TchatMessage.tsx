import React, { useEffect, useState } from "react";
import style from "./TchatMessage.module.css";
/**
 * interface du composant TchatMessage
 */
export interface ITchatMessageProps {}

/**
 * etat initial des props du composant TchatMessage
 */
const tchatMessageInitialState = {};
const TchatMessage: React.FC<ITchatMessageProps> = (props) => {
  const [state, setState] = useState(tchatMessageInitialState);
  useEffect(() => {
    console.log("update/mount");
    return () => {};
  }, [state]);
  return (
    <div className={style.TchatMessage} data-testid="TchatMessage">
      TchatMessage
    </div>
  );
};

export default TchatMessage;

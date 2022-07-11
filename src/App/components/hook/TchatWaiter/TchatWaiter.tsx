import React, { useEffect, useState } from "react";
import style from "./TchatWaiter.module.css";
/**
 * interface du composant TchatWaiter
 */
export interface ITchatWaiterProps {}

/**
 * etat initial des props du composant TchatWaiter
 */
const tchatWaiterInitialState = {};
const TchatWaiter: React.FC<ITchatWaiterProps> = (props) => {
  const [state, setState] = useState(tchatWaiterInitialState);
  useEffect(() => {
    console.log("update/mount");
    return () => {};
  }, [state]);
  return (
    <div className={style.TchatWaiter} data-testid="TchatWaiter">
      TchatWaiter
    </div>
  );
};

export default TchatWaiter;

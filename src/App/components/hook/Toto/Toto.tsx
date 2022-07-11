import React, { useEffect, useState } from "react";
import style from "./Toto.module.css";
/**
 * interface du composant Toto
 */
export interface ITotoProps {}

/**
 * etat initial des props du composant Toto
 */
const totoInitialState = {};
const Toto: React.FC<ITotoProps> = (props) => {
  const [state, setState] = useState(totoInitialState);
  useEffect(() => {
    console.log("update/mount");
    return () => {};
  }, [state]);
  return (
    <div className={style.Toto} data-testid="Toto">
      Toto
    </div>
  );
};

export default Toto;

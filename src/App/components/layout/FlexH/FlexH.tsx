import React from "react";

import style from "./FlexH.module.css";

/**
 * interface du layout template
 */
interface IFlexHProps {
  children: React.ReactNode;
}
const FlexH: React.FC<IFlexHProps> = (props) => {
  return (
    <div className={style.FlexH} data-testid="FlexH">
      {props.children}
    </div>
  );
};

export default FlexH;

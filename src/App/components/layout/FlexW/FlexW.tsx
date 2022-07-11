import React from "react";

import style from "./FlexW.module.css";

/**
 * interface du layout template
 */
interface IFlexWProps {
  children: React.ReactNode;
}
const FlexW: React.FC<IFlexWProps> = (props) => {
  return (
    <div className={style.FlexW} data-testid="FlexW">
      {props.children}
    </div>
  );
};

export default FlexW;

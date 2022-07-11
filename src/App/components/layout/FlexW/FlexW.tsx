import React from "react";
import styles from "./FlexW.module.css";
interface IFlexWProps {
  children: React.ReactNode;
}

const FlexW: React.FC<IFlexWProps> = (props) => {
  return (
    <div className={styles.FlexW} data-testid="FlexW">
      {props.children}
    </div>
  );
};

export default FlexW;

import React from "react";
import styles from "./FlexH.module.css";
interface IFlexHProps {
  children: React.ReactNode;
}

const FlexH: React.FC<IFlexHProps> = (props) => {
  return (
    <div className={styles.FlexH} data-testid="FlexH">
      {props.children}
    </div>
  );
};

export default FlexH;

import React from "react";
import styles from "./TemplateName.module.css";
interface ITemplateNameProps {
  children: React.ReactNode;
}

const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      {props.children}
    </div>
  );
};

export default TemplateName;

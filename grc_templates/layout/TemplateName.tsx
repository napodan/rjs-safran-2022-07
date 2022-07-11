import React from "react";

import style from "./TemplateName.module.css";

/**
 * interface du layout template
 */
interface ITemplateNameProps {
  children: React.ReactNode;
}
const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  return (
    <div className={style.TemplateName} data-testid="TemplateName">
      {props.children}
    </div>
  );
};

export default TemplateName;

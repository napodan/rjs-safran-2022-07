import React, { useEffect, useState } from "react";
import style from "./TemplateName.module.css";
/**
 * interface du composant TemplateName
 */
export interface ITemplateNameProps {}

/**
 * etat initial des props du composant TemplateName
 */
const templateNameInitialState = {};
const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  const [state, setState] = useState(templateNameInitialState);
  useEffect(() => {
    console.log("update/mount");
    return () => {};
  }, [state]);
  return (
    <div className={style.TemplateName} data-testid="TemplateName">
      TemplateName
    </div>
  );
};

export default TemplateName;

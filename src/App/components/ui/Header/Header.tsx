import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import { ReactComponent as Headerlogo } from "../../../../logo.svg";
import { useTranslation } from "react-i18next";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
/**
 * interface du composant Header
 */
export interface IHeaderProps {
  version: any;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { t , i18n} = useTranslation();
 
  return (
    <div className={style.Header} data-testid="Header">
      <Headerlogo className={"svg"} />
      <div>
        {t("app_name")}
        <span className="version">&nbsp;{props.version}</span>
      </div>
      <a
      href="#"
        onClick={(evt) => {
          evt.preventDefault();
          i18n.changeLanguage('en')
        }}
      >
        en
      </a>&nbsp;
      <a
      href="#"
        onClick={(evt) => {
          evt.preventDefault();
         i18n.changeLanguage('fr')
        }}
      >
        fr
      </a>&nbsp;
      <a
      href="#"

        onClick={(evt) => {
          evt.preventDefault();
         i18n.changeLanguage('br')
        }}
      >
        br
      </a>
    </div>
  );
};

export default Header;

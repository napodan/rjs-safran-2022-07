import React, { FC, useEffect } from "react";
import styles from "./Header.module.css";
import { ReactComponent as HeaderLogo } from "../../../logo.svg";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
export interface IHeaderProps {
  version: string;
}

const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.Header} data-testid="Header">
      <HeaderLogo className={"svg"} />
      <div>
        <>
          {t("app_name")}
          <span className="version">&nbsp;{props.version}</span>
          <a
            href="fr"
            onClick={(evt) => {
              evt.preventDefault();
              i18n.changeLanguage("fr");
            }}
          >
            fr
          </a>
          <a
            href="en"
            onClick={(evt) => {
              evt.preventDefault();
              i18n.changeLanguage("en");
            }}
          >
            en
          </a>
          <a
            href="br"
            onClick={(evt) => {
              evt.preventDefault();
              i18n.changeLanguage("br");
            }}
          >
            br
          </a>
        </>
      </div>
    </div>
  );
};

export default Header;

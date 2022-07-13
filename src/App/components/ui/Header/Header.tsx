import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import { ReactComponent as Headerlogo } from "../../../../logo.svg";
/**
 * interface du composant Header
 */
export interface IHeaderProps {
  version: any;
}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <div className={style.Header} data-testid="Header">
      <Headerlogo className={"svg"} />
      <div>
        My communicator<span className="version">&nbsp;{props.version}</span>
      </div>
    </div>
  );
};

export default Header;

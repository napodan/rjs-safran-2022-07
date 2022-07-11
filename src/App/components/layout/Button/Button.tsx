import React, { FC, ReactNode, useState, useEffect } from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export interface IButtonProps {
  onclick: Function;
  children: React.ReactNode;
  bgColor: string;
  color: string;
}
const BUTTON_INITIALSTATE = false;
const Button = (props: IButtonProps) => {
  const [isClicked, setIsClicked] = useState(BUTTON_INITIALSTATE);
  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 200);
    }
  }, [isClicked]);
  return (
    <button
      className={`${styles.Button}${isClicked ? " " + styles.clicked : ""}`}
      data-testid="Button"
      onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsClicked(true);
        props.onclick("arg");
      }}
      style={{
        textAlign: "center",
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      {props.children}
    </button>
  );
};
Button.defaultProps = {
  bgColor: "tomato",
  color: "white",
};
export default Button;

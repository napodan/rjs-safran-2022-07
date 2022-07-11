import React, { FC, ReactNode, useState, useEffect } from "react";
import styles from "./Button.module.css";

export interface IButtonProps {
  onclick: Function;
  children: ReactNode;
  bgcolor?: string;
  color?: string;
}
const BUTTON_INITIAL_STATE = false;
const Button: FC<IButtonProps> = (props) => {
  const [isClicked, setIsClicked] = useState(BUTTON_INITIAL_STATE);
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
        backgroundColor: props.bgcolor,
        color: props.color,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;

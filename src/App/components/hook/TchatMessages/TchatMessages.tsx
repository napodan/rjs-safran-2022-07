import React, { useEffect, useState } from "react";
import { IMessage } from "../../interfaces/IMessage";
import { IUser } from "../../interfaces/IUser";
import TchatMessage from "../TchatMessage/TchatMessage";
import style from "./TchatMessages.module.css";
/**
 * interface du composant TchatMessages
 */
export interface ITchatMessagesProps {
  users: Array<IUser>;
}

/**
 * etat initial des props du composant TchatMessages
 */
const tchatMessagesInitialState: Array<IMessage> = [
  {
    text: "Premier message",
    id: 0,
    dt: "XXXX",
    from: 1,
  },
  { text: "2eme message", id: 1, dt: "YYYY", from: 0 },
];
const TchatMessages: React.FC<ITchatMessagesProps> = (props) => {
  const [state, setState] = useState(tchatMessagesInitialState);

  return (
    <div className={style.TchatMessages} data-testid="TchatMessages">
      {state.map((message) => (
        <TchatMessage
          key={message.id.toString()}
          message={message}
          user={props.users.find((element) => element.id === message.from)}
        />
      ))}
    </div>
  );
};

export default TchatMessages;

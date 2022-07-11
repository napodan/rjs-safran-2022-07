import React, { useEffect, useState } from "react";
import style from "./ChatMessages.module.css";
/**
 * interface du composant ChatMessages
 */
export interface IChatMessagesProps {}
/**
 * etat initial des props du composant ChatMessages
 */
const chatMessagesInitialState = {};
const ChatMessages: React.FC<IChatMessagesProps> = (props) => {
  const [state, setstate] = useState(chatMessagesInitialState);
  useEffect(() => {
    console.log("update/mount");

    return () => {};
  }, [state]);
  return <div className={style.ChatMessages} data-testid="ChatMessages">chatMessages</div>;
};

export default ChatMessages;

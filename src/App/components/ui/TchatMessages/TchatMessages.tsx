import {  Stack } from "@mui/material";
import Box from '@mui/material/Box'
import { format } from "path";
import React, { useEffect, useState } from "react";
import IMessage from "../../../interfaces/IMessage";
import IUser from "../../../interfaces/IUsers";
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
  { id: 0, text: "Magna consectetur officia exercitation tempor non. Est anim aliqua proident nulla minim non voluptate magna cillum commodo veniam cupidatat proident. Dolore proident ipsum tempor nostrud veniam reprehenderit eiusmod anim ullamco duis. Commodo proident duis proident nisi. Enim nostrud culpa proident velit. Esse reprehenderit exercitation nisi nulla tempor et est nisi ea.Veniam anim exercitation reprehenderit magna non nulla. Velit amet reprehenderit fugiat pariatur labore labore dolore do irure ex. Velit cupidatat sint occaecat aliquip occaecat id ullamco sint consectetur velit. Voluptate nostrud proident qui nostrud sunt fugiat reprehenderit qui pariatur culpa do tempor.", from: 0, dt: new Date().toString() },
  { id: 1, text: "message2", from: 1, dt: new Date().toString() },
];
const TchatMessages: React.FC<ITchatMessagesProps> = (props) => {
  const [state, setstate] = useState(tchatMessagesInitialState);
  return (
    <Box className={style.TchatMessages} data-testid="TchatMessages">
      <Stack spacing={2}>
      {state.map((m) => {
        const currUser = props.users.find((u) => u.id === m.from);
        return (
          
          <TchatMessage
            key={"m" + m.id}
            message={m}
            user={
              currUser
                ? currUser
                : {
                    fullName: "",
                    id: 0,
                    img: null,
                    nick: "",
                    timeLastAction: new Date().toString(),
                  }
            }
          />
        );
      })}
      </Stack>
    </Box>
  );
};

export default TchatMessages;

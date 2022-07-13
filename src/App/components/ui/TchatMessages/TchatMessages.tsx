import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import IMessage from "../../../interfaces/IMessage";
import IUser from "../../../interfaces/IUsers";
import TchatMessage from "../TchatMessage/TchatMessage";
import style from "./TchatMessages.module.css";
/**
 * interface du composant TchatMessages
 */
export interface ITchatMessagesProps {
  messages: Array<IMessage>;
  users: Array<IUser>;
}

const TchatMessages: React.FC<ITchatMessagesProps> = (props) => {
  return (
    <Box className={style.TchatMessages} data-testid="TchatMessages">
      <Stack spacing={2}>
        {props.messages.map((m) => {
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

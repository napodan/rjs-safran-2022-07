import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AvatarUser from "../AvatarUser/AvatarUser";
import style from "./TchatWriter.module.css";
/**
 * interface du composant TchatWriter
 */
export interface ITchatWriterProps {}
/**
 * etat initial des props du composant TchatWriter
 */
const tchatWriterInitialState = {};
const TchatWriter: React.FC<ITchatWriterProps> = (props) => {
  const [state, setstate] = useState(tchatWriterInitialState);
  useEffect(() => {
    console.log("update/mount");

    return () => {};
  }, [state]);
  return (
    <div className={style.TchatWriter} data-testid="TchatWriter">
      <Box display="flex" alignItems="center">
        <AvatarUser
          user={{
            id: 1,
            nick: "Alex",
            fullName: "Alexandre",
            img: null,
            timeLastAction: new Date().toString(),
          }}
        />
        <TextField fullWidth />
        <Button>Envoyer</Button>
      </Box>
    </div>
  );
};

export default TchatWriter;

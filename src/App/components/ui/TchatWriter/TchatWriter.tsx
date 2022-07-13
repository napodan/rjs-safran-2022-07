import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";

import React, { useContext, useState } from "react";
import IMessage from "../../../interfaces/IMessage";
import IUser, { DUMMY_USER } from "../../../interfaces/IUsers";
import FlexW from "../../layout/FlexW/FlexW";
import AvatarUser from "../AvatarUser/AvatarUser";
import style from "./TchatWriter.module.css";
/**
 * interface du composant TchatWriter
 */
export interface ITchatWriterProps {
  users: Array<IUser>;
  onMesageSent: Function;
}
/**
 * etat initial des props du composant TchatWriter
 */
const tchatWriterInitialState: IMessage = {
  text: "",
  to: undefined,
  from: 0,
  dt: new Date(0).toString(),
};
const TchatWriter: React.FC<ITchatWriterProps> = (props) => {
  const [state, setstate] = useState(tchatWriterInitialState);

  return (
    <Box className={style.TchatWriter} data-testid="TchatWriter">
      <form>
        <FlexW>
          <div>
            <AvatarUser user={DUMMY_USER} />
            <FormControl sx={{ width: "calc(100% - 80px)" }}>
              <TextField
                id="standard-basic"
                variant="standard"
                className={style.messageField}
                sx={{ height: 45 }}
                value={state.text}
                onChange={(evt) => {
                  setstate({ ...state, text: evt.target.value });
                }}
              />
            </FormControl>
          </div>
          <FormControl>
            <Select
              id="demo-simple-select"
              className={style.userSelect}
              sx={{ height: 30 }}
            >
              <MenuItem key={"suall"} value={-1}>
                All
              </MenuItem>
              {props.users.map((u) => (
                <MenuItem key={"su" + u.id} value={u.id}>
                  {u.nick}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" type="submit" sx={{ height: 30 }}>
            send
          </Button>
        </FlexW>
      </form>
    </Box>
  );
};

export default TchatWriter;

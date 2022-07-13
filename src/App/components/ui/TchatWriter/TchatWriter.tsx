import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IMessage from "../../../interfaces/IMessage";
import IUser, { DUMMY_USER } from "../../../interfaces/IUsers";
import { selectUser } from "../../../store/selectedUserSlice";
import { TRootState } from "../../../store/store";
import FlexW from "../../layout/FlexW/FlexW";
import AvatarUser from "../AvatarUser/AvatarUser";
import style from "./TchatWriter.module.css";
import { TF } from "./TF";
import UserSelect from "./UserSelect";
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
  text: "014631264",
  from: 0,
  dt: new Date(0).toString(),
};
const TchatWriter: React.FC<ITchatWriterProps> = (props) => {
  const dispatch = useDispatch();
  const [state, setstate] = useState(tchatWriterInitialState);
  const [isValidFormDatas, setisValidFormDatas] = useState(false);
  const selectedUser = useSelector(
    (state: TRootState) => state.selectedUserReducer
  );
  return (
    <Box className={style.TchatWriter} data-testid="TchatWriter">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
        }}
      >
        <FlexW>
          <div>
            <AvatarUser user={DUMMY_USER} />
            <TF
              value={state.text}
              onChange={(val: string, valid: boolean) => {
                setstate({ ...state, text: val });
                setisValidFormDatas(valid);
              }}
            />
            {/* <FormControl sx={{ width: "calc(100% - 80px)" }}>
            
            </FormControl> */}
          </div>
          <UserSelect
            value={selectedUser ?? undefined}
            users={props.users}
            onChange={(value: number | undefined, isValid: boolean) => {
              console.log(value);
              dispatch(selectUser(value ?? null));
              // setstate({ ...state, to: value });
              setisValidFormDatas(isValid);
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ height: 30 }}
            disabled={isValidFormDatas ? false : true}
          >
            send
          </Button>
        </FlexW>
      </form>
    </Box>
  );
};

export default TchatWriter;

import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import IUser from "../../../interfaces/IUsers";
import style from "./TchatWriter.module.css";
interface IUserSelectProps {
  users: Array<IUser>;
  value: number | undefined;
  onChange: Function;
}

const UserSelect: React.FC<IUserSelectProps> = (props) => {
  return (
    <FormControl>
      <Select
        id="demo-simple-select"
        className={style.userSelect}
        sx={{ height: 30 }}
        value={props.value ?? "all"}
        onChange={(evt) => {
          let value = Number(evt.target.value);
          props.onChange(isNaN(value) ? null : value, true);
        }}
      >
        <MenuItem key={"suall"} value={"all"}>
          All
        </MenuItem>
        {props.users.map((u) => (
          <MenuItem key={"su" + u.id} value={u.id}>
            {u.nick}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserSelect;

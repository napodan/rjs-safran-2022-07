import React from "react";
import { useDispatch } from "react-redux";
import IUser from "../../../interfaces/IUsers";
import { selectUser } from "../../../store/selectedUserSlice";
import AvatarUser from "../AvatarUser/AvatarUser";
import style from "./TchatUser.module.css";
/**
 * interface du composant TchatUser
 */
export interface ITchatUserProps {
  user: IUser;
}
/**
 * etat initial des props du composant TchatUser
 */
const tchatUserInitialState = {};
const TchatUser: React.FC<ITchatUserProps> = (props: ITchatUserProps) => {
  const dispatch = useDispatch();
  return (
    <div
      className={style.TchatUser}
      data-testid="TchatUser"
      onClick={() => {
        dispatch(selectUser(props.user.id));
      }}
    >
      <AvatarUser user={props.user} />
      <span className={style.nick}>{props.user.nick}</span>
    </div>
  );
};

export default TchatUser;

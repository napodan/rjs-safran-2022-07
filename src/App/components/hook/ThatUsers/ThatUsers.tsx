import React, { useEffect, useState } from "react";
import style from "./ThatUsers.module.css";
/**
 * interface du composant ThatUsers
 */
export interface IThatUsersProps {}

/**
 * etat initial des props du composant ThatUsers
 */
const thatUsersInitialState = {};
const ThatUsers: React.FC<IThatUsersProps> = (props) => {
  const [state, setState] = useState(thatUsersInitialState);
  useEffect(() => {
    console.log("update/mount");
    return () => {};
  }, [state]);
  return (
    <div className={style.ThatUsers} data-testid="ThatUsers">
      ThatUsers
    </div>
  );
};

export default ThatUsers;

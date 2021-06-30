import React from "react";
import style from "./UserItem.module.scss";

export default function UserItem(props) {
  const { user } = props;
  return (
    <div onClick={props.onClick} className={style["user-item"]}>
      {`${user.name} (${user.age} years old)`}
    </div>
  );
}

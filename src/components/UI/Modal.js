import React, { useState } from "react";
import style from "./Modal.module.scss";
import Backdrop from "./Backdrop";

export default function Modal(props) {
  
  
  const closeHandle = () => props.setIsOpen(false);
  return (
    <div className={style.modal}>
        <button  type="submit" className={style.btn_add}>Add user</button>
      {props.isOpen && (
        <>
          <Backdrop></Backdrop>
          <div className={style.container}>
            <div className={style.head}>Invalid input</div>
            <div className={style.body}>
              {props.body}
              <button onClick={closeHandle}>Okay</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

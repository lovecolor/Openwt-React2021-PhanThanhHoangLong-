import logo from "./logo.svg";
import style from "./App.module.scss";
import NewUser from "./components/User/NewUser";
import User from "./components/User/User"
import { useState } from "react";

function App() {
  const [listUser,setListUser]=useState([])
  const addUserHandle=(user)=>{
    setListUser(prevState=>[user,...prevState])
  }
  const removeUserHandler=(id)=>{
    
    setListUser((prevState)=>prevState.filter((e,i)=>i!=id))
  }
  return (
    <div className={style.App}>
      <div className={style.content}>
        <NewUser onSubmit={addUserHandle} ></NewUser>
        <User onRemove={removeUserHandler} listUser={listUser}></User>
      </div>
      {/* <Modal isOpen={true} body="asddsa"></Modal> */}
    </div>
  );
}

export default App;

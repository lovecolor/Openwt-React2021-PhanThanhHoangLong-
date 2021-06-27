import React, { useState } from "react";
import Modal from "../UI/Modal";
import style from "./Form.module.scss";

export default function Form(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [enterName,setEnterName]=useState("")
    const [enterAge,setEnterAge]=useState("")
    const [bodyModal,setBodyModal]=useState("")
    const changeNameHandle=(e)=>{
        setEnterName(e.target.value)
    }
    const changeAgeHandle=(e)=>setEnterAge(e.target.value)

    const submitHandle=(e)=>{
        e.preventDefault()
        if(enterName.trim().length===0||enterAge.trim().length===0)
        {
            
            setIsOpen(true)
            setBodyModal("Please enter a valid name and age (non-empty values).")
             return;
        }
        if(+enterAge<=0){
            setIsOpen(true)
            setBodyModal("Please enter a valid age (>0).")
            return;
        }
        props.onSubmit({
            name:enterName,
            age:enterAge
        })
        setEnterAge("")
        setEnterName("")
        
    }
  return (
      <>
    <form onSubmit={submitHandle} className={style.form}>
      
        <label>Username</label>
        <input value={enterName} type="text" onChange={changeNameHandle}></input>
        <label>Age (Years)</label>
        <input value={enterAge} onChange={changeAgeHandle} type="number" ></input>
        <Modal  isOpen={isOpen} setIsOpen={setIsOpen} body={bodyModal}></Modal>
     
    </form>
    
    </>
  );
}

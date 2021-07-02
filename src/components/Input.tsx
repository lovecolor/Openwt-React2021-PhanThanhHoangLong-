import React, { useEffect } from 'react'
import styled from 'styled-components'
import useInput from '../hooks/use-input'

const Container=styled.div`
width:45%;
padding-right:1rem;
display:flex;
flex-direction: column;
label{
    font-weight:bold;
    margin-bottom:.5rem;
    color:black;
    
}
.invalid{
    background-color:#fdd8d8;
    border:1px solid red;
}
.isValid{
    background-color:#DCCDFD;
}
input{
    border-radius:2px;
    height:1.7rem;
    border:1px solid black;
    &:focus{
        outline:none;
    }
    
    
}
&>p{
    color:Red;
}
`
export default function Input(props:any) {
    
    const {configIp}=props
    const {value,isValid,hasError,valueChangeHandler,ipBlurHandler,reset}=useInput(configIp.validate)
    props.setValid(isValid)
    
    useEffect(()=>{
        if(props.isReset){
            console.log("asd")
            reset()
        }
    },[props.isReset])
    return (
        <Container >
            <label htmlFor={configIp.label}>{configIp.label}</label>
            <input className={`${hasError&&"invalid"} ${isValid&&"isValid"}`}  {...configIp.input} id={configIp.label} value={value} onChange={valueChangeHandler} onBlur={ipBlurHandler}></input>
            {
                hasError&&<p>{configIp.error}</p>
            }
        </Container>
    )
}

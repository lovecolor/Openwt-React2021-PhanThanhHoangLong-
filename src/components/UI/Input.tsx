import React from 'react'
import classes from './Input.module.scss'

interface Prop{
input:any,
label:String

}
const  Input=React.forwardRef((props:Prop,ref)=> {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} ref={ref}></input>
        </div>
    )
})
export default Input;

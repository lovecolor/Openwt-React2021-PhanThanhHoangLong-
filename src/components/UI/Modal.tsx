import React from 'react'
import classes from './Modal.module.scss'
import  ReactDOM  from 'react-dom'


const Backdrop=(props:any)=>{
    return (
        <div onClick={props.onHideCart} className={classes.backdrop}></div>
    )
}
interface PropModal{
    children:never[]
}
const ModalOverlay=(props:PropModal)=>{
return (
    <div data-aos="fade-up" className={classes.modal}>
        {props.children}
    </div>
)
}
interface Prop{
    children:never[]
}
const portalElement = document.getElementById('overlays')
 const Modal=(props:any)=> {
    return (
        <>
        
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement!!)}
        {ReactDOM.createPortal(<ModalOverlay  >{props.children}</ModalOverlay>, portalElement!!)}
        </>
    )
}
export default Modal
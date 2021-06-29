import React, { useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.scss'
import CartIcon from '../Cart/CartIcon'
import { RootStateOrAny, useSelector } from 'react-redux'

export default function HeaderCartButton(props:any) {
    const [isBump,setIsBump]=useState<boolean>(false)
    const cartItems=useSelector((state:RootStateOrAny)=>{
        return state.cart.items
    })
    useEffect(()=>{
        setIsBump(true)
const timeOut=setTimeout(
    ()=>{
setIsBump(false)
    }
    ,300
)
return ()=>{
    clearTimeout(timeOut)
}
    },[cartItems])
    const totalQty=cartItems.reduce((acc:number,e:any)=>acc+e.qty,0)
    return (
        <div onClick={props.onClick} className={`${classes["cart-btn"]} ${isBump?classes.bump:""}`}>
            <CartIcon></CartIcon>
            <span className={classes.title}>Your cart</span>
            <span className={classes.qty}>{totalQty}</span>
        </div>
    )
}

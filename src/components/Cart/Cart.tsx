import React from 'react'
import classes from './Cart.module.scss'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { editQty } from '../../reducers/cartSlice'


export default function Cart(props:any) {
    const dispatch=useDispatch()
    const cart=useSelector((state:RootStateOrAny)=>{
        return state.cart 
    })
    const cartItems=cart.items
    const listItems=cartItems.map((e:any,i:number)=>(<CartItem key={e.id} meal={e}></CartItem>))
    
    return (
        <Modal onHideCart={props.onHideCart}>
            {listItems}
            <div className={classes.total}>
                <span >Total Amount</span>
                <span >${cart.total.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHideCart} className={classes["btn-close"]}>Close</button>
                <button className={classes["btn-order"]}>Order</button>
            </div>
        </Modal>
    )
}

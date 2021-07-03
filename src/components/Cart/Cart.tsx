import React, { useState } from 'react'
import classes from './Cart.module.scss'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { clear, editQty } from '../../reducers/cartSlice'
import Checkout from './Checkout'
import orderApi from '../../api/orderApi'

export default function Cart(props: any) {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isDidSubmit, setIsDidSubmit] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector((state: RootStateOrAny) => {
        return state.cart
    })
    const cartItems = cart.items
    const listItems = cartItems.map((e: any, i: number) => (<CartItem key={e.id} meal={e}></CartItem>))
    const hasItem = cartItems.length > 0
    const confirmHandler = () => {
        setIsConfirm(true)
    }
    const modalActions = <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["btn-close"]}>Close</button>
        {hasItem && <button onClick={confirmHandler} className={classes["btn-order"]}>Order</button>}
    </div>


    const submitOrderHandler = async (data: any) => {
        setIsSubmitting(true)
        await orderApi.post(data)
        setIsSubmitting(false)
        setIsDidSubmit(true)
        dispatch(clear(""))
    }

    const cartModalContent = <>{listItems}
        <div className={classes.total}>
            <span >Total Amount</span>
            <span >${cart.total.toFixed(2)}</span>
        </div>
        {isConfirm && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart}></Checkout>}
        {!isConfirm && modalActions}</>

    const submittingContent = <p>Sending order data...</p>

    const didSubmitContent = <>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
            <button onClick={props.onHideCart} className={classes["btn-order"]}>Close</button>

        </div>
    </>

    return (
        <Modal onHideCart={props.onHideCart}>
            {!isSubmitting && !isDidSubmit && cartModalContent}
            {isSubmitting && submittingContent}
            {!isSubmitting && isDidSubmit && didSubmitContent}
        </Modal>
    )
}

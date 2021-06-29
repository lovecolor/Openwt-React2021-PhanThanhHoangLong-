import React from 'react'
import { useDispatch } from 'react-redux'
import { editQty } from '../../reducers/cartSlice'
import classes from './CartItem.module.scss'

export default function CartItem(props:any) {
    const dispatch=useDispatch()
    const {meal}=props
    const addQtyHandler=(id:String)=>{
        dispatch(editQty({
            id:id,
            diff:1
        }))
    }
    const subQtyHandler=(id:String)=>{
        dispatch(editQty({
            id:id,
            diff:-1
        }))
    }
    return (
        <div className={classes["cart-item"]}>
            <div className={classes["container-left"]}>
                <div className={classes.name}>{meal.name}</div>
                <div className={classes.amount}>

                    <div className={classes.price}>${meal.price.toFixed(2)}</div>
                    <div className={classes.qty}>x{meal.qty}</div>
                </div>

            </div>
            <div className={classes.actions}>
                <button onClick={subQtyHandler.bind(null,meal.id)}>-</button>
                <button onClick={addQtyHandler.bind(null,meal.id)}>+</button>
            </div>
        </div>
    )
}

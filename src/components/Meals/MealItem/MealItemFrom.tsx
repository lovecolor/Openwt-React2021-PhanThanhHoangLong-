import React, { useRef, useState } from 'react'
import classes from './MealItemFrom.module.scss'
import Input from '../../UI/Input';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../reducers/cartSlice';

interface Prop {
    meal: any
    children: never[]
}
export default function MealItemFrom(props: Prop) {
    const { meal } = props
    const dispatch = useDispatch()
    const qtyIpRef = useRef(null)
    

    const addItemToCartHandler = (e: any) => {
        e.preventDefault()


        const quantity:any = qtyIpRef.current
        const value = quantity.value as never
        
        dispatch(addItem({
            ...meal,
            qty: +value


        }))

    }

    return (
        <form onSubmit={addItemToCartHandler} className={classes.form}>
            <Input ref={qtyIpRef} label="Quantity" input={{
                type: "number",
                id: meal.id,
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}></Input>
            <button type="submit">+ Add</button>
            
            
        </form>
    )
}

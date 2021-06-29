import React from 'react'
import classes from './MealItem.module.scss'
import MealItemFrom from './MealItemFrom'



export default function MealItem(props: any) {
    const {meal}=props
    return (
        <div className={classes["meal-item"]}>
            <div className={classes.content}>
                <div className={classes.name}>{meal.name}</div>
                <div className={classes.description}>{meal.description}</div>
                <div className={classes.price}>${meal.price.toFixed(2)}</div>
            </div>
            <MealItemFrom meal={meal}>

            </MealItemFrom>

        </div>
    )
}

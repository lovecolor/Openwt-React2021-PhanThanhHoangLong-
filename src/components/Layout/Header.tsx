import React from 'react'
import classes from './Header.module.scss'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props:any) {
    return (
        <>
        <div className={classes.header}> 
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </div>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="A table full of food!"></img>
        </div>
        </>
    )
}

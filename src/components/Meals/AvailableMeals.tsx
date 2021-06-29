import React from 'react'
import classes from './AvailableMeals.module.scss'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'

const DUMMY_MEALS=[
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
      },,
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
      },
]





export default function AvailableMeals() {
    const mealsList=DUMMY_MEALS.map((meal,i)=>(
        <MealItem meal={meal} key={i} ></MealItem>
    ))
    return (
        <div  className={classes["meal-list"]}>
            <Card>
            {
                mealsList
            }
            </Card>
            
        </div>
    )
}







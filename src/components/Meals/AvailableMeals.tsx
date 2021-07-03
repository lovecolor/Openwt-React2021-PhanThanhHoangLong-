import React, { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.scss'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../reducers/mealSlice'

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
  const [isLoading,setIsLoading]=useState(false)
  
  const dispatch=useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      await dispatch(getAll())
      setIsLoading(false)

    }
    
    fetchData()
    

  }, [])
  const listMeal=useSelector((state:RootStateOrAny)=>state.meals)
    const mealsList=listMeal.map((meal:any,i:number)=>(
      
        <MealItem meal={meal} key={i} ></MealItem>
    ))
    if(isLoading) return <p className={classes.loading} >Loading...</p>
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







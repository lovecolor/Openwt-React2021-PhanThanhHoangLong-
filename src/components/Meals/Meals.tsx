import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

export default function Meals() {
    return (
        <div>
            <MealsSummary></MealsSummary>
            <AvailableMeals ></AvailableMeals>
        </div>
    )
}

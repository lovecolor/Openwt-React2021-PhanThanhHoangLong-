import React from 'react'
import './style.scss'

export default function ExpenseItem(props) {
    const nameOfMonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Jun",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    const {item}=props
    return (
        <div className="expense-item">
            <div className="item__date">
                <span className="name-of-month">{nameOfMonth[item.date.getMonth()-1]}</span>
                <span className="fullyear"> {item.date.getFullYear()}</span>
                <span className="day">{item.date.getDate()}</span>
            </div>
            <span className="item__title">{item.title}</span>
            <span className="item__amount">$ {item.amount}</span>
        </div>
    )
}

import React from "react";
import { useSelector } from "react-redux";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./style.scss";

export default function ListExpense(props) {
  const { currentSelectedYear } = props;

  const listExpense = useSelector((state) => state.listExpense);

  return (
    <div className="list-expense">
      {listExpense
        .filter((e) => e.date.getFullYear() == currentSelectedYear)
        .map((e, i) => (
          <ExpenseItem key={i} item={e}></ExpenseItem>
        ))}
      
      
    </div>
  );
}

import logo from "./logo.svg";
import "./App.scss";
import AddForm from "./components/Form/AddForm";
import ListExpense from "./components/ListExpense/ListExpense";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "./components/Chart/Chart";
import SelectYear from "./components/SelectYear/SelectYear";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";

function App() {
  const listExpense = useSelector((state) => state.listExpense);
  const [currentSelectedYear,setCurrentSelectedYear]=useState(listExpense.length>0?listExpense[0].date.getFullYear():null)
  const onChangeSelectYear=(e)=>{
    setCurrentSelectedYear(e.target.value)
  }

  
  return (
    <div className="App">
      <AddForm setCurrentSelectedYear={setCurrentSelectedYear}></AddForm>
      <div className="content">
        <div className="head-bar">
          <span className="title">Filter by year</span>
          
          
          <SelectYear currentSelectedYear={currentSelectedYear} setCurrentSelectedYear={setCurrentSelectedYear}></SelectYear>
        </div>
        <Chart currentSelectedYear={currentSelectedYear}></Chart>
        <ListExpense currentSelectedYear={currentSelectedYear}></ListExpense>
      </div>
    </div>
  );
}

export default App;

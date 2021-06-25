import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem } from "../../reducers/expenseSlice";
import "./style.scss";

export default function Form(props) {

  const dispatch=useDispatch()

  const {setCurrentSelectedYear}=props

  const listExpense=useSelector(state=>state.listExpense)
  const [isOpen, setIsOpen] = useState(false);
  const [ipTitle, setIpTitle] = useState("");
  const [ipAmount, setIpAmount] = useState("");
  const [ipDate, setIpDate] = useState("");

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);
  const onSubmit = () => {
    if(ipTitle===""||ipAmount===""||ipDate===""||parseInt(ipAmount)<=0) return;
    const dateArr = ipDate.split("-");
    const date = new Date(dateArr[0], dateArr[1], dateArr[2]);

    listExpense.length==0&&setCurrentSelectedYear(date.getFullYear())
    dispatch(addNewItem({
      title:ipTitle,
      amount:parseFloat(ipAmount),
      date:date
    }))
    
    
   
    setIpTitle("");
    setIpAmount("");
    setIpDate("");
    
  };
  
  return (
    <div className="add-form container">
      {isOpen ? (
        <div className="form-open">
          <form className="form">
            <div className="form-group">
              <span class="lable">Title</span>
              <input
                onChange={(e) => {
                  setIpTitle(e.target.value);
                }}
                value={ipTitle}
                type="text"
              ></input>
            </div>
            <div className="form-group">
              <span class="lable">Amount</span>
              <input
              min="1"
                onChange={(e) => {
                  setIpAmount(e.target.value);
                }}
                value={ipAmount}
                type="number"
              ></input>
            </div>
            <div className="form-group">
              <span class="lable">Date</span>
              <input
                onChange={(e) => {
                  setIpDate(e.target.value);
                }}
                value={ipDate}
                type="date"
              ></input>
            </div>
          </form>
          <div className="action-bar">
            <button className="btn-cancel" onClick={closeForm}>
              Cancel
            </button>
            <button onClick={onSubmit} className="btn-add">
              Add Expense
            </button>
          </div>
        </div>
      ) : (
        <div className="form-close">
          <button className="btn-add" onClick={openForm}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
}

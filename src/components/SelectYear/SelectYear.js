import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";

export default function SelectYear(props) {
  const listExpense = useSelector((state) => state.listExpense);

  const { currentSelectedYear, setCurrentSelectedYear } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openSelect = () => setIsOpen(true);
  
  const onClickItem = (e) => {
    setCurrentSelectedYear(e);
    setIsOpen(false);
  };
  return (
    <div className="select-year">
      <div className="current-year" onClick={openSelect}>
        <span className="current-year__text">
          {currentSelectedYear}
        </span>
        <i class="fas fa-angle-down"></i>
      </div>
      {isOpen && (
        <div className="listOption">
          {[...new Set(listExpense.map((e) => e.date.getFullYear()))].map(
            (e, i) => (
              <div
                key={i}
                className="option-item"
                onClick={() => onClickItem(e)}
              >
                {currentSelectedYear == e && <i class="fas fa-check"></i>}
                {e}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

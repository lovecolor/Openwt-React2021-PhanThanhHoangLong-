import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";

export default function Chart(props) {
  const { currentSelectedYear } = props;

  const nameOfMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let listAmountByMonth = Array.from({ length: 12 }, (e) => 0);
  // console.log(listAmountByMonth)
  const listExpense = useSelector((state) => state.listExpense);

  return (
    <div className="chart">
      {nameOfMonth.map((e, idx) => {
        const total = listExpense
          .filter(
            (e) =>
              e.date.getMonth() - 1 == idx &&
              e.date.getFullYear() == currentSelectedYear
          )
          .reduce((acc, e) => acc + e.amount, 0);
        const max = listExpense
          .filter((e) => e.date.getFullYear() == currentSelectedYear)
          .reduce(
            (acc, e, i) => {
              acc[e.date.getMonth() - 1] += e.amount;

              return acc;
            },
            Array.from({ length: 12 }, (e) => 0)
          )
          .reduce((acc, e) => (acc < e ? e : acc), 0);
        // console.log(max, total);

        return (
          <div key={idx} className="chart__item">
            <div className="chart__item--col">
              <div
                className="col__value"
                style={{
                  height: `${
                    (total /
                      listExpense
                        .filter(
                          (e) => e.date.getFullYear() == currentSelectedYear
                        )
                        .reduce(
                          (acc, e, i) => {
                            acc[e.date.getMonth() - 1] += e.amount;

                            return acc;
                          },
                          Array.from({ length: 12 }, (e) => 0)
                        )
                        .reduce((acc, e) => (acc < e ? e : acc), 0)) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <span>{e}</span>
          </div>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    console.log(props.expenses)
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses </h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.length === 0 ? (
          <p> No expenses found.</p>
        ) : (
            props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
    </ul>
  );
};
export default ExpenseList;

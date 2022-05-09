import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const ExpensesFilterHandler = (ExpenseFilterYear) => {
    console.log(ExpenseFilterYear);
    setFilterYear(ExpenseFilterYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onExpensesFilterChange={ExpensesFilterHandler}
        />

        {/* {filteredExpenses.length === 0 ? (
          <p> No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expense;

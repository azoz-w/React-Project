import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    // console.log(expenseData)
    props.onAddExpense(expenseData);
    setIsAddingExpense(false)
  };
  const startAddingExpense = () => {
    setIsAddingExpense(true);
  };
  const stopAddingExpense = () => {
      setIsAddingExpense(false)
  };
  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button onClick={startAddingExpense}>Add Expense</button>
      )}

      {isAddingExpense && (
        <ExpenseForm
          onCancel={stopAddingExpense}
          onSaveExpenseData={SaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

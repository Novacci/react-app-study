import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense() {
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;

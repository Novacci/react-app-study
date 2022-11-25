import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [content, setContent] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setContent(false);
  };

  const contentHandler = () => {
    setContent(true);
  };

  const stopContentHandler = () => {
    setContent(false);
  };

  return (
    <div className="new-expense">
      {!content && <button onClick={contentHandler}>Add New Expense</button>}
      {content && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopContentHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;

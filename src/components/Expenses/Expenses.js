import './Expenses.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';

function Expenses(props) {
  const [year, setYear] = useState('2020');

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  const expenses = props.items;

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === +year;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    console.log(filteredExpenses);
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          yearValue={year}
          yearChangeHandler={yearChangeHandler}
        />
        {expensesContent}
      </Card>
    </>
  );
}

export default Expenses;

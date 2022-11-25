import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
  const [year, setYear] = useState('2020');

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  const expenses = props.items;

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === +year;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          yearValue={year}
          yearChangeHandler={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;

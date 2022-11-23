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

  return (
    <>
      <Card className="expenses">
        {/* {expenses.filter((x) => x.year === setYear)} */}

        <ExpensesFilter
          yearValue={year}
          yearChangeHandler={yearChangeHandler}
        />
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
}

export default Expenses;

import React, { useState } from 'react';
import Expenses from '../Expenses/Expenses';
import './ExpensesFilter.css';

const ExpensesFilter = ({ yearChangeHandler }) => {
  // const [year, setYear] = useState('');

  // const yearChangeHandler = (event) => {
  //   setYear(event.target.value);

  // };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        {/* <span>{year}</span> */}
      </div>
    </div>
  );
};
export default ExpensesFilter;

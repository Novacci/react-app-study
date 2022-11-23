import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // useState nie może być zagnieżdżone w innej funckji najlepiej uzyć na początku - useState ZAWSZE zwraca tablice, z wartościa piorwotną(1 el) i z wartościa nową(2el tablicy)

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;

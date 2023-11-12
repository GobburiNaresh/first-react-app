import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props) {
const [title, setTitle] =  useState(props.title);


  const clickHandler = () => {
    setTitle('updated!!');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails price={props.price} location={props.location} title={title}/>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
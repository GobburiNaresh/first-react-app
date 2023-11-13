import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props) {
const [title, setTitle] =  useState(props.title);
const [price, setPrice] = useState(props.price)


  const clickHandler = () => {
    setTitle('updated!!');
    console.log(title);
  }

  const expenseHandler = () => {
    setPrice('$100');
    console.log(price);
  }  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails price={price} location={props.location} title={title}/>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={expenseHandler}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;
import React,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
        
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
    }
    const PriceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }
    
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');

    }
    return(
        <div>
           <form onSubmit={submitHandler}>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                <label>Title</label>
                <input type = 'text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                <label>Amount</label>
                <input type = 'number' min ='0.01' step ='0.01' value= {enteredPrice} onChange={PriceChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                <label>Date</label>
                <input type = 'date' min="2020-01-01" max="2023-12-31" value={enteredDate} onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

           </form>
        </div>
    )
}

export default ExpenseForm;
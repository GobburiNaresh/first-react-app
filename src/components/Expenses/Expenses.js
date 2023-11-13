import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return(
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter = {filteredChangeHandler}/>
            {props.items.map((expense) => <ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date}/>)}            
        </Card>
    )
}
export default Expenses;





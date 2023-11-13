import React,{useState} from 'react';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter = {filteredChangeHandler}/>
            <ExpenseList items={filteredExpenses}/>    
            </Card>
        </div>
        
    )
    
}
export default Expenses;





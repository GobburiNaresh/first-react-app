import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props){
    return(
        <Card className='expenses'>
            <ExpenseItem title={props.items[0].title} price={props.items[0].price} date={props.items[0].date} location={props.items[0].location}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} price={props.items[1].price} date={props.items[1].date} location={props.items[1].location}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} price={props.items[2].price} date={props.items[2].date} location={props.items[2].location}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} price={props.items[3].price} date={props.items[3].date} location={props.items[3].location}></ExpenseItem>
        </Card>
    )
}
export default Expenses;





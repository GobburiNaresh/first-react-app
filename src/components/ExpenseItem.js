import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails price={props.price}  location={props.location}   title={props.title} />
    </div>
  );
}

export default ExpenseItem;
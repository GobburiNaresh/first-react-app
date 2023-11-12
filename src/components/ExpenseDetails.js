import './ExpenseDetails.css';

function ExpenseDetails(props){
    const title = props.title;
    const price = props.price;
    const location = props.location;
    return (
        <div>
        <div className='expense-item__description'>{title}</div>
        <div className='expense-item__location'>{location}</div>
        <div className='expense-item__price'>{price}</div>
        </div>
    )
}

export default ExpenseDetails;
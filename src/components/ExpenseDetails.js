import './ExpenseItem.css'

function ExpenseDetails (props){
    const title = props.title;
    const location = props.location;
    const  price = props.price;
    return (
        <div>
            <div className='expense-Item__title'>{title}</div>
            <div className='expense-item__description'>{location}</div>
            <div className='expense-item__price'>{price}</div>
        </div>
        
    )
}

export default ExpenseDetails;
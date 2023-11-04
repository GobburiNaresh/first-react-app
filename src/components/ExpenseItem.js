import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2021,2,28);
  const expenseTitle = 'Car Insurance';
  const expensePrice = 299.99;
  const LocationOfExpenditure = 'Hyderabad'
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className="expense-item__price">${expensePrice}</div>

      </div>
    </div>
  );
}

export default ExpenseItem;
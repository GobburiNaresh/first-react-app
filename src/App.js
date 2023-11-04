import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'House loan',
      price: 599.99,
      date: new Date(2021,2,14),
      location:'hyderabad'
    },
    {
      id: 'e2',
      title: 'car insurance',
      price: 299.99,
      date: new Date(2022,2,21),
      location:'bangalore'
    },
    {
      id: 'e3',
      title: 'life insurance',
      price: 199.99,
      date: new Date(2021,6,7),
      location:'hyderabad',
    },
    {
      id: 'e4',
      title: 'TV',
      price: 99.99,
      date: new Date(2022,2,7),
      location:'bangalore'
    }

  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date} location={expenses[0].location}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date} location={expenses[1].location}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date} location={expenses[2].location}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} price={expenses[3].price} date={expenses[3].date} location={expenses[3].location}></ExpenseItem>
    </div>
  );
}

export default App;
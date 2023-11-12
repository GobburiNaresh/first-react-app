
import Expenses from './components/Expenses';
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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
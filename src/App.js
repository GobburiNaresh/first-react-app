import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/ExpenseForm/NewExpense';
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'House loan',
      price: 599.99,
      date: new Date(2021,2,14),
      
    },
    {
      id: 'e2',
      title: 'car insurance',
      price: 299.99,
      date: new Date(2022,2,21),
      
    },
    {
      id: 'e3',
      title: 'life insurance',
      price: 199.99,
      date: new Date(2021,6,7),
      
    },
    {
      id: 'e4',
      title: 'TV',
      price: 99.99,
      date: new Date(2022,2,7),
      
    }

  ];
  const App = () => {
      const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
      const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        });
      };
    
    


    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
    );
  }


export default App;
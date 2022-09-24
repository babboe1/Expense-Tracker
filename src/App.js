import React from 'react';
import ExpenseItems from './Components/ExpenseItems/ExpenseItems';
import ExpenseForm from './Components/NewExpense/ExpenseForm/ExpenseForm';

const App = () => {
   return (
      <div>
         <h1>Function React</h1>
         <ExpenseForm />
         <ExpenseItems />
      </div>
   );
};

export default App;
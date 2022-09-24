import React, { useState } from 'react';
import Card from './Components/Card/Card';
import Context from './Components/Context/Context';
import ExpenseItems from './Components/ExpenseItems/ExpenseItems';
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {
   const [expense, setExpenseData] = useState("");
   // console.log(expense);
   
   const getDataHandler = (newData) => {
      setExpenseData(prev => {
         console.log(expense, prev, newData);
         return [...prev, newData];
      });
      
   };

   return (
      <div>
         <Context.Provider
            value={{
               newExpenseData: expense,
            }}
         >
            <h1>Function React</h1>
            <Card>
               <NewExpense data={(data) => getDataHandler(data)} />
               <ExpenseItems />
            </Card>
         </Context.Provider>
      </div>
   );
};

export default App;

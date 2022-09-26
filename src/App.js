import React, {useState} from 'react';
import Card from './Components/Card/Card';
import Context from './Components/Context/Context';
import ExpenseItems from './Components/ExpenseItems/ExpenseItems';
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {
   const [expense, setExpenseData] = useState([]);

   const getDataHandler = (newData) => {
      setExpenseData([newData])
   };

   return (
      <div>
         <Context.Provider
            value={{
               expense,
               getDataHandler,
            }}
         >
            <h1>Function React</h1>
            <Card>
               <NewExpense />
               <ExpenseItems />
            </Card>
         </Context.Provider>
      </div>
   );
};

export default App;

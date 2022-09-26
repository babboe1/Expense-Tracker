import React, { useState } from 'react';
import Card from './Components/Card/Card';
import Context from './Components/Context/Context';
import ExpensesFilter from './Components/ExpenseFilter/ExpenseFilter';
import ExpenseItems from './Components/ExpenseItems/ExpenseItems';
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {
   const expenses = [
      {
         id: 'e1',
         title: 'Toilet Paper',
         amount: 94.12,
         date: new Date(2020, 7, 14),
      },
      {
         id: 'e2',
         title: 'New TV',
         amount: 799.49,
         date: new Date(2021, 2, 12),
      },
      {
         id: 'e3',
         title: 'Car Insurance',
         amount: 294.67,
         date: new Date(2021, 2, 28),
      },
      {
         id: 'e4',
         title: 'New Desk (Wooden)',
         amount: 450,
         date: new Date(2021, 5, 12),
      },
   ];
   // console.log(expenses[0].date.getFullYear());
   
   const [expense, setExpenseData] = useState(expenses);

   const getDataHandler = (newData) => {
      setExpenseData((prevState) => {
         return [newData, ...prevState];
      });
   };

   const [filteredYear, setFilteredYear] = useState(expense);
   const filterYearHandler = (year) => {
      if (year === 'All year') {
         console.log('all year');
         
         setFilteredYear(expense);
         return;
      }
      setFilteredYear(() => {
         console.log(expense);
         return expense.filter((item) => item.date.getFullYear() === +year);
      });
   }
   return (
      <div>
         <Context.Provider
            value={{
               expense,
               filteredYear,
               getDataHandler,
               filterYearHandler
            }}
         >
            <h1>Function React</h1>
            <Card>
               <NewExpense />
            </Card>
            <Card>
               <ExpensesFilter />
            </Card>
            <Card>
               <ExpenseItems />
            </Card>
         </Context.Provider>
      </div>
   );
};

export default App;

import React, { useState, useContext, useEffect } from 'react';
import Context from '../Context/Context';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseItems = () => {
   const contextData = useContext(Context);
   const data = contextData.expense;

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

   const [expenseState, setExpenseState] = useState(expenses);

   useEffect(() => {
      setExpenseState((prevState) => {
         return [...prevState, ...data];
      });
   }, [data]);

   return expenseState.map((item, idx) => (
      <ExpenseItem
         key={idx}
         title={item.title}
         amount={item.amount}
         date={item.date}
      />
   ));
};

export default ExpenseItems;

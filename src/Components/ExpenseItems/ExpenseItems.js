import React, { useState, useContext, useEffect } from 'react';
import Context from '../Context/Context';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseItems = () => {
   const contextData = useContext(Context);
   const data = contextData.newExpenseData;
   // console.log(data);
   // console.log(dataTest);
   let test = 1
   setInterval(() => {
      test = test + 1;
      // console.log(test);
      
   }, 5000);

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
   // console.log(expenseState);

   // useEffect(() => {
   //    setInterval(() => {
   //       // console.log(data, data.length);
   //    }, 5000);
   //    setExpenseState((prevState) => {
   //       // console.log(data);
   //       return [...prevState, ...data];
   //    });
   // }, [data]);

   // contextData.update = () => {
   //    setExpenseState((prevState) => {
   //       console.log([...prevState, ...data]);
   //       return [...prevState, ...data];
   //    });
   // }
   
   useEffect(() => { 
      console.log(test);
   }, [test]);

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

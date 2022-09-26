import React, { useState, useContext, useEffect } from 'react';
import Context from '../Context/Context';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseItems = () => {
   const contextData = useContext(Context);
   const data = contextData.expense;
   const filter = contextData.filteredYear;

   const [expenseState, setExpenseState] = useState([]);

   useEffect(() => {
      setExpenseState(data);
   }, [data]);

   useEffect(() => {
      setExpenseState(filter);
   }, [filter]);

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

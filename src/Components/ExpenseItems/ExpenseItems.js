import React, { useContext } from 'react';
import Context from '../Context/Context';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseItems = () => {
   const expenseData = useContext(Context).expenseData;

   return expenseData.length > 0 ? (
      expenseData.map((item, idx) => (
         <ExpenseItem
            key={idx}
            title={item.title}
            amount={item.amount}
            date={item.date}
         />
      ))
   ) : (
      <h2 style={{ textAlign: 'center', color: 'white' }}>No Expense Found</h2>
   );
};

export default ExpenseItems;

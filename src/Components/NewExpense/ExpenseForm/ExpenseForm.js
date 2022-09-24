import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
   const [initial, setInitial] = useState("");

   const changeHandler = (e, type) => {
      setInitial((prevState) => {
         return {
            ...prevState,
            [type]: e.target.value
         }
      })
   };

   const submitHandler = (e) => {
      e.preventDefault();
      const expenseData = { ...initial }
      console.log(expenseData);
      e.target.reset();
   }

   return (
      <form onSubmit={submitHandler} className="new-expense__controls" action="">
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label htmlFor="">Title</label>
               <input type="text" onChange={(e) => changeHandler(e, 'title')} />
            </div>
            <div className="new-expense__control">
               <label htmlFor="">Amount</label>
               <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  onChange={(e) => changeHandler(e, 'amount')}
               />
            </div>
            <div className="new-expense__control">
               <label htmlFor="">Date</label>
               <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-12"
                  onChange={(e) => changeHandler(e, 'date')}
               />
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="button">Cancel</button>
            <button type="submit">Add Expense</button>
         </div>
      </form>
   );
};

export default ExpenseForm;

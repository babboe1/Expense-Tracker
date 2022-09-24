import React from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
   return (
      <div className="new-expense">
         <ExpenseForm />
      </div>
   );
};

export default NewExpense;
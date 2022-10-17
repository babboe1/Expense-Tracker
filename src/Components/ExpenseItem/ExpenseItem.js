import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
   // eslint-disable-next-line no-unused-vars
   const [title, setTitle] = useState(props.title);

   return (
      <div className="expense-item">
         <ExpenseDate date={props.date} />
         <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
         </div>
      </div>
   );
};

export default ExpenseItem;

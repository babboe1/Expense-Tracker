import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
   const [title, setTitle] = useState(props.title);
   


   const titleChangeHandler = () => {
      setTitle(`${props.title} - Updated`)
   }
   return (
      <div className="expense-item">
         <ExpenseDate date={props.date} />
         <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
         </div>
         <button onClick={titleChangeHandler}>change title</button>
      </div>
   );
};

export default ExpenseItem;

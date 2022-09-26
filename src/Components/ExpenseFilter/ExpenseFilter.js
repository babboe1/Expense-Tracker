import React, {useContext} from 'react';
import Context from '../Context/Context';
import './ExpenseFilter.css';

const ExpensesFilter = () => {
   const context = useContext(Context);
   const selectFilterHandler = (e) => {
      context.filterYearHandler(e.target.value)
   }

   return (
      <div className="expenses-filter">
         <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select onChange={selectFilterHandler}>
               <option value="All year">All Year</option>
               <option value="2022">2022</option>
               <option value="2021">2021</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
            </select>
         </div>
      </div>
   );
};

export default ExpensesFilter;

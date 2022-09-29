import React, { useState } from 'react';
import Card from './Components/Card/Card';
import Context from './Components/Context/Context';
import ExpensesFilter from './Components/ExpenseFilter/ExpenseFilter';
import ExpenseChart from './Components/ExpenseItem/ExpenseChart/ExpenseChart';
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

   const chartDataPoints = [
      { label: 'Jan', value: 0 },
      { label: 'Feb', value: 0 },
      { label: 'Mar', value: 0 },
      { label: 'Apr', value: 0 },
      { label: 'May', value: 0 },
      { label: 'Jun', value: 0 },
      { label: 'Jul', value: 0 },
      { label: 'Aug', value: 0 },
      { label: 'Sep', value: 0 },
      { label: 'Oct', value: 0 },
      { label: 'Nov', value: 0 },
      { label: 'Dec', value: 0 },
   ];
   const test = [...chartDataPoints];

   const [expense, setExpenseData] = useState(expenses);
   test.forEach((item, idx) => {
      for (const el of expense) {
         if (idx === el.date.getMonth()) {
            item.value += +el.amount;
            // console.log(item.value);
         }
      }
   });
   // eslint-disable-next-line no-unused-vars
   const [data, setData] = useState(chartDataPoints);
   const [chart, setChart] = useState(test);
   const [flag, setFlag] = useState(false);
   const [filteredYear, setFilteredYear] = useState(expense);
   let initialValue = data.map((item) => item.value);
   const [maxValue, setMaxValue] = useState(Math.max(...initialValue));

   // Handler functions starts here
   const getDataHandler = (newData) => {
      setExpenseData((prevState) => {
         return [...prevState, newData];
      });
      setChart((prev) => {
         console.log([newData]);
         prev.forEach((item, idx) => {
            if (idx === newData.date.getMonth()) {
               item.value += +newData.amount;
            }
         });
         let value = prev.map((item) => item.value);
         setMaxValue(Math.max(...value));
         return [...prev];
      });
   };

   const filterYearHandler = (year) => {
      if (year === 'All year') {
         setFilteredYear(expense);
         let value = chart.map((item) => item.value);
         setMaxValue(Math.max(...value));
         setFlag(false);
         return;
      }

      setFilteredYear(() => {
         setFlag(true);
         let filtered = expense.filter(
            (item) => item.date.getFullYear() === +year,
         );
         return filtered;
      });
   };

   const value = {
      expense,
      filteredYear,
      getDataHandler,
      filterYearHandler,
      flag,
   };
   return (
      <div>
         <Context.Provider value={value}>
            <h1 style={{ textAlign: 'center' }}>Function React</h1>
            <Card>
               <NewExpense />
            </Card>
            <Card>
               <ExpensesFilter />
               <ExpenseChart dataPoint={chart} maxValue={maxValue} />
            </Card>
            <Card>
               <ExpenseItems />
            </Card>
         </Context.Provider>
      </div>
   );
};

export default App;

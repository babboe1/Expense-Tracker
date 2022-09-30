import React, { useEffect, useState } from 'react';
import Card from './Components/Card/Card';
import Chart from './Components/Chart/Chart';
import Context from './Components/Context/Context';
import ExpensesFilter from './Components/ExpenseFilter/ExpenseFilter';
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
   // const test = [...chartDataPoints];

   const [expense, setExpenseData] = useState(expenses);
   const [flag, setFlag] = useState(false);
   const [filteredYear, setFilteredYear] = useState(expense);
   const expenseFlag = flag ? filteredYear : expense;

   chartDataPoints.forEach((item, idx) => {
      for (const el of expenseFlag) {
         if (idx === el.date.getMonth()) {
            item.value += +el.amount;
         }
      }
   });

   const [chart, setChart] = useState(chartDataPoints);
   let initialValue = chart.map((item) => item.value);
   const [maxValue, setMaxValue] = useState(Math.max(...initialValue));


   // Handler functions starts here
   const getDataHandler = (newData) => {
      setExpenseData((prevState) => {
         return [...prevState, newData];
      });
      setChart((prev) => {
         prev.forEach((item, idx) => {
            if (idx === newData.date.getMonth()) {
               item.value += +newData.amount;
            }
         });
         return [...prev];
      });
   };

   const filterYearHandler = (year) => {
      if (year === 'All year') {
         setFilteredYear(expense);
         setFlag(false);
      } else {
         setFilteredYear(() => {
            setFlag(true);
            let filtered = expense.filter(
               (item) => item.date.getFullYear() === +year,
            );
            return filtered;
         });
      }
   };

   useEffect(() => {
      setChart(() => {
         return chartDataPoints.map((item, idx) => {
            for (const el of expenseFlag) {
               if (idx === el.date.getMonth()) {
                  item.value += +el.amount;
               }
            }
            return item;
         });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [expense, filteredYear]);

   useEffect(() => {
      let initialValue = chart.map((item) => item.value);
      setMaxValue(Math.max(...initialValue));
   }, [chart]);

   const value = {
      expenseData: expenseFlag,
      getDataHandler,
      filterYearHandler,
      chart,
      maxValue,
   };
   return (
      <div>
         <Context.Provider value={value}>
            <h1 style={{ textAlign: 'center' }}>Expense Tracker</h1>
            <Card>
               <NewExpense />
            </Card>
            <Card>
               <ExpensesFilter />
               <Chart />
            </Card>
            <Card>
               <ExpenseItems />
            </Card>
         </Context.Provider>
      </div>
   );
};

export default App;

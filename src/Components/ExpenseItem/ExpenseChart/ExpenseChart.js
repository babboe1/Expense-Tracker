import React from 'react';
import Chart from '../../Chart/Chart';

const ExpenseChart = (props) => {
   // const chartDataPoints = [
   //    { label: 'Jan', value: 0 },
   //    { label: 'Feb', value: 0 },
   //    { label: 'Mar', value: 0 },
   //    { label: 'Apr', value: 0 },
   //    { label: 'May', value: 0 },
   //    { label: 'Jun', value: 0 },
   //    { label: 'Jul', value: 0 },
   //    { label: 'Aug', value: 0 },
   //    { label: 'Sep', value: 0 },
   //    { label: 'Oct', value: 0 },
   //    { label: 'Nov', value: 0 },
   //    { label: 'Dec', value: 0 },
   // ];
   // let chartDataValue = [];
   // chartDataValue.sort((a, b) => a - b);
   // props.expenses.forEach((item, idx) => {
   //    const month = item.date.getMonth();
   //    chartDataValue.push(item.amount);
   //    if (chartDataPoints[idx].label === month) {
   //       chartDataPoints[idx].value += item.amount;
   //    }
   // });
// console.log(props);
   return <Chart dataPoints={props.dataPoint} maxValue={ props.maxValue} />;
};

export default ExpenseChart;

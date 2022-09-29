import React from 'react';
import CharBar from './ChartBar/CharBar';
import './Chart.css';

const Chart = (props) => {
   // console.log(props.dataPoints);
   return (
      <div className="chart">
         {props.dataPoints.map((dataPoint) => (
            <CharBar
               key={dataPoint.label}
               value={dataPoint.value}
               maxValue={props.maxValue}
               label={dataPoint.label}
            />
         ))}
      </div>
   );
};

export default Chart;


// const setChartData = (data, exp, test) => {
   //    // eslint-disable-next-line array-callback-return
   //    let newData = data
   //    let map = {
   //       [test]: test
   //    }
   //    data.forEach((item, idx) => {
   //       for (const el of exp) {
   //          if (idx === el.date.getMonth()) {
   //             item.value += +el.amount;
   //             console.log(item.value);
   //          }
   //       }
   //    });
   //    `${test}`(newData)
   //    // return newData;
   // };

   // const initialChart = () => {
   //    let test = [...chartDataPoints];
   //    test.forEach((item, idx) => {
   //       for (const el of expense) {
   //          if (idx === el.date.getMonth()) {
   //             item.value += +el.amount;
   //             // console.log(item.value);
   //          }
   //       }
   //    });
   // };

   // setChart((prev) => {
   //    console.log(data);
   //    let array = [...data];
   //    array.forEach((item, idx) => {
   //       for (const el of filtered) {
   //          if (idx === el.date.getMonth()) {
   //             console.log(item.value);
   //             item.value = +el.amount;
   //             console.log(item.value);
   //          }
   //       }
   //    });
   //    let value = prev.map((item) => item.value);
   //    setMaxValue(Math.max(...value));
   //    console.log(array);
   //    return array;
   // });
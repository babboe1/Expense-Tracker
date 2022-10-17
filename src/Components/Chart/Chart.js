import React, { useContext } from 'react';
import CharBar from './ChartBar/CharBar';
import './Chart.css';
import Context from '../Context/Context';

const Chart = () => {
   const dataPoints = useContext(Context).chart;
   const maxValue = useContext(Context).maxValue;
   return (
      <div className="chart">
         {dataPoints.map((dataPoint) => (
            <CharBar
               key={dataPoint.label}
               value={dataPoint.value}
               maxValue={maxValue}
               label={dataPoint.label}
            />
         ))}
      </div>
   );
};

export default Chart;
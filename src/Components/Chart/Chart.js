import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totelMaximum = Math.max(...dataPointsValues);

  return <div className="chart">
    {props.dataPoints.map(dataPoint => 
    <ChartBar
     key={dataPoint.label}
     value={dataPoint.value} 
     maxValue={totelMaximum} 
     label={dataPoint.label}/>
     )}
  </div>
};

export default Chart;
import React from "react";
import ExportButton from "./ExportButton";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const Histogram = ({ data }) => {
  const labels = data.map((item)=>item.word);
  const values = data.map((item)=>item.frequency);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Top 20 Words",
        data: values,
        backgroundColor: 'blue',
        borderColor : 'red',
        hoverBackgroundColor: '#E54345',       
      },
    ]
  }
  

  
  return (
    <>
    
    <div className="chart" >
      <Bar className="bar" data={chartData}/>
    </div>
    <div className="ExportButton">
    <div className="expbtn"><ExportButton data={data}/></div>
    </div>
     
    </>
    )
}

export default Histogram;

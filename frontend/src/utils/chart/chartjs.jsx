import React, {useEffect, useState} from "react";
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// css
import '../../css/chart/chart.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  // import faker from 'faker';
  import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const maxValue = 500
  export const plugins = [{afterLayout: chart => {
    let ctx = chart.ctx;
    ctx.save();
    let yAxis = chart.scales.y;
    // let dataset = chart.data.datasets[0];
    //기준값을 넣어준다
    let ymaxValue = yAxis.getPixelForValue(maxValue);
    let gradient = ctx.createLinearGradient(0, yAxis.top, 0, yAxis.bottom);

    //기준선 넘었을 때 색상은 #dc0e0e (빨간색)
    gradient.addColorStop(0, '#dc0e0e');
    let offset = 1 / yAxis.bottom * ymaxValue;
    gradient.addColorStop(offset, '#dc0e0e');
    //그라데이션
    gradient.addColorStop(offset, '#2979ff');

    //기준값 아래의 색상은 #6fba2c (연두색)
    gradient.addColorStop(1, '#2979ff');
    chart.data.datasets[0].borderColor = gradient;
    ctx.restore();
  }
}];

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['12:00', '12:01', '12:02', '12:03', '12:04', '12:05', '12:06', '12:07', '12:08', '12:09', '12:10', '12:11', '12:12', '12:13', '12:14', '12:15', '12:16', '12:17', '12:18', '12:19', '12:20',
  '12:21', '12:22', '12:23', '12:24', '12:25', '12:26', '12:27', '12:28', '12:29', '12:30', '12:31', '12:32', 

];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension:0.5   //그래프 둥글기 정도
      },
    ],
  };
  
export function App() {
//   return <Pie data={data} />;
return <Line options={options} plugins={plugins} data={data} />;
}

export default App
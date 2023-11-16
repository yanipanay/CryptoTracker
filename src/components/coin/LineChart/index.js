import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      interaction: {
        node: "index",
        intersect: false,
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumbers } from "../../../functions/convertNumbers";

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
      scales: {
        coin1: multiAxis && {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            callback: function (value) {
              if (priceType === "total_volumes") {
                return convertNumbers(value);
              } else if (priceType === "market_caps") {
                return "$" + convertNumbers(value);
              } else {
                return "$" + value.toLocaleString();
              }
            },
          },
        },
        coin2: multiAxis && {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            callback: function (value) {
              if (priceType === "total_volumes") {
                return convertNumbers(value);
              } else if (priceType === "market_caps") {
                return "$" + convertNumbers(value);
              } else {
                return "$" + value.toLocaleString();
              }
            },
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;

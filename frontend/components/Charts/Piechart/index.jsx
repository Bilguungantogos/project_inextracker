import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Piechartinfo from "./piechartinfo";

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
  const data = {
    labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
    datasets: [
      {
        label: "Income - Expense",
        data: [5000000, 5000000, 5000000, 5000000, 5000000],
        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA;",
          "#F2901C",
        ],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const piedata = [
    {
      dotcolorsrc: "./bluedot",
      exname: "Bills",
      value: 5000000,
      percent: "15.50%",
    },
    {
      dotcolorsrc: "./bluedot",
      exname: "Food",
      value: 5000000,
      percent: "15.50%",
    },
    {
      dotcolorsrc: "./bluedot",
      exname: "Shopping",
      value: 5000000,
      percent: "15.50%",
    },
    {
      dotcolorsrc: "./bluedot",
      exname: "Insurance",
      value: 5000000,
      percent: "15.50%",
    },
    {
      dotcolorsrc: "./bluedot",
      exname: "Clothing",
      value: 5000000,
      percent: "15.50%",
    },
  ];
  return (
    <div className="w-[588px] bg-white px-6">
      <div className="flex justify-between items-center">
        <h2 className="px-6 py-4">Income - Expense</h2>
        <p>Jun 1 - Nov 30</p>
      </div>
      <div className="flex items-center py-8">
        <div className="w-[156px]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex flex-col w-full ml-4">
          {piedata.map(() => {
            return <Piechartinfo piedata={piedata} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Piechart;

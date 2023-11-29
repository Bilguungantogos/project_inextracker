import React from "react";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = () => {
  const [barchartData, setbarchartData] = useState({ datasets: [] });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setbarchartData({
      labels: ["july", "july", "july", "july", "july", "july", "july"],
      datasets: [
        {
          label: "Income",
          data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
          backgroundColor: "#84CC16",
        },
        {
          label: "Expenses",
          data: [2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000],
          backgroundColor: "#F97316",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: { display: false },
      },
    });
  }, []);

  return (
    <div className="w-[588px] bg-white rounded-[10px]">
      <h2 className="px-6 py-4">Income - Expense</h2>
      <Bar data={barchartData} options={chartOptions} />
    </div>
  );
};

export default Barchart;

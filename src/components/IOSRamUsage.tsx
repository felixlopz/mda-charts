import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const IOSRamUsageData = [
  175.1, 200.5, 223.42, 240.4, 240.4, 233.19, 233.2, 233.21, 237.91, 237.56,
  238.55, 233.24,
];

const options = {
  scales: {
    y: {
      ticks: {
        callback: (value: any) => {
          return `${value} MB`;
        },
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Utilización de memoria ram iOS (MB)",
    },
  },
};

const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      data: IOSRamUsageData,
      label: "Android",
      borderColor: "rgb(26, 208, 72)",
      backgroundColor: "rgb(6, 133, 38)",
    },
  ],
};

interface IOSRamUsageProps {}

export const IOSRamUsage: FC<IOSRamUsageProps> = ({}) => {
  return <Line options={options} data={data} />;
};

export default IOSRamUsage;

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

const IOSModelLoadData = [
  11947.58, 5587.19, 4650.5, 3950.51, 8147.62, 4629.58, 6510.77, 5439.84,
  4612.13, 6224.07, 3906.88,
];

const AndroidModelLoadData = [
  10996.72, 7324.39, 5437.39, 5723.23, 7748.72, 7533.04, 8810.18, 6559.5,
  6933.37, 7802.56,
];

const WebModelLoadData = [
  348.8, 246.7, 235.8, 335, 249.19, 237.59, 232.39, 234.19, 229, 233.19,
];

const WebModelLoadWithCacheData = [
  64162.59, 63941.52, 65651.54, 64218.12, 64428.32, 69498.53, 69788.42,
  70428.35, 64298.31, 65427.5,
];

const options = {
  scales: {
    y: {
      ticks: {
        callback: (value: any) => {
          return `${value} ms`;
        },
        stepSize: 1000,
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
      text: "Tiempo de respuesta carga del modelo",
    },
  },
};

const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      data: IOSModelLoadData,
      label: "iOS",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      data: WebModelLoadData,
      label: "Web",
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      data: AndroidModelLoadData,
      label: "Android",
      borderColor: "rgb(26, 208, 72)",
      backgroundColor: "rgb(6, 133, 38)",
    },
    {
      data: WebModelLoadWithCacheData,
      label: "Android",
      borderColor: "rgb(172, 26, 208)",
      backgroundColor: "rgb(71, 5, 88)",
    },
  ],
};

interface LoadModelProps {}

export const LoadModel: FC<LoadModelProps> = ({}) => {
  return <Line options={options} data={data} />;
};

export default LoadModel;

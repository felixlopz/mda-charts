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

const IOSPredictionProcessingData = [
  230.96, 51.4, 57.16, 56.79, 56.72, 56.36, 53.72, 58.62, 57.56, 57.15, 53,
];

const AndroidPredictionProcessingData = [
  2369.55, 1419.61, 955.26, 1196.05, 2169.32, 816.05, 728.19, 635.49, 769.74,
  823.98,
];

const WebPredictionProcessingData = [
  444.3, 20.5, 19.9, 22.3, 20.4, 19.5, 17.8, 22.19, 22.4, 19.5,
];

const options = {
  scales: {
    y: {
      ticks: {
        callback: (value: any) => {
          return `${value} ms`;
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
      text: "Tiempo de respuesta del procesamiento de la predicción (ms)",
    },
  },
};

const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      data: IOSPredictionProcessingData,
      label: "iOS",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      data: WebPredictionProcessingData,
      label: "Web",
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      data: AndroidPredictionProcessingData,
      label: "Android",
      borderColor: "rgb(26, 208, 72)",
      backgroundColor: "rgb(6, 133, 38)",
    },
  ],
};

interface PredictionProcessingProps {}

export const PredictionProcessing: FC<PredictionProcessingProps> = ({}) => {
  return <Line options={options} data={data} />;
};

export default PredictionProcessing;

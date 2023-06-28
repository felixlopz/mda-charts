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

const IOSImageProcessingData = [
  253.18, 258.63, 254.84, 253.58, 252.43, 255.16, 240.58, 248.67, 245.46,
  244.63,
];

const AndroidImageProcessingData = [
  20964.08, 20587.37, 20822.65, 20489.48, 14785.01, 15574.82, 14376.84,
  15039.69, 15043.2, 13875.22,
];

const WebImageProcessingData = [
  254.69, 108.6, 52.09, 38.4, 60.9, 51.9, 77, 58.7, 59, 50,
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
      text: "Tiempo de respuesta procesamiento de imagenes",
    },
  },
};

const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      data: IOSImageProcessingData,
      label: "iOS",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      data: WebImageProcessingData,
      label: "Web",
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      data: AndroidImageProcessingData,
      label: "Android",
      borderColor: "rgb(26, 208, 72)",
      backgroundColor: "rgb(6, 133, 38)",
    },
  ],
};

interface ImageProcessingProps {}

export const ImageProcessing: FC<ImageProcessingProps> = ({}) => {
  return <Line options={options} data={data} />;
};

export default ImageProcessing;

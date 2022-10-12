import React from "react";
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

function Chart(props) {
  const [labelsC, setLabelsC] = React.useState([]);
  const [labelsS, setLabelsS] = React.useState([]);

  const { dataForChart } = props
  React.useEffect(() => {
    let arrayFirst = [];
    let arraySecond = [];
    dataForChart.map((element) => {
      arrayFirst.push(element.sensorId)
      arraySecond.push(element.avg)
    })
    setLabelsS(arrayFirst)
    setLabelsC(arraySecond)
  }, [])
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Average Current (in mA)",
      },

    },
    scales: {
      y: {
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  const data = {
    labels: labelsS,
    datasets: [
      {
        data: labelsC,
        backgroundColor: "rgba(27, 89, 248, 0.8)",
        borderRadius: 197,
        barThickness: 20,
        width: 1
      }
    ],
  };
  return (
    <>
      <div style={{ width: "85%" }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default Chart;
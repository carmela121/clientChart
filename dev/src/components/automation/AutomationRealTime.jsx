import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import burndownData from "./burndownData";
import { Button } from "@material-ui/core";
import "./automation.css";
const AutomationRealTimeChart = () => {

  const [automationData, setAutomationData] = useState([]);
  const [dayCounter, setDayCounter] = useState(0);
  const [initialState, setInitialState] = useState([]);
  const [chartData, setChartData] = useState({});
  const [startAnimation, setStartAnimation] = useState(false);
  const [text, setShowText] = useState(false);
  const chartOptions =
  {
    labels: automationData.map((item) => item.Day),
    datasets: [
      {
        data: automationData.map((item) => item["Current state"]),
        label: "Current State",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        data: automationData.map((item) => item["Improved State"]),
        label: "Improved State",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(255, 0, 0, 0.6)",
        borderColor: "rgba(255, 0, 0, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(255, 0, 0, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255, 0, 0, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        data: automationData.map((item) => item["Optimal State"]),
        label: "Optimal State",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(241, 226, 95, 0.4)",
        borderColor: "rgb(241, 226, 95, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(241, 226, 95, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(241, 226, 95, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,

      },
    ],
  }

  useEffect(() => {
    if (startAnimation) {
      setChartData(chartOptions)

      if (dayCounter < 50) {
        setTimeout(() => {
          setDayCounter(dayCounter + 1);
          setAutomationData(() => burndownData.slice(0, dayCounter))

        }, 250)
      }
      if (dayCounter === 50) {
        setStartAnimation(false)
        setDayCounter(0)

        if (automationData != 0) {
          setShowText(true)
        } else {
          setShowText(false)
        }
      }
    }
  }, [dayCounter, startAnimation])


  return (
    <div className="container">
      <h1>Optimising offboarding execution</h1>

      <div className="row">
        <div className="chart-container">
          <Line
            data={chartData}
            options={{
              layout: {
                padding: {
                  right: 20,
                  left: 20,
                  bottom: 40
                }
              },
              scales: {
                xAxes: [{
                  ticks: {
                    stepSize: 1,
                    min: 50,
                    suggestedMin: 50
                  }
                }],
                yAxes: [{
                  ticks: {
                    suggestedMax: 1000,
                    suggestedMin: 0
                  }
                }]
              },
              animation: {
                duration: 1000
              }
            }}
          />
        </div>
        <div className="text-container">
          {text && <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis vitae expedita et perferendis molestias possimus, doloribus quae quo enim! Nulla rem ut maxime libero reiciendis? Iste consequuntur aliquid dicta dolores!</p>}
          <div className="button-start">
            <Button
              onClick={() => setStartAnimation(!startAnimation)}
              variant="contained"
              color="secondary">{startAnimation ? "Stop" : "Start"}
            </Button>

          </div>
        </div>
      </div>
    </div >
  );
};

export default AutomationRealTimeChart;
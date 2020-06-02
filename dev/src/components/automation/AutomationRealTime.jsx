import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import burndownData from "./burndownData";
import { Button, Select, TextField, Input } from "@material-ui/core";
import "./automation.css";
const AutomationRealTimeChart = (props) => {

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

        }, 100)
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

  const labels = [{ label: "Automation setup", result: "8 Days" }, { label: "EMEA Cost", result: "€10K" }, { label: "APAC Cost", result: "€22K" }, { label: "AMER Cost", result: "€17K" }]
  return (
    <div className="container">
      <h1>Optimising Offboarding Execution</h1>

      <div className="row">
        <div className="chart-container">
          <Line
            data={chartData}
            options={{
              layout: {
                padding: {
                  right: 20,
                  left: 20,

                }
              },
              scales: {
                xAxes: [{
                  ticks: {
                    stepSize: 1,
                    min: 50,
                    suggestedMin: 50
                  },
                  scaleLabel: {
                    display: true,
                    fontSize: 14,
                    labelString: "Number of Weeks",
                  }
                }],
                yAxes: [{
                  ticks: {
                    suggestedMax: 1000,
                    suggestedMin: 0
                  },
                  scaleLabel: {
                    display: true,
                    fontSize: 14,
                    labelString: "Number of Accounts",
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
          {!text && <div>
            <h3>Monte Carlo Simulation</h3>
            <h5>Using the business parameters below and a given budget, we simulate different automation strategies to obtain the optimal state</h5>
            <h5>Parameters:</h5>
            {labels.map((item) => (
              <ul className="labels">
                <li><h5 style={{ fontWeight: "normal" }} key={item}>{item.label}:</h5>
                  <h5 style={{ marginLeft: "8px" }}>{item.result}</h5></li>
              </ul>
            ))}
            <br />

            <label>Budget: </label>€  <input type="text" />

          </div>}
          {text &&
            <div>
              <h3>Best parameters:</h3>
              <ul className="labels">
                <li>
                  <h5>2 x Automation Bots in EMEA: </h5>
                </li>
                <ul className="systems">
                  <li>
                    <p>- System 5 </p>

                  </li>
                  <li>
                    <p>- System 6 </p>

                  </li>
                </ul>

                <li>
                  <h5>1 x Automation Bot in APAC: </h5>
                </li>
                <ul className="systems">
                  <li>
                    <p>- System 2 </p>

                  </li>
                </ul>
                <li>
                  <p style={{ marginBottom: "0", fontSize: "16px", fontWeight: "bold", color: "#db0011" }}>51% Reduction in processing time achieved </p>

                </li>
                <li>
                  <p style={{ fontSize: "16px", fontWeight: "bold", color: "#db0011" }}>€8K  below budget</p>
                </li>
              </ul>
            </div>
          }
          <br />
          {!text && <div className="button-start">
            <Button
              onClick={() => setStartAnimation(!startAnimation)}
              variant="contained"
              color="secondary">{startAnimation ? "Stop" : "Start"}
            </Button>

          </div>}
        </div>
      </div>
    </div >
  );
};

export default AutomationRealTimeChart;
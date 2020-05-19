import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ClientDataChart = (props) => {
  const [Xlabel, setXLabel] = React.useState('Number of BRs')
  const getData = () => {
    if (props.activeQuery !== "2018/2019" && props.typeQuery === "BRData") {
      setXLabel("Number of BRs")
      const { onboardedBRs, offboardedBRs } = props.data;

      const dataStructure = {
        "Onboarded BRs": onboardedBRs,
        "Offboarded BRs": offboardedBRs,

      };

      const chartDataConfig = {
        labels: Object.keys(dataStructure),
        datasets: [{
          data: Object.values(dataStructure),
          label: "Total",
          backgroundColor: "rgba(120, 139, 191, 0.3)",
          borderColor: "rgba(120, 139, 191,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(120, 139, 191,1)",
          hoverBorderColor: "rgba(120, 139, 191,1)",
        }]
      };
      return chartDataConfig
    }
    if (props.activeQuery !== "2018/2019" && props.typeQuery === "FileData") {
      setXLabel("Number of Files")

      const { onboardedFiles, offboardedFiles } = props.data;

      const dataStructure = {

        "Onboarded Files": onboardedFiles,
        "Offboarded Files": offboardedFiles,
      };

      const chartDataConfig = {
        labels: Object.keys(dataStructure),
        datasets: [{
          data: Object.values(dataStructure),
          label: "Total",
          backgroundColor: "rgba(255, 204, 255, 0.3)",
          borderColor: "rgba(255, 204, 255,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255, 204, 255,1)",
          hoverBorderColor: "rgba(255, 204, 255,1)",
        }]

      };
      return chartDataConfig
    }
    if (props.activeQuery === "2018/2019" && props.typeQuery === "BRData") {
      setXLabel("Number of BRs")
      const chartDataConfigComparison = {
        labels: [props.dataComparison[2].year, props.dataComparison[3].year],
        datasets: [
          {
            label: "Onboarded BRs",
            backgroundColor: "rgba(120, 139, 191, 0.3)",
            borderColor: "rgba(120, 139, 191,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(120, 139, 191,1)",
            hoverBorderColor: "rgba(120, 139, 191,1)",
            data: [props.dataComparison[2].onboardedBRs, props.dataComparison[3].onboardedBRs]
          },
          {
            label: "Offboarded BRs",
            backgroundColor: "rgba(255, 204, 255, 0.3)",
            borderColor: "rgba(255, 204, 255,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 255,1)",
            hoverBorderColor: "rgba(255, 204, 255,1)",
            data: [props.dataComparison[2].offboardedBRs, props.dataComparison[3].offboardedBRs]
          },

        ],

      };
      return chartDataConfigComparison
    }
    if (props.activeQuery === "2018/2019" && props.typeQuery === "FileData") {
      setXLabel("Number of Files")
      const chartDataConfigComparison = {
        labels: [props.dataComparison[2].year, props.dataComparison[3].year],
        datasets: [
          {
            label: "Onboarded Files",
            backgroundColor: "rgba(120, 139, 191, 0.3)",
            borderColor: "rgba(120, 139, 191,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(120, 139, 191,1)",
            hoverBorderColor: "rgba(120, 139, 191,1)",
            data: [props.dataComparison[2].onboardedFiles, props.dataComparison[3].onboardedFiles]
          },
          {
            label: "Offboarded Files",
            backgroundColor: "rgba(255, 204, 255, 0.3)",
            borderColor: "rgba(255, 204, 255,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 255,1)",
            hoverBorderColor: "rgba(255, 204, 255,1)",
            data: [props.dataComparison[2].offboardedFiles, props.dataComparison[3].offboardedFiles]
          },

        ],

      };
      return chartDataConfigComparison
    }

  }
  const handleChange = (e) => {
    props.setQuery(e.target.value)
  }
  const handleTypeChange = (e) => {
    props.setTypeQuery(e.target.value)
  }

  return (

    <div style={{ width: "50%", textAlign: "center", padding: "40px" }}>
      <h1>Client Adoption and Offboarding</h1>
      <div>
        <Select
          style={{ width: "100px", textAlign: "center", marginBottom: "40px", marginRight: "20px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.typeQuery}
          onChange={handleTypeChange}

        >
          <MenuItem value={"BRData"}>BR Data</MenuItem>
          <MenuItem value={"FileData"}>File Data</MenuItem>

        </Select>
        <Select
          style={{ width: "100px", textAlign: "center", marginBottom: "40px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.activeQuery}
          onChange={handleChange}

        >
          {props.dataComparison.map(({ year }) => (
            <MenuItem key={year} value={year}>{year}</MenuItem>
          ))}
          <MenuItem value={"2018/2019"}>2018/2019</MenuItem>
        </Select>

      </div>

      <HorizontalBar
        options={{
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                fontSize: 16,
                labelString: Xlabel,
              }
            }]
          }
        }}
        data={getData} />

    </div>
  );

};

export default ClientDataChart;

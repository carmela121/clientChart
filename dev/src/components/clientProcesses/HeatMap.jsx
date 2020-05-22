import React from 'react';
import ReactApexChart from "react-apexcharts";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const HeatMap = (props) => {

  console.log(props)
  // const dataOptions = {
  //   chart: {
  //     toolbar: {
  //       show: false,
  //     }
  //   },

  //   plotOptions: {
  //     heatmap: {
  //       radius: 4,
  //       colorScale: {
  //         ranges: [{
  //           from: 0,
  //           to: 2000,
  //           color: "#4bb0ff",
  //           name: "0 - 2000"
  //         },
  //         {
  //           from: 2001,
  //           to: 4000,
  //           color: "#0063b0",
  //           name: "2001 - 4000"
  //         },
  //         {
  //           from: 4001,
  //           to: 6000,
  //           color: "#003863",
  //           name: "4001 - 6000"
  //         }
  //         ]
  //       }

  //     }
  //   },
  //   xaxis: {
  //     categories: props.data.map(({ ["Location code"]: location }) => location)
  //   },
  //   dataLabels: {
  //     enabled: true,
  //     // style: {
  //     //   colors: ["#787878"],
  //     //   fontWeight: "lighter"
  //     // },
  //   },
  //   title: {
  //     text: 'Method',
  //     margin: 10,
  //     offsetX: 40,
  //     offsetY: 10,
  //     floating: true,
  //     style: {
  //       fontSize: '16px',

  //     },

  //   },

  //   colors: ["#008FFB"],
  // };
  // const dataSeries = [{
  //   name: "Manual Closures",
  //   data: props.data.map((item) => item["Manual Closures"])
  // },
  // {
  //   name: "RPA Closures",
  //   data: props.data.map((item) => item["RPA Closures"])
  // },
  // {
  //   name: "Closures with script available",
  //   data: props.data.map((item) => item["Closures with script available"])
  // }]


  return (

    <div style={{ padding: "40px" }} >

      <div className="mixed-chart" style={{ margin: "auto" }}>
        <h1>Offboarding Activities</h1>
        <Select
          style={{ width: "100px", textAlign: "center", marginBottom: "40px", marginRight: "20px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.activeQuery}
          onChange={props.handleChange}

        >
          <MenuItem value={"Hubs"}>Hubs</MenuItem>
          <MenuItem value={"EMEA Branches"}>EMEA Branches</MenuItem>
          <MenuItem value={"APAC Branches"}>APAC Branches</MenuItem>
          <MenuItem value={"AMER Branches"}>AMER Branches</MenuItem>

        </Select>
        {/* <ReactApexChart
          options={dataOptions}
          series={dataSeries}
          type="heatmap"
          height="300px"

        /> */}
        <p>Country Code</p>
      </div>
    </div >

  );
}


export default HeatMap;
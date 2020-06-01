import React from 'react';
import ReactApexChart from "react-apexcharts";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SystemClosureTable from "./SystemClosureTable"
const HeatMap = (props) => {
  const [closureSystems, setClosureSystems] = React.useState([]);
  const [PAChecks, setPAChecks] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [location, setLocation] = React.useState([])
  const [rangeColour, setRangeColour] = React.useState("#4bb0ff")


  const getData = (systems) => {

    if (Array.isArray(systems) && systems.length > 0) {
      const closure = systems[0]["Closure Systems"];
      const pachecks = systems[0]["P&A Check Systems"]

      if (props.activeQueryMethod === "Closures") {
        console.log(props.activeQueryMethod)
        return closure;
      }
      if (props.activeQueryMethod === "P & A checks") {

        return pachecks;
      }


    } else {

      return []
    }

  }

  const dataOptionsClosures = {
    chart: {
      toolbar: {
        show: false,
      },
      events: {
        click: function (event, chartContext, config) {
          let el = event.target;
          let dataPointIndex = parseInt(el.getAttribute("j"));

          const results = props.data.filter((item, i) => i === dataPointIndex)
          const country = results.map((item) => item["Location code"])
          setClosureSystems(getData(results))
          setLocation(country)
          setOpenModal(true)
        },
        mouseMove: (event, chartContext, config) => {
          let el = event.target;
          let range = el.getAttribute("data:default-text");
          console.log(range)
          if (range === "0-1000") {
            setRangeColour("#b30000");
          } else {
            setRangeColour("#4bb0ff")
          }
        }
      }
    },

    plotOptions: {
      heatmap: {
        radius: 4,
        colorScale: {
          ranges: [{
            from: 0,
            to: 1000,
            color: rangeColour,

            name: "0-1000"
          },
          {
            from: 1001,
            to: 4000,
            color: "#0063b0",
            name: "2001-4000"
          },
          {
            from: 4001,
            to: 6000,
            color: "#003863",
            name: "4001-6000"
          }]
        }
      }
    },
    xaxis: {
      categories: props.data.map(({ ["Location code"]: location }) => location)
    },
    dataLabels: {
      enabled: true,
    },
    title: {
      text: 'Method',
      margin: 10,
      offsetX: 40,
      offsetY: 10,
      floating: true,
      style: {
        fontSize: '16px',

      },

    },

    colors: ["#008FFB"],
  };
  const dataSeriesClosures = [
    //   {
    //   name: "Closures with script available",
    //   data: props.data.map((item) => item["Closures with script available"])
    // },
    {
      name: "RPA Closures",
      data: props.data.map((item) => item["RPA Closures"])
    },
    {

      name: "Manual Closures",
      data: props.data.map((item) => item["Manual Closures"])
    }]

  const dataOptionsPA = {
    chart: {
      toolbar: {
        show: false,
      },
      events: {
        click: function (event, chartContext, config) {
          let el = event.target;

          let dataPointIndex = parseInt(el.getAttribute("j"));

          const results = props.data.filter((item, i) => i === dataPointIndex)

          const country = results.map((item) => item["Location code"])
          setPAChecks(getData(results))
          setLocation(country)
          setOpenModal(true)
        }
      }
    },

    plotOptions: {
      heatmap: {
        radius: 4,
        colorScale: {
          ranges: [{
            from: 0,
            to: 2000,
            color: "#4bb0ff",
            name: "0 - 2000"
          },
          {
            from: 2001,
            to: 4000,
            color: "#0063b0",
            name: "2001 - 4000"
          },
          {
            from: 4001,
            to: 6000,
            color: "#003863",
            name: "4001 - 6000"
          }
          ]
        }

      }
    },
    xaxis: {
      categories: props.data.map(({ ["Location code"]: location }) => location)
    },
    dataLabels: {
      enabled: true,

    },
    title: {
      text: 'Method',
      margin: 10,
      offsetX: 40,
      offsetY: 10,
      floating: true,
      style: {
        fontSize: '16px',

      },

    },

    colors: ["#008FFB"],
  };
  const dataSeriesPA = [{
    name: "RPA P&A Checks",
    data: props.data.map((item) => item["RPA P&A Checks"])
  },
  // {
  //   name: "P&A Checks with script available",
  //   data: props.data.map((item) => item["P&A Checks with script available"])
  // },
  {
    name: "Manual P&A Checks",
    data: props.data.map((item) => item["Manual P&A Checks"])

  }]
  const handleClose = () => {
    setOpenModal(false);
  };
  return (

    <div style={{ width: "60%", margin: "auto" }} >

      <div className="mixed-chart" style={{ margin: "auto" }}>
        <h1>Offboarding activities</h1>
        <Select
          style={{ width: "100px", textAlign: "center", marginBottom: "40px", marginRight: "20px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.activeQueryMethod}
          onChange={props.handleType}

        >
          <MenuItem value={"Closures"}>Closures</MenuItem>
          <MenuItem value={"P & A checks"}>P & A checks</MenuItem>
          <MenuItem value={"All"}>All</MenuItem>


        </Select>
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

        <h5>Number of accounts</h5>
        {props.activeQueryMethod === "Closures" &&
          <div>
            <ReactApexChart
              options={dataOptionsClosures}
              series={dataSeriesClosures}
              type="heatmap"
              height="300px"

            />
            <SystemClosureTable
              handleClose={handleClose}
              open={openModal}
              region={location}
              closureData={closureSystems}>

            </SystemClosureTable>
          </div>
        }

        {props.activeQueryMethod === "P & A checks" &&
          <div>
            <ReactApexChart
              options={dataOptionsPA}
              series={dataSeriesPA}
              type="heatmap"
              height="300px"

            />
            <SystemClosureTable
              handleClose={handleClose}
              open={openModal}
              region={location}
              paChecks={PAChecks}>


            </SystemClosureTable>
          </div>
        }

        {props.activeQueryMethod === "All" &&
          <div>
            <ReactApexChart
              options={dataOptionsClosures}
              series={dataSeriesClosures}
              type="heatmap"
              height="300px"

            />
            <SystemClosureTable
              handleClose={handleClose}
              open={openModal}
              region={location}
              closureData={closureSystems}>

            </SystemClosureTable>
            <p>Country Code</p>

            <ReactApexChart
              options={dataOptionsPA}
              series={dataSeriesPA}
              type="heatmap"
              height="300px"

            />

            <SystemClosureTable
              handleClose={handleClose}
              open={openModal}
              region={location}
              paChecks={PAChecks}>


            </SystemClosureTable>
            <p>Country Code</p>
          </div>}



      </div>
    </div >

  );
}


export default HeatMap;
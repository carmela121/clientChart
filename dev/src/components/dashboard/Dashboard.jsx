import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import dataProcess from '../clientProcesses/data';
import Chart from '../clientAdoption/BarChart';
import ClientOffboarding from '../clientProcesses/ClientOffboarding';
import AutomationRealTimeChart from '../automation/AutomationRealTime';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

  },
  appBar: {
    height: "82px"
  },
  tabs: {
    marginTop: "15px"
  },

}));

const Dashboard = (props) => {
  const [value, setValue] = React.useState(0);
  const [customerData, setCustomerData] = React.useState([]);

  React.useEffect(() => {
    setCustomerData(dataProcess)
  }, [])
  const classes = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="default" position="static">
        <img className="logo-text" src={props.textImage} alt="logo"></img>
        <Tabs
          indicatorColor="secondary"
          textColor="secondary"
          className={classes.tabs} value={value}
          onChange={handleChange}
          aria-label="dashboard"
          centered>
          <Tab label="Analysis" {...a11yProps(0)} />
          <Tab label="Insights" {...a11yProps(1)} />
          <Tab label="Result" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Chart />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ClientOffboarding />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AutomationRealTimeChart />
      </TabPanel>
    </div>
  );
}


export default Dashboard;

// import React from "react";
// import { Tabs, Tab, Box } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import dataProcess from '../clientProcesses/data';
// import Chart from '../clientAdoption/BarChart';
// import ClientOffboarding from '../clientProcesses/ClientOffboarding';
// import AutomationRealTimeChart from '../automation/AutomationRealTime';
// import { makeStyles } from '@material-ui/core/styles';

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     marginTop: "10px",

//   },
// }));
// const Dashboard = (props) => {
//   const [value, setValue] = React.useState(0)
//   const [customerData, setCustomerData] = React.useState([])

//   React.useEffect(() => {
//     setCustomerData(dataProcess)
//   }, [])
//   const classes = useStyles()
//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }
//   return (
//     <div className={classes.root}>
//       <Tabs value={value} onChange={handleChange} indicatorColor="primary" centered>
//         <Tab label="Adoption" />
//         <Tab label="Processes" />
//         <Tab label="Result" />
//       </Tabs>

//       <TabPanel value={value} index={0}>
//         <Chart />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <ClientOffboarding />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <AutomationRealTimeChart />
//       </TabPanel>

//     </div>
//   )
// }

// export default Dashboard;
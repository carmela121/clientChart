import React from "react";
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import dataProcess from '../clientProcesses/data'
import Chart from '../clientAdoption/BarChart'
import HeatMap from '../clientProcesses/HeatMap'
import { makeStyles } from '@material-ui/core/styles';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
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



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: "10px"
  },
}));
const Dashboard = (props) => {
  const [value, setValue] = React.useState(0)
  const [customerData, setCustomerData] = React.useState([])

  React.useEffect(() => {
    setCustomerData(dataProcess)
  }, [])
  const classes = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" centered>
        <Tab label="Adoption" />
        <Tab label="Processes" />

      </Tabs>

      <TabPanel value={value} index={0}>
        <Chart />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HeatMap />
      </TabPanel>

    </div>
  )
}

export default Dashboard;
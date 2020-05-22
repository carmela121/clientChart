import React from 'react';
import Chart from './components/clientAdoption/BarChart';
import logo from './logo.png';
import brand from './deutsche-bank.png';
import Header from './components/Header/Header';
import HeatMap from './components/clientProcesses/HeatMap'
import Dashboard from './components/dashboard/Dashboard'
import { makeStyles } from '@material-ui/core/styles';

import './themes.css'
import './App.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  }
}));
const App = () => {
  const classes = useStyles();
  const [prefersDark, setDark] = React.useState(false)

  const handleClick = () => {
    setDark(state => ({ prefersDark: !prefersDark }))

  }


  return (
    <div className={classes.root}>

      <div className={prefersDark ? 'dark' : 'light'}>
        <Header logoImage={logo} textImage={brand} />
        < Dashboard />


      </div >

    </div>

  );
}



export default App;

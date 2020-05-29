import React from 'react';
import logo from './components/images/logo.png';
import brand from './components/images/deutsche-bank.png';
import hsbc from './components/images/HSBC_Logo_2018.png'
import Header from './components/header/Header';
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

  // const handleClick = () => {
  //   setDark(state => ({ prefersDark: !prefersDark }))

  // }

  return (
    <div className={classes.root}>

      <div className={prefersDark ? 'dark' : 'light'}>
        {/* <Header logoImage={logo} textImage={brand} /> */}
        <Header textImage={hsbc} />
        <Dashboard />


      </div >

    </div>

  );
}



export default App;

import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import "./header.css"

const Header = (props) => {

  return (
    <div className="header">
      <img className="logo-text" src={props.textImage}></img>
      <img className="logo" src={props.logoImage}></img>
    </div>
  )


}


export default Header;



import React from 'react';

import "./header.css"

const Header = (props) => {

  return (
    <div className="header">
      <img className="logo-text" src={props.textImage} alt="brand"></img>
      {/* <img className="logo" src={props.logoImage} alt="logo"></img> */}
    </div>
  )
}

export default Header;



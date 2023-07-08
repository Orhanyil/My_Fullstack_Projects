import React from 'react';
import logo from "../../assets/nba-logo.png"
import "./Header.css"






const Header = () => {
  return (
    <div>
        <img className='logo mt-4' src={logo} alt="logo" />
        <h1 className="text-warning mt-2 ">NBA Legend</h1>
        <input className="input" type="text" placeholder='Search Player!...'/>
    </div>
  )
}

export default Header
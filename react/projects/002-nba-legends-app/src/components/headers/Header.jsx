import React from 'react';
import logo from "../../assets/nba-logo.png"
import "./Header.css"

const Header = () => {
  return (
    <div>
        <img className='logo mt-4' src={logo} alt="logo" />
        <h1 className="mt-2 text-danger">NBA Legends</h1>
        <input className="text-shadow mt-2" type="text" placeholder='Search Player!...'/>
    </div>
  )
}

export default Header
import React from 'react'
import "./navbar.css"
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Hotel Boking</span>
            <div className="navItems">
                <button className="navButton">Regiser</button>
                <button className="navButton">LogIn</button>
            </div>
        </div>

    </div>
  )
}

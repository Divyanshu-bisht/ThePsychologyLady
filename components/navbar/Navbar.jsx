import React from 'react'

import logo from "../../src/assets/logo.png"
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="imgcont"><img src={logo} /></div>
      

      <Link to={"/contactus"}><button className='navbtn cursor-hover'>Book a Consultation</button></Link>
    </nav>
  )
}

export default Navbar

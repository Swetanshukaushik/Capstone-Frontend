import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import speedDeilveryImg from './../assets/speedlogo.jpeg'


function NavBar() {
  return (
    <AppBar class="navbar">
      <img src={speedDeilveryImg} className="navbar-icon"/>
      <div className="navbar_options">
        <Link to="/">Home </Link>
        <Link to="/user">Users</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    
    </AppBar>
  )
}

export default NavBar
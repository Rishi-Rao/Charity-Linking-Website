import React from 'react'
import logo from "../logo.svg"
import { useNavigate } from 'react-router-dom'
import {logged} from './Signup'

export var log = true

const NavBar = () => {
    const navigate = useNavigate();
    const handleHome = ()=>{
        navigate("/");
    }
    const handleLogin = ()=>{

        navigate("/signup");
    }
    const handleDonate = ()=>{
        navigate("/donate");
    }
    const handleContact = ()=>{
        navigate("/contact-us");
    }
  return (
    <div>
    <table className="header">
      <thead className="header"><tr className="header">
        <th className="main-logo" ><img src={logo} onClick={handleHome}></img></th>
        <th className="header-buttons" onClick={handleHome}>Home</th>
        <th className="header-buttons" onClick={handleDonate}>Donate Now</th>
        <th className="header-buttons" onClick={handleContact}>Contact Us</th>
        <th className="header-buttons" onClick={logged?async()=>{log=false;await handleLogin();log=true}:()=>{log=true;handleLogin()}} >{logged && log?"Log Out":"Login"}</th>
      </tr></thead>
    </table>
  </div>
  )
}

export default NavBar
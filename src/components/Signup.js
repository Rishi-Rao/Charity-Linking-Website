import React, { useState } from 'react'
import user_icon from '../person.png'
import email_icon from '../email.png'
import password_icon from '../password.png'
import {log} from './NavBar'
const { useNavigate } = require("react-router-dom");

export var logged=false


const Signup = () => {
  
    const navigate=useNavigate();

    const [message,setMess]=useState('')
    const [action, setAction] = React.useState("Login")
    const [credentials,setCredentials] = useState({Name: "",Email:"",Password:""});

    const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name] : e.target.value});
      console.log(credentials)
    }

    if(!log)
    {
      logged=false
      //setMess("Logged Out")
    }
    const onClickHandler1 = async (e) => 
    {
      e.preventDefault();
      if(action === "Sign Up"){
        const res= await fetch("http://localhost:3001/api/auth/register",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body : JSON.stringify({Name:credentials.Name, Email:credentials.Email ,Password:credentials.Password})
        })
        .then(response => response.json())
        .then(data => {
          setMess(data.message);
        })
        .catch(error => {
          console.error('Fetch error:', error);})
      }
      else if(action === "Login"){
        const res = await fetch("http://localhost:3001/api/auth/login",{
          method:"POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({Email:credentials.Email,Password: credentials.Password})
        })
        .then(response => response.json())
        .then(data => {
          logged=data.logged;
          setMess(data.message);
          if(logged){navigate('/donate')}

        })
        .catch(error => {
          console.error('Fetch error:', error);})
    
      }
    }
  
    return(
      <form onSubmit={onClickHandler1}>
        <div className='container'>
            <div className="header-signup">
                <div className="text">{action}</div>
                <div className="underline"></div>  
            </div>
            <div className="inputs">
            <div className="log" display={logged?'':"None"}>{message}</div>
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input  required  type="text" name = "Name" onChange={onChange} placeholder="Name"/>
                </div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input  required type="email" name = "Email" onChange={onChange} placeholder="Email ID"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input required  type="password" name = "Password" onChange={onChange} placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            
  
            <div className="submit-container">
                <button  type={action === "Sign Up"?'submit':'button'} className={action==="Login"?"submit gray":"submit"} onClick={action==="Sign Up"?console.log():()=>{setAction("Sign Up")}}>Sign Up</button>
                <button  type={action === "Login"?'submit':'button'} className={action==="Sign Up"?"submit gray":"submit"} onClick={action==="Login"?console.log():()=>{setAction("Login")}}>Login</button>
            </div>
        </div>
      </form>
    )
}

export default Signup
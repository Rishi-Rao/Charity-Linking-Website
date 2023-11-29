import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {logged} from './Signup'

const Donate = () => {
  const navigate = useNavigate();

  const [log,setLog]=useState(logged)
  const [chars, setChars] = useState([]);


  var Handler = async (need) => {

    const res = await fetch("http://localhost:3001/api/chardet/charities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Need: need })
    })
      .then(response => response.json())
      .then(data => {
        setChars(data);
        chars = data
        console.log(chars[0].Address)
      })
      .catch(error => {
        console.error('Fetch error:', error);
      })
  }

  const HandleChardis = () => {
    navigate('/thank-you')
  }
if(log){
  return (
    <div className='donate_container' >
      <div className='Text'>
        What would you like to Donate?
      </div>
      <div>
        <div className='items'>
          <img className='icon' onClick={() => Handler("money")} src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fG1vbmV5fGVufDB8fHx8MTcwMDcwNTUxNHww&ixlib=rb-4.0.3&w=200" alt="" />
          <text className="family">Money</text>
        </div>
        <div className='items'>
          <img className='icon' onClick={() => Handler("clothes")} src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDcwNDM0M3w&ixlib=rb-4.0.3&q=80&w=400" alt="" />
          <text className="family">Clothes</text>
        </div>
        <div className='items'>
          <img className='icon' onClick={() => Handler("rations")} src="https://images.unsplash.com/photo-1514792368985-f80e9d482a02?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxncm9jZXJpZXN8ZW58MHx8fHwxNzAwNzA1NjI5fDA&ixlib=rb-4.0.3&w=200" alt="" />
          <text className="family">Rations</text>
        </div>
        <div className='items'>
          <img className='icon' onClick={() => Handler("stats")} src="https://images.unsplash.com/photo-1600926565634-ff972dfb33a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHN0YXRpb25hcmllc3xlbnwwfHx8fDE3MDA3MDU2MDJ8MA&ixlib=rb-4.0.3&q=80&w=200" alt="" />
          <text className="family">Stationaries</text>
        </div>
        <div className='items'>
          <img className='icon' onClick={() => { Handler("toil"); }} src="https://images.unsplash.com/photo-1622866027662-14e3c5ee67e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHRvaWxldHJpZXN8ZW58MHx8fHwxNzAwNzA1NTg2fDA&ixlib=rb-4.0.3&q=80&w=200" alt="" />
          <text className="family">Toiletries</text>
        </div>
        <div className='items'>
          <img className='icon' onClick={() => Handler("others")} src="https://images.unsplash.com/photo-1520288366719-b7df7237b0d1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG1pc2NlbGxhbmVvdXMlMjBnb29kc3xlbnwwfHx8fDE3MDA3MDU3MzZ8MA&ixlib=rb-4.0.3&w=200" alt="" />
          <text className="family">Others</text>
        </div>
        <div className='chardis_container'>
          {chars.map((obj) => (
            <div className='chardis'>
              <p className='donate_heading family'>{obj.Name}</p>
              <p className="family">Latitude: {obj.Address.Latitude} , Longitude: {obj.Address.Longitude}</p>
              <p className="family">Contact: {obj.Contact}</p>
              <button class="donate_button" onClick={HandleChardis}>Donate</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )}
  else
  {
    return<div className="Login_Donate_container">
      <p className="Login_Donate_text">Login in to make a donation</p>
      <button className="Login_donate_button" onClick={()=>navigate('/signup')}>Click to Login</button>
    </div>
  }
}

export default Donate;
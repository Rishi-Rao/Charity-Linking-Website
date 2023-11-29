"use client";

import { useState} from "react";
import {
  APIProvider,
  useJsApiLoader,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";


export default function Intro() {
  const position = { lat: 12.860434949257346 , lng:  77.66412545531551}; 
  return(
    <APIProvider apiKey="AIzaSyA1jh1vfQ6saAuf7HVHG1DEYnGJ0Bt86_Q"> 
    <div className="Contact_container">
      <div className="Address family">
        Address of office<br></br>
        Fax number<br></br>
        Reception NO.<br></br>
        IT NO.<br></br>
        Email ID<br></br>
      </div>
      <div className="Feedback family">
        We value your input, questions, and feedback. 
        Our commitment to transparency and open communication is at the heart of our mission to make a positive impact on the world. 
        We invite you to get in touch with us through the following means.
      </div>
    </div>
    <div style={{height:"50vh",width:"100%"}}>
      <Map zoom={9} center={position}></Map>
      <AdvancedMarker position={position}>
      </AdvancedMarker>
    </div>
      
    </APIProvider>
  )
}



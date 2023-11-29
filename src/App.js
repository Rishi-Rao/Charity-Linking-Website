import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Donate from './components/DonateNow';
import Contact from './components/Contact';
import Thank from './components/Thank';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path = "/signup" element = {<Signup/>}/>
        <Route exact path = "/donate" element = {<Donate/>}/>
        <Route exact path = "/contact-us" element = {<Contact/>}/>
        <Route exact path = "/thank-you" element = {<Thank/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

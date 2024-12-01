import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Pages/Homepage/Homepage'
import About from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import Login from './Components/Pages/Login/Login'
import Screenshots from './Components/Pages/Screenshots/Screenshots'
import Signup from './Components/Pages/Signup/Signup'
import Spreadsheet from './Components/Pages/Spreadsheet/Spreadsheet'
import Trades from './Components/Pages/Trades/Trades'
import Footer from './Components/Footer/Footer'

import {
  BrowserRouter as Router,
  /* Switch, */
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage></Homepage>}></Route> 
          <Route path="/about" element={<About />}></Route> 
          <Route path="/contact" element={<Contact />}></Route> 
          <Route path="/login" element={<Login />}></Route> 
          <Route path="/screenshots" element={<Screenshots />}></Route> 
          <Route path="/signup" element={<Signup />}></Route> 
          <Route path="/spreadsheet" element={<Spreadsheet />}></Route> 
          <Route path="/trades" element={<Trades />}></Route> 
        </Routes>
        <Footer />
      </Router>
    
  )    
}

export default App

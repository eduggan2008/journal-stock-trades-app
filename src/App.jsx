import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Pages/Homepage/Homepage'
import About from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import Login from './Components/Pages/Login/Login'
import Screenshots from './Components/Pages/Screenshots/Screenshots'
import Signup from './Components/Pages/Signup/Signup'
import {
  BrowserRouter as Router,
  /* Switch, */
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/Footer'
import Journal from './Components/Pages/Journal/Journal'
import TradesData from './Components/Pages/TradesData/TradesData'
import Record from './Components/Record/Record'
import Edit from './Components/Edit/Edit' 


const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage></Homepage>}></Route> 
          {/* <Route path="/journal" element={<Journal />}></Route>  */}
          <Route path="/tradesData" element={<TradesData />}></Route> 
          <Route path="/record" element={<Record />}></Route> 
          <Route path="/edit" element={<Edit />}></Route> 
          <Route path="/screenshots" element={<Screenshots />}></Route> 
          {/* <Route path="/signup" element={<Signup />}></Route> */} 
          {/* <Route path="/login" element={<Login />}></Route> */} 
          <Route path="/about" element={<About />}></Route> 
          <Route path="/contact" element={<Contact />}></Route> 
        </Routes>
        <Footer />
      </Router>
  )    
}

export default App

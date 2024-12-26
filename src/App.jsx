import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Pages/Homepage/Homepage'
import About from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import Login from './Components/Pages/Login/Login'
import Screenshots from './Components/Pages/Screenshots/Screenshots'
import Signup from './Components/Pages/Signup/Signup'
import Trades from './Components/Pages/TradesMaybe/Trades'
import {
  BrowserRouter as Router,
  /* Switch, */
  Routes,
  Route,
  Link
} from "react-router-dom";
import StickyHeadTable from './Components/Table/Table'
import ButtonUsage from './Components/Button/Button'
import Footer from './Components/Footer/Footer'
import Journal from './Components/Pages/Journal/Journal'
import Log from './Components/Pages/Log/Log'
import SampleJournal from './Components/Pages/SampleJournal/SampleJournal'

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage></Homepage>}></Route> 
          <Route path="/journal" element={<Journal />}></Route> 
          {/* <Route path="/samplejournal" element={<SampleJournal />}></Route> */} 
          <Route path="/log" element={<Log />}></Route> 
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

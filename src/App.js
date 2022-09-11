import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {Link} from 'react-router-dom'

import Topbar from './components/topbar/Topbar'
import Homepage from './components/pages/homepage/Homepage'
import Single from './components/pages/single/Single'
import Aboutpage from './components/pages/aboutpage/Aboutpage'
import Contactpage from './components/pages/contactpage/Contactpage'

import Test from './components/test/Test'

const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/contact" element={<Contactpage />} />
        <Route exact path="/single/:id" element={<Single />} />
        <Route exact path="/test" element={<Test id="2020-07-28-0" />} />
      </Routes>
    </Router>
  )
}

export default App

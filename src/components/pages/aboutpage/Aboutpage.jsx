import React from 'react'
import './aboutpage.css'
// import Sidebar from '../../sidebar/Sidebar'
import Header from './header/Header'
import About from './about/About' 
import Para from './para/Para'
import Footer from './footer/Footer'

const Aboutpage = () => {
  return (
    <div className='Aboutpage'>
      <Header />
      <About />
      <Para />
      <Footer />
    </div>
  )
}

export default Aboutpage

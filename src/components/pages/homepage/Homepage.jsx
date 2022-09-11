import React from 'react'
import './homepage.css'
import Header from './header/Header'
import Posts from './posts/Posts'
import Sidebar from '../../sidebar/Sidebar'

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Homepage

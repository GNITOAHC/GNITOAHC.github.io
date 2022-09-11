import React from 'react'
import './header.css'
import BlogHeaderIMG from '../../../../assets/Blog-header.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Build with React</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <img className="headerIMG" src={BlogHeaderIMG} alt='header'></img>
    </div>
  )
}

export default Header

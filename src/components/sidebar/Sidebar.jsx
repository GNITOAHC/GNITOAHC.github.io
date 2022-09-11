import React from 'react'
import './sidebar.css'
// import Avatar from '../../assets/avatar1.jpg'
import Me from '../../assets/Me2.jpg'
import { RiInstagramLine, RiMessengerLine } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT BLOG</span>
        <img className="sidebarIMG" src={Me} alt="avatar" />
        <p>
          Side project by{' '}
          <a
            href="https://github.com/GNITOAHC"
            target="_blank"
            rel="noreferrer"
          >
            GNITOAHC
          </a>{' '}
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATAGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarList-item">Life</li>
          <li className="sidebarList-item">Music</li>
          <li className="sidebarList-item">Style</li>
          <li className="sidebarList-item">Sport</li>
          <li className="sidebarList-item">Tech</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a
            className="sidebarSocial-icon"
            href="https://m.me/100004197396772"
            target="_blank"
            rel="noreferrer"
            children={<RiMessengerLine />}
          />
          <a
            className="sidebarSocial-icon"
            href="https://www.instagram.com/chaotingchen10/"
            target="_blank"
            rel="noreferrer"
            children={<RiInstagramLine />}
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar

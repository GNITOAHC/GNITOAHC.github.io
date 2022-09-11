import React from 'react'
import './topbar.css'
import { FiSearch } from 'react-icons/fi'
import { RiInstagramLine, RiMessengerLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <a
          className="topLeft-Icon"
          href="https://m.me/100004197396772"
          target="_blank"
          rel="noreferrer"
          children={<RiMessengerLine />}
        />
        <a
          className="topLeft-Icon"
          href="https://www.instagram.com/chaotingchen10/"
          target="_blank"
          rel="noreferrer"
          children={<RiInstagramLine />}
        />
      </div>
      <div className="topCenter">
        <ul className="topCenter-List">
          <li className="topCenter-ListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topCenter-ListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topCenter-ListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <FiSearch />
      </div>
    </div>
  )
}

export default Topbar

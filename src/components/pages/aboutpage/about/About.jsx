import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about">
      <section className="left-section">
        <h2 className="about-header">ABOUT</h2>
        <section className="about-inform">
          <h3 className="title">Chao Ting | 陳肇廷</h3>
          <li className="list">
            Born & Education
            <ul>2003 Born in Taipei</ul>
            <ul>2018-2020 Taipei Municipal Chien Kuo High School</ul>
            <ul>2020- National Chengchi University</ul>
          </li>
        </section>
        <section className="about-skill">
          <h3 className="title">Skill Sets</h3>
          <li className="list">
            Programming Language
            <ul>C/C++</ul>
            <ul>Python</ul>
            <ul>HTML/Js/Css</ul>
          </li>
          <li className="list">
            Frameworks
            <ul>React</ul>
            <ul>Flutter</ul>
          </li>
        </section>
      </section>
      <section className="right-section" />
    </div>
  )
}

export default About

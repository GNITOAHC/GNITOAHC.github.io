import React from 'react'
import './contactpage.css'
// import Contact from './contact/Contact'
// import Sidebar from '../../sidebar/Sidebar'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contactpage = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_qxr22w4',
        'template_nirk9ur',
        form.current,
        '3ZpHw3bhzBhVo7WvQ'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div className="contact">
      <span className="contact_title">Contact me</span>
      <form className="contact_form" ref={form} onSubmit={sendEmail}>
        <article className="contact_article contact_article_left">
          <label className="contact_label">
            Name
            <br />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
          </label>
          <label className="contact_label">
            Email
            <br />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </label>
        </article>
        <article className="contact_article contact_article_right">
          <label className="contact_label">
            Message
            <br />
            <textarea
              name="message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
          </label>
          <div className='btn_div'>
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </article>
      </form>
    </div>
  )
}

export default Contactpage

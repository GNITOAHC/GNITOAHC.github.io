import React from 'react'
import './contact.css'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
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
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="7"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact

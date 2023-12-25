import React, { useContext } from 'react'
import '../../components scss/contact.scss'

import { useState } from 'react'

import emailjs from '@emailjs/browser'
import { DarkModeContext } from '../../context'

import Footer from '../../components/Footer/Footer'

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [alert, setAlert] = useState('');

  const templateParams = {

    from_name: name,
    message: message,
    email: email

  }

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){

      setAlert("Fill in all fields")
      setInterval(() => {
        setAlert(null)
      }, 3000)
      return;
  
    }

    emailjs.send("service_e955emr", "template_ndl4d3t", templateParams, "mOvaDUjmYygM0iMsp")
    .then((response) => {
      console.log("Email Enviado", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')

    }, (error) => {
      console.log("Error: ", error)
    })

  }

  const [darkMode] = useContext(DarkModeContext);


  return (
    <div className='container' style={{backgroundColor: darkMode ? '#fff' : '#1a1a1a', transition: '.5s'}}>

      <div className="contact-main">

        <div className="contact-span"> <h1 style={{ color: darkMode ? '#000' : '#fff' }}> CONTACT </h1> </div>

        <form action="form" className='form-main' onSubmit={sendEmail}>

          <div className="nome"> <input type="text" placeholder='Your Name...' value={name} onChange={(e) => setName(e.target.value)} required name="name" id="" /> </div>

          <div className="email"> <input type="email" placeholder='Your Email...' value={email} onChange={(e) => setEmail(e.target.value)} required name="email" id="" /> </div>

          <div className="text-area"> <textarea name="text-area" placeholder='Your Message...' value={message} onChange={(e) => setMessage(e.target.value)} required id="" cols="30" rows="10"></textarea> </div>

        <div className="alert-container"> <span> {alert} </span> </div>
        <div className="button-submit"> <input type="submit" value="Send" /> </div>
        </form>

      </div>

      <Footer />

    </div>

  )
}

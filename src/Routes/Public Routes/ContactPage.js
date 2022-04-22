import React from 'react'
import { BiMailSend } from "react-icons/bi";
export const ContactPage = () => {
  return (
    <div className=" mt-5 hero min-h-screen" style={{"backgroundImage": "url(https://i.imgur.com/uaIYkOw.jpg)"}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Contact</h1>
        <p className="mb-5">For any queries not answered in the FAQ please get in touch via email.</p>
        <a class="link link-primary" href='mailto:b00370299@studentmail.uws.ac.uk'>Email us here. <BiMailSend className='text-3xl inline'/></a>
      
      </div>
    </div>
  </div>
  )
}

import React, { useEffect } from "react";
import logo from './logo.png'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'
import discord from './discord.svg'
import youtube from './youtube.svg'

import "./ComingSoon.css";

export const ComingSoon = () => {

  useEffect(() => {
    document.title = "DCCNITA"
  }, [])
  return (
    <div className='coming-soon' >
      <div className='content-wrapper'>
        <img src={logo} alt='' />
        <span>Developers & Coders Club</span>
        <span>Coming Soon</span>
        <span>In the meantime subscribe to our social</span>
        <span>media handles to stay up to date</span>
      </div>
      <div className='social-wrapper'>
        <a href='https://www.instagram.com/dccnita/' target="_blank"><img src={instagram} alt='' /></a>
        <a href='https://twitter.com/dccnita' target="_blank"><img src={twitter} alt='' /></a>
        <a href='https://www.linkedin.com/company/dccnita/' target="_blank"><img src={linkedin} alt='' /></a>
        <a href='https://discord.gg/58qJhGtTaa' target="_blank"><img src={discord} alt='' /></a>
        <a href='https://www.youtube.com/@DCCNITA' target="_blank"><img src={youtube} alt='' /></a>
      </div>
    </div>
  )
};

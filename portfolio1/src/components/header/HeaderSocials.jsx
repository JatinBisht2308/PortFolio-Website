import React from 'react'
import {BsLinkedin,BsYoutube} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/jatin-bisht-ba62111bb/" target="_blank"><BsLinkedin/></a>
      </div>
      <div className="header__socials">
          <a href="https://github.com/JatinBisht2308" target="_blank"><FaGithub/></a>
      </div>
      <div className="header__socials">
          <a href="https://www.youtube.com/channel/UCGiZyF5cM8BlDv0pia4ZBPA" target="_blank"><BsYoutube/></a>
      </div>
    </div>
  )
}

export default HeaderSocials

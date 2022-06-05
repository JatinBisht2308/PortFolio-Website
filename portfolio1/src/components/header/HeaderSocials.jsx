import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiYoutube} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/jatin-bisht-ba62111bb/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/JatinBisht2308" target="_blank"><FaGithub/></a>
          <a href="https://www.youtube.com/channel/UCGiZyF5cM8BlDv0pia4ZBPA" target="_blank"><FiYoutube/></a>
    </div>
  )
}

export default HeaderSocials

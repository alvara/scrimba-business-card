import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profile from '../assets/profile.png'

export default function Title() {
  return (
    <nav>
      <img src={profile} alt="profile"/>
      <h1>Jesse Alvarado</h1>
      <h3>Frontend Developer</h3>
      <p>Frontend Developer</p>

      <a className='btn'><FontAwesomeIcon icon={faEnvelope} />Email</a>
      <a className='btn btn-primary'><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
    </nav>
  )
}

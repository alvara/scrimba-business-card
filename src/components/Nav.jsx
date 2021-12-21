import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Nav() {
  return (
    <nav>
      <h1>Jesse Alvarado</h1>
      <div className='subtitle'>Frontend Developer</div>
      <p>jessealvarado.com</p>

      <a className='btn'><FontAwesomeIcon icon={faEnvelope} />Email</a>
      <a className='btn btn-primary'><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
    </nav>
  )
}

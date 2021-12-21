import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <FontAwesomeIcon className='icon' icon={faTwitterSquare} />
      <FontAwesomeIcon className='icon' icon={faFacebookSquare} />
      <FontAwesomeIcon className='icon' icon={faInstagramSquare} />
      <FontAwesomeIcon className='icon' icon={faGithubSquare} />
    </footer>
  )
}

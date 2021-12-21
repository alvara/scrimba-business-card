import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faGithub} />
    </footer>
  )
}

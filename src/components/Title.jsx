import React from 'react'
import profile from '../assets/profile.png'

export default function Title() {
  return (
    <nav>
      <img src={profile} alt="profile"/>
      <h1>Jesse Alvarado</h1>
      <h3>Frontend Developer</h3>
      <p>Frontend Developer</p>
    </nav>
  )
}

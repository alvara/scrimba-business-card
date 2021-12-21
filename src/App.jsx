import React from 'react'
import Nav from './components/Nav'
import Content from './components/Content'
import Footer from './components/Footer'
import profile from './assets/profile.png'

export default function App() {
  return (
    <div className='app'>
      <img src={profile} alt="profile" className='profile'/>

      <div className='container'>
        <Nav />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

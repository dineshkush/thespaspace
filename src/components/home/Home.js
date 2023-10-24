import React from 'react'
import HomeBanner from '../shared/home-banner/HomeBanner'
import About from '../about/About'
import Services from '../services/Services'
import Gallery from '../gallery/Gallery'
import Contact from '../contact/Contact'

function Home({phone, email, address}) { 

  return (
    <div>
      <HomeBanner />
      <About />
      <Services />
      <Gallery />
      <Contact phone={phone} email={email} address={address} />
    </div>
  )
}

export default Home

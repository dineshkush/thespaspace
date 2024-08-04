import React from 'react'
import HomeBanner from '../shared/home-banner/HomeBanner'
import About from '../about/About'
import Services from '../services/Services'
import Gallery from '../gallery/Gallery'
import Contact from '../contact/Contact'
import Testimonials from '../testimonials/Testimonials'

function Home({phone, email, address, addressLink, addressSecond, addressSecondLink, addressThird, addressThirdLink, addressForth, addressForthLink}) { 

  return (
    <div>
      <HomeBanner />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact phone={phone} email={email} address={address} addressLink={addressLink} addressSecond={addressSecond} addressSecondLink={addressSecondLink} addressThird={addressThird} addressThirdLink={addressThirdLink} addressForth={addressForth} addressForthLink={addressForthLink} />
    </div>
  )
}

export default Home

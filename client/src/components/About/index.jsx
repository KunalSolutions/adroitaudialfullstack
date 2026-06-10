import React from 'react'
import Testimonial from './Testimonial'
import CTA from './CTA'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import CompanyValues from './CompanyValues'

const About = () => {
  return (
    <div>
      <>
      <AboutSection />
      <CompanyValues />
      <ServiceSection />
        {/* <Testimonial /> */}
        {/* <CTA /> */}
      </>
    </div>
  )
}

export default About
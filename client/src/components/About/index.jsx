import React from 'react'
import Testimonial from './Testimonial'
import CTA from './CTA'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import CompanyValues from './CompanyValues'
import FAQ from '@components/FAQ'
import Team from './Team'

const About = () => {
  return (
    <div>
      <>
      <AboutSection />
      <CompanyValues />
      {/* <Team /> */}
      <FAQ />
      {/* <ServiceSection /> */}
        {/* <Testimonial /> */}
        {/* <CTA /> */}
      </>
    </div>
  )
}

export default About
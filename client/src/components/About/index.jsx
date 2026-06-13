import React from 'react'
import Testimonial from './Testimonial'
import CTA from './CTA'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import CompanyValues from './CompanyValues'
import FAQ from '@components/FAQ'

const About = () => {
  return (
    <div>
      <>
      <AboutSection />
      <CompanyValues />
      <FAQ />
      {/* <ServiceSection /> */}
        {/* <Testimonial /> */}
        {/* <CTA /> */}
      </>
    </div>
  )
}

export default About
import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='jpt__footer section__padding'>
      <div className='jpt__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='jpt__footer-btn'>
        <button type='button'>Request Early Access</button>
      </div>

      <div className='jpt__footer-links'>
        <div className='jpt__footer-links_logo'>
          <img src={logo} alt="logo" />
          <p>M7PJ+9RW, Kathmandu 44618</p>
        </div>
        <div className='jpt__footer-links_text'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='jpt__footer-links_text'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='jpt__footer-links_text'>
          <h4>Get in touch</h4>
          <p>M7PJ+9RW, Kathmandu 44618</p>
          <p>+977 9860300580</p>
        </div>
      </div>
      <div className='jpt__footer-copyright'>
        <p>© 2023 JPT. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
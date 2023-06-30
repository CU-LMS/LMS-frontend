import React from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer py-2'>
      <div className="container">
        <Link className='footer-link'>
          <BsGlobe2 className="footer-icon" />
          <span>IN</span>
        </Link>
      </div>
    </div>
  )
}

export default Footer
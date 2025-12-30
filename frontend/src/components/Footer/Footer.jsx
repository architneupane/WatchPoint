import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="copyright">
          <span> &copy; 2025  WatchPoint  Production</span>
        </div>

        <div className="policy">
          <ul className="policy-list">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
    </div>
  )
}

export default Footer
import React from 'react';
import header_img from '../Images_Icons/Icon/undraw_dev_productivity_umsq.png'
function Header() {
  return (
    <div className='header'>
      <div className='item'>
          <h3 className='heading'>The Developer Repository</h3>
      </div>
      <div className='item'>
          <img src={header_img} alt="Developer Profile" />
      </div>
    </div>
  )
}

export default Header
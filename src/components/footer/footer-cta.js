import React, { useRef } from 'react';

const FooterCTA = ({className}) =>  {

  return (
    <div className='footer-cta'>
        <div className='container'>
            <div className='row'>
                <div className='row-item col-md-4'>
                <h2 className='footer-cta-heading'>Location</h2>
                <p>123 Kelowna Blvd. <br/> Kelowna BC, V1V 1V1</p>
            </div>
            <div className='row-item col-md-4'>
                <h2 className='footer-cta-heading'>Hours</h2>
                <p>Monday-Friday <br/>9:00am - 4:00pm</p>
            </div>
            <div className='row-item col-md-4'>
                <h2 className='footer-cta-heading'>Contact</h2>
                <p>jaddabboud@icloud.com <br/> 604-446-7154</p>
            </div></div>
        </div>
   </div>
  )
}

export default FooterCTA;


import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';

const MobileMenu = (props) => {

  return (
    <Menu {...props}>
      <ul className="mmenu--list">
      
        <li className='mmenu--list__item'>
          <Link to='/about'>About</Link>
        </li>
        
        <li className='mmenu--list__item'>
          <Link href='/store'>Store</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/contact-us">Contact Us</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/tour">Tour</Link>
        </li>

        <li className='mmenu--list__item'>
          <a className="btn btn-primary" href="/jane-app">Book an appointment</a>
        </li>
      </ul>
    </Menu>
  );
};

export default MobileMenu;
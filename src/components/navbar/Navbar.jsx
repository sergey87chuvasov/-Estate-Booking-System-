import './Navbar.scss';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className='left'>
        <a className='logo' href='/'>
          <img src='/logo.png' alt='logo' />
          <span>Estate App</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        <a href='/'>Sign In</a>
        <a className='register' href='/'>
          Sign Up
        </a>
        <div className='menuIcon'>
          <img
            src='/menu.png'
            alt='burger'
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign In</a>
          <a href='/'>Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

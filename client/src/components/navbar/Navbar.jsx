import './Navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = false;
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
        {user ? (
          <div className='user'>
            <img
              src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='user'
            />
            <span>Jhon Doe</span>
            <Link className='profile' to='/profile'>
              <div className='notification'>3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href='/'>Sign In</a>
            <a className='register' href='/'>
              Sign Up
            </a>
          </>
        )}

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

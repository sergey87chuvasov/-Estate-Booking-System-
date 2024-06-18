import './Navbar.scss';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContect';

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

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
        {currentUser ? (
          <div className='user'>
            <img src={currentUser.avatar || '/noavatar.jpg'} alt='user' />
            <span>{currentUser.username}</span>
            <Link className='profile' to='/profile'>
              <div className='notification'>3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href='/login'>Sign In</a>
            <a className='register' href='/register'>
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

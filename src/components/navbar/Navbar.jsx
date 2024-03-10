import './Navbar.scss';

function Navbar() {
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
      </div>
    </nav>
  );
}

export default Navbar;

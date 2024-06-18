import './layout.scss';
import Navbar from '../../components/navbar/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContect';

function Layout() {
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to='/login' />;
  }

  return (
    currentUser && (
      <div className='layout'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    )
  );
}

export { Layout, RequireAuth };

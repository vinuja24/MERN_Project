

import React from 'react';
import './Navbar.css';
import { useAuth } from './AuthContext'; 
import { Link ,useNavigate} from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // update auth state
    navigate('/');     // redirect to home
  };
  return (
    <nav className="navbar">
      <div className="logo-text">Fashion World</div> 

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {isAuthenticated ? (
          <>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/signup">Sign-Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

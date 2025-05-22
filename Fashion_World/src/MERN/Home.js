import React from 'react';
import './Home.css';
import cloth from './assets/cloth.webp'; 
import cloth1 from './assets/cloth1.jpg';
import Footer from './Footer';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // ✅ import auth hook

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // ✅ get auth status

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/products');
    } else {
      alert('Please login to access products.');
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Fashion World</h1>
        <p className="subtitle">Online Shop</p>
        <p className="description">
          "Fashion is more than clothes you wear. It's an expression of who you are. Wear it with confidence and grace."
        </p>
        <div className="button-group">
          <button className="shop-btn" onClick={handleClick}>Shop Now</button>
        </div>
      </div>
      <div className="home-images">
        <img src={cloth} alt="Fashion" />
        <img src={cloth1} alt="Fashion"/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

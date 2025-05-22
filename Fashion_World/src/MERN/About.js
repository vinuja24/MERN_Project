import React from 'react';
import './About.css'; 
import cloth2 from './assets/cloth2.webp';
import cloth3 from './assets/cloth3.webp';
import Footer from './Footer';
import './Footer.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Fashion World</h2>
        <p>
          Welcome to Fashion World – where elegance meets comfort.
          We bring you the latest trends in clothing, curated with love and crafted with care.
        </p>
        <p>
          From everyday casuals to premium party wear, our collection celebrates every mood, every moment.
          Discover the perfect outfit that reflects your unique style.
        </p>
        <p>
          Because at Fashion World, fashion isn’t just about clothes – it’s about confidence, expression, and you.
        </p>
      </div>

      <div className="about-image">
        <img src={cloth2} alt="Fashion 1" />
        <img src={cloth3} alt="Fashion 2" />
      </div>
      <Footer/>
    </div>
  );
};

export default About;

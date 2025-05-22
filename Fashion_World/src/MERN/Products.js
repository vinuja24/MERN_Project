import React from "react";
import "./Products.css";
import net from './assets/net.webp';
import cotton from './assets/cotton.webp';
import Footer from "./Footer";
import silk from "./assets/silk.jpg";
import './Footer.css';

const products = [
  {
    id: 1,
    name: "Saree",
    price: "₹999",
    material: "Net",
    image: net
  },
  {
    id: 2,
    name: "Saree",
    price: "₹1200",
    material: "100% Cotton",
    image:  cotton
  },
  {
    id: 3,
    name: "Saree",
    price: "₹1299",
    material: "Silk",
    image: silk
  }
];

const Products = () => {
  return (
    <div className="product-container">
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p><strong>Price:</strong> {item.price}</p>
          <p><strong>Material:</strong> {item.material}</p>
          <div className="product-buttons">
            <button className="buy-btn">Buy</button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        
        </div>
      ))}
        <p>"Let’s collect your favorite clothes and celebrate your unique style.
Fashion is not just about trends — it’s about expressing who you are.
Every outfit tells your story, stitched with confidence and grace.
Step into a world where comfort meets elegance, just for you."</p>
      <Footer/>
    </div>
  );
};

export default Products;

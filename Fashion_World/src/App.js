import './App.css';
import Forms from './MERN/Forms';
import Navbar from './MERN/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './MERN/Home';
import About from './MERN/About';
import Products from './MERN/Products';
import Signin from './MERN/Signin';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar /> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/signup" element={<Forms />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
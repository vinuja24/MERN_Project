
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../MERN/Forms.css';
import { useAuth } from './AuthContext';

export default function Signin() {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const { login } = useAuth();  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', form);
      alert(res.data.message);

      if (res.data.message === 'Login successful') {
        login();         
        navigate('/');  
      }
    } catch (err) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='container'>
      <div className='form-box'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type='submit'>Submit</button>
          <p>Don't have an account? <Link to="/Signup">Sign-up</Link></p>
        </form>
      </div>
    </div>
  );
}

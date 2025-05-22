// import {useState} from 'react';
// import '../MERN/Forms.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// function Forms(){
//     const [form,setForm]=useState({
//      username:'',
//      email:'',
//      password:''
//     });
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const res = await axios.post('http://localhost:5000/register', form);
//           alert(res.data.message);
//         } catch (err) {
//           alert('Error in submitting form');
//         }
//       };
//     return(
//         <div className='container'>
//             <div className='form-box'>
//               <h1>Sign Up</h1>
//                 <form onSubmit={handleSubmit}>
//                     <input type='text' placeholder='Username' onChange={(e)=>setForm({...form,username:e.target.value})}/>
//                     <input type='email' placeholder='Email' onChange={(e)=>setForm({...form,email:e.target.value})}/>
//                     <input type='password' placeholder='Password' onChange={(e)=>setForm({...form,password:e.target.value})}/>
//                     <button type='submit'>Submit</button>
//                     <p> Already have an account? <Link to="/Signin">Sign-in</Link></p>
//                 </form>

//             </div>
           
//         </div>
//     )
// }
// export default Forms;

import { useState } from 'react';
import '../MERN/Forms.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Forms() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/register', form);
      alert(res.data.message);
      if (res.data.message === 'data saved') {
        navigate('/Signin');
      }
    } catch (err) {
      alert('Error in submitting form');
    }
  };

  return (
    <div className='container'>
      <div className='form-box'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Username' onChange={(e) => setForm({ ...form, username: e.target.value })} required />
          <input type='email' placeholder='Email' onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input type='password' placeholder='Password' onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <button type='submit'>Submit</button>
          <p> Already have an account? <Link to="/Signin">Sign-in</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Forms;

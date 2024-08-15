import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication
    if (email === 'admin@tbm.com' && password === 'Admin@123') {
      onLogin(); // Notify App component of successful login
      navigate('/'); // Redirect to home page
    } else {
      alert('Invalid credentials');
    }
  };
 
  return (
    <div className='main-div' style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     
      <h3 className='login-text'>Login</h3>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }} className='login-form'>
        
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Email'
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter Password'
          required
        />
        <button type="submit" style={{ marginTop: '10px' }}>Login</button>
      </form>
    </div>
  );
};


export default Login;

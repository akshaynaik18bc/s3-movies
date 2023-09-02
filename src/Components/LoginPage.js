import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
// Function to calculate MD5 hash
const calculateMD5 = (inputString) => {
    const md5Hash = CryptoJS.MD5(inputString).toString(CryptoJS.enc.Hex);
    return md5Hash;
  };
 
const LoginPage = () => {
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    if (calculateMD5(password) === '01fee2e8d4193db70d01840ddb33f029') {
      // Set the token in local storage
      localStorage.setItem('token', 'your_secret_token_here');
      
      // Redirect to a protected route (e.g., Dashboard)
      window.location.href = '/movies';
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

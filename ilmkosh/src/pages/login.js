import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers, validateUser } from './utils/authUtils'; // Corrected path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const users = await fetchUsers();
      const user = validateUser(email, password, users);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Error logging in. Please try again.');
    }
  };

  return (
    <>
      <div className="login-container" style={{ background: "url(background.jpg)", backgroundSize: "cover" }}>
        <style>
          {`
            .form-container {
              margin-top: 0px;
              width: 300px;
              margin: 0 auto;
              padding: 20px;
              border-radius: 25px;
              box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
              background-color: #867A6B;
            }

            .login-form {
              display: flex;
              flex-direction: column;
            }

            .main img {
              width: 200px;
              height: auto;
              padding: 0px;
              margin-top: 0px;
            }

            .login-form label {
              margin-bottom: 5px;
            }

            #name,
            #email,
            #password,
            #confirm-password {
              margin-top: -20px;
            }

            .login-form input[type="email"],
            .login-form input[type="password"] {
              margin-bottom: -10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
            }

            .login-form input[type="checkbox"] {
              margin-right: 10px;
            }

            .logo {
              width: 10%;
              border-radius: 50%;
              height: 10%;
            }

            .logo img {
              width: 100%;
              height: 100%;
              padding: 0px;
              margin-top: 0px;
            }

            .login-form button[type="submit"] {
              padding: 10px 10px;
              border: none;
              border-radius: 5px;
              background-image: linear-gradient(to right, #332620, #C0B69D);
              color: #fff;
              cursor: pointer;
            }

            .login-form button[type="submit"]:hover {
              background-color: #C0B69D;
              transition: 0.3s ease;
            }

            .login-form button[type="submit"]:not(:hover) {
              transition: 0.5s ease;
            }

            .login-form a {
              color: #007bff;
              text-decoration: none;
              margin-top: 10px;
              display: block;
            }

            .login-form a:hover {
              text-decoration: underline;
            }

            .login-form p {
              margin-top: 10px;
              text-align: center;
            }

            .separator {
              width: 250px;
              height: 4px;
              background-color: #C2B99C;
              margin: 24px;
            }

            .heading {
              color: #C0B69D;
              font-family: "Italianno", cursive;
            }

            .italianno-regular {
              font-family: "Italianno", cursive;
              font-weight: 400;
              font-style: normal;
            }
          `}
        </style>
       
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '300px', margin: '0 auto', padding: '0px' }}>
            <div className="main">
              <img src="ilm.png" alt="Logo" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="email">Enter email</label><br />
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            /><br />
            <label htmlFor="password">Password</label><br />
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            /><br />
            <label htmlFor="remember-me">
              <input type="checkbox" id="remember-me" name="remember-me" /> Remember me
            </label><br />
            <button type="submit">Login</button><br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <a href="/forgot.html" style={{ color: ' #332620' }}>Forgot Password?</a><br />
            <p>Don't have an account?
              <Link to="/register" style={{ color: ' #332620' }}> Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

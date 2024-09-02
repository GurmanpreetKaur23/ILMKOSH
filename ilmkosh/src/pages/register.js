import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Register() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    fetch('/api/users', {  // Endpoint for user registration
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirm-password'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {  // Assuming your backend sends a success flag on successful registration
          navigate('/login'); // Redirect to the login page
        } else {
          // Handle errors (e.g., show error messages to the user)
          alert(data.message || 'Registration failed. Please try again.');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div style={{ background: "url(background.jpg)", backgroundSize: "cover" }}>
      <style>
        {`
        .form-container {
            margin-top: 0px;
            width: 300px;
            margin: 0 auto; 
            padding: 20px;
            border-radius: 25px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
            background-color: #9b8a69;
          }
        .logo {
          width: 10%;
          height: 10%;
        }
        .logo img {
          width: 100%;
          height: 100%;
          padding: 0px;
          margin-top: 0px;
        }
        .register-form {
          display: flex;
          flex-direction: column;
        }
        .register-form label {
          margin-bottom: 5px;
        }
        #name, #email, #password, #confirm-password {
          margin-top: -20px;
        }
        .register-form input[type="text"],
        .register-form input[type="email"],
        .register-form input[type="password"] {
          margin-bottom: 0px;
          padding: 10px;
          border: 0.5px solid ##513A34;
          border-radius: 10px;
          background-color: #ede5d7;
          // text-align: center ;
          
        }
        .register-form button[type="submit"] {
          padding: 10px 10px;
          border: ##513A34;
          border-radius: 2px;
          background-image: linear-gradient(to right, #EDE5D7 , #9B8A69);
          color: #543B34;
          cursor: pointer;
          font-weight:600 ;
        }
        .register-form p {
          margin-top: 10px;
          text-align: center;
        }
        .separator {
          width: 250px;
          height: 4px;
          background-color: #C2B99C;
          margin: 24px;
        }
        .main img {
          width: 300px;
          height: auto;
          padding: 0px;
          margin-top: 0px;
        }
        `}
      </style>

      {/* <div className="logo">
        <img src="ilm.png" alt="" />
      </div> */}

      <div style={{ textAlign: "center" }}>
        <div style={{ width: "300px", margin: "0 auto", padding: "0px" }}>
          <div className="main">
            <img src="ilm.png" alt="" />
          </div>
        </div>
      </div>

      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" placeholder="Enter your Name" id="name" name="name" required />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" placeholder="Enter your Email" id="email" name="email" required />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" placeholder="Enter a Password" id="password" name="password" required />
          <br />
          <label htmlFor="confirm-password">Confirm Password</label>
          <br />
          <input type="password" placeholder="Confirm Password" id="confirm-password" name="confirm-password" required/>
          <br />
          <button type="submit">Register</button>
          <br />
          <p>
            Already have an account? <a href="login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

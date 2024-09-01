import React from "react";

function Register() {
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
            background-color: #867A6B;
            tranparency: 0.5;
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
        #name {
          margin-top: -20px;
        }
        #email {
          margin-top: -20px;
        }
        #password {
          margin-top: -20px;
        }
        #confirm-password {
          margin-top: -20px;
        }
        .register-form input[type="text"],
        .register-form input[type="email"],
        .register-form input[type="password"] {
          margin-bottom: 0px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
          .register-form button[type="submit"] {
            padding: 10px 10px;
            border: none;
            border-radius: 5px;
            background-image: linear-gradient(to right, #332620, #C0B69D);
            color: #fff;
            cursor: pointer;
          }
            
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

      <div className="logo">
        <img src="ilm.png" alt="" />
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ width: "300px", margin: "0 auto", padding: "0px" }}>
          <div className="main">
          <img src="ilm.png" alt="" />
          </div>
        </div>
      </div>

      <div className="form-container">
        <form className="register-form" method="post" action="/register">
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
          <input type="password" placeholder="Confirm Password" id="confirm-password"name="confirm-password" required/>
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
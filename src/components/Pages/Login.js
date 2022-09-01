import React, { useState } from "react";
import { Link } from "react-router-dom";
import caution from "../images/caution.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    document.getElementById("error").style.display = "flex";
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
          alt=""
        />
      </Link>
      <div className="error-message" id="error">
        <img src={caution} alt="" className="caution-sign" />
        <div>
          <p className="text-1">There was a problem</p>
          <p className="text-2">Your login credentials are incorrect</p>
        </div>
      </div>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            onClick={signIn}
            className="login-sign-in-button"
          >
            Continue
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and out Interset-Based Ads
          Notice.
        </p>
        <div>
          <center>New to amazon?</center>
        </div>
        <Link to="/register" className="login-register-link">
          <div>Create your Amazon Account</div>
        </Link>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import caution from "../images/caution.png";
import "./Login.css";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    document.querySelector("#error").style.display = "flex";
  };

  return (
    <div className="register">
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
          <p className="text-1">Error</p>
          <p className="text-2">There was a problem processing your</p>
          <p className="text-2">request, Please try again later.</p>
        </div>
      </div>
      <div className="login-container">
        <h1>Create Account</h1>
        <form action="">
          <h5>Your name</h5>
          <input
            type="text"
            value={name}
            placeholder="First and last name"
            onChange={(e) => setName(e.target.value)}
          />

          <h5>Mobile number</h5>
          <div className="mobile-number">
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <h5>Email (optional)</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>
              <span></span>
              Passwords must be at least 6 characters.
            </p>
          </div>

          <p>
            We will send you a text to verify your phone. Message and Data rates
            may apply.
          </p>
          <button
            type="submit"
            onClick={signIn}
            className="login-sign-in-button"
          >
            Continue
          </button>
        </form>
        <hr />
        <p>
          Already have an account?
          <span>
            <Link to="/login" className="link-products">
              Sign in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterUser;

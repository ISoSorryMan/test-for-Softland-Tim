import React from 'react';
import {NavLink } from "react-router-dom";
import '../css/App.css';

export default function Register() {

  return (
    <div className="login-page">
      <div className='form'>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>login</button>
        <p className="message">
          Not registered? <NavLink to="/register" className="nav-link">Create an account</NavLink>
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/App.css';

export default function Register() {

  return (
    <div className="login-page">
      <div className='form'>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Email Address" />
        <button>Create</button>
        <p className="message">
          Already registered? <NavLink to="/login" className="nav-link">Sign In</NavLink>
        </p>
      </div>
    </div>
  );
}

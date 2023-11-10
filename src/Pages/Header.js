import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import '../css/App.css'

import Home from './Home';
import Generator from './Generator';
import Partnership from './Partnership';
import Offer from './Offer';
import Reviews from './Reviews';
import Blog from './Blog';
import Contacts from './Contacts';
import Login from './Login';
import Register from './Register';
import Faq from './Faq';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: window.innerWidth >= 992,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  handleResize = () => {
    this.setState({ isMenuOpen: window.innerWidth >= 992 });
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    const menuClassName = this.state.isMenuOpen ? 'menu opened' : 'menu';

    return (
      <BrowserRouter>
        <div>
          <header>
            <div className="container">
              <div className='nav'>
                <NavLink className='img' to="/"><img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/84_Dev-256.png" alt="" /></NavLink>
                <button className={menuClassName} onClick={this.toggleMenu} aria-label="Main Menu">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                  </svg>
                </button>
                {this.state.isMenuOpen && (
                  <div className="nav">
                    <NavLink to="/" className="nav-link" onClick={this.closeMenu}>
                      General
                    </NavLink>
                    <NavLink to="/generator" className="nav-link" onClick={this.closeMenu}>
                      Generator
                    </NavLink>
                    <NavLink to="/partnership" className="nav-link" onClick={this.closeMenu}>
                      Partnership
                    </NavLink>
                    <NavLink to="/offer" className="nav-link" onClick={this.closeMenu}>
                      Offer
                    </NavLink>
                    <NavLink to="/reviews" className="nav-link" onClick={this.closeMenu}>
                      Reviews
                    </NavLink>
                    <NavLink to="/blog" className="nav-link" onClick={this.closeMenu}>
                      Blog
                    </NavLink>
                    <NavLink to="/contacts" className="nav-link" onClick={this.closeMenu}>
                      Contacts
                    </NavLink>
                  </div>
                )}
              </div>
              <div className='reg'>
                <NavLink to="/login" className='Auth log' onClick={this.closeMenu}>
                  Login
                </NavLink>
                <NavLink to="/register" className='Auth' onClick={this.closeMenu}>
                  Register
                </NavLink>
              </div>
            </div>
          </header>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/generator" element={<Generator />} />
            <Route exact path="/partnership" element={<Partnership />} />
            <Route exact path="/offer" element={<Offer />} />
            <Route exact path="/reviews" element={<Reviews />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/faq" element={<Faq />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

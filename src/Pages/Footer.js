import React, { Component } from 'react'
import '../css/App.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <nav className="header-new footer-menu">
          <ul className="menu-perf">
            <li className="header-new-menu-item">
              <a href="/" >Linkedin</a>
            </li>
            <li className="header-new-menu-item">
              <a href="/"  >Djinni</a>
            </li>
            <li className="header-new-menu-item">
              <a href="/" >YouTube</a>
            </li>
            <li className="header-new-menu-item">
              <a href="/">Telegram</a>
            </li>
            <li className="header-new-menu-item">
              <a href="/">DOU</a>
            </li>
          </ul>
          <span>© All rights reserved 2023</span>
          <ul className="menu-perf" >
            <li className="header-new-menu-item">
              <a href="/faq">FAQ</a>
            </li>
            <li className="header-new-menu-item">
              <a href="/contacts">Contact Us</a>
            </li>
            <li className="header-new-menu-item">
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

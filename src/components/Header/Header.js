import React from 'react'
import { NavLink } from 'react-router-dom'

const logo = require('./images/logo.svg')

const Header = ({ className }) => (
  <header className={className}>
    <div className="Header__logo">
      <img
        alt="logo"
        className="Header__logoImage"
        src={logo}
      />

      Memory game
    </div>

    <NavLink to="/menu" className="backToMenuLink">
      Back to main menu
    </NavLink>
  </header>
)

export default Header

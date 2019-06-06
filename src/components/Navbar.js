import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => { 
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" id="logo-container" to="/">Poke' Times</Link>
        <ul className="right hide-on-med-and-down">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/graph'>Graph</NavLink></li>
        </ul>
        <Link to="" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)
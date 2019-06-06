import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { Link, NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {
  componentDidMount() {
    M.Sidenav.init(this.Sidenav);
    let instance = M.Sidenav.getInstance(this.Sidenav);
    instance.close();
    console.log(instance.isOpen);
  }
  handleClick = () => {
    let instance = M.Sidenav.getInstance(this.Sidenav);
    instance.close();
  }
  render() {
    return (
      <>
        <nav className="nav-wrapper red darken-3">
          <div className="container">
            <Link className="brand-logo" id="logo-container" to="/">Poke' Times</Link>
            <ul className="right hide-on-med-and-down">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              <li><NavLink to='/graph'>Graph</NavLink ></li>
            </ul>
            <Link  to="" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          </div>
        </nav>
        <ul ref={Sidenav => {
          this.Sidenav = Sidenav;
        }} id="nav-mobile"
        className="sidenav">
          <li><NavLink exact to="/" onClick={this.handleClick}>Home</NavLink></li>
          <li><NavLink to='/about' onClick={this.handleClick}>About</NavLink></li>
          <li><NavLink to='/contact' onClick={this.handleClick}>Contact</NavLink></li>
          <li><NavLink to='/graph' onClick={this.handleClick}>Graph</NavLink></li>
        </ul>
      </>
    )
  }
}

export default withRouter(Navbar)
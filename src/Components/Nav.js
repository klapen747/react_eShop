import React, { Component } from "react";
import "./Nav.css";

class MyNav extends Component {
  render() {
    return (
      <nav className="container_row" id="nav">
        <a href="#" className="logo">
          <i class="fa-solid fa-store"></i>PENNIEZ
        </a>
        <a href="/">LOG IN</a>
        <a href="/">ABOUT US</a>
        <a href="/">CONTACT</a>
      </nav>
    );
  }
}

export default MyNav;

import React, { Component } from "react";
import "./Header.css";
// import bannerImage from "../Images/malik-skydsgaard-zZoE-CCid3g-unsplash.jpg";

class MyHeader extends Component {
  render() {
    return (
      // <div className="container_row" id="headerWrap">
      <div className="container_column" id="Header">
        <h1>Sneak some new stuff into your closet.</h1>
        <h2>@ penniez eShop</h2>
      </div>
      /* <figure id="bannerPhoto">
          {<img src={bannerImage} width="100%" />}
        </figure> */
      // </div>
    );
  }
}

export default MyHeader;

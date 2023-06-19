import React, { Component } from "react";
import "./Aside.css";

class MyAside extends Component {
  render() {
    return (
      <nav className="container_column" id="aside">
        <a href="#" className="asideElements">
          <i class="fa-solid fa-user"></i> MY ACCOUNT
        </a>
        <a href="#" className="asideElements">
          <i class="fa-solid fa-tag"></i> SALE
        </a>
        <button>
          <i class="fa-solid fa-cart-shopping"></i> MY CART
        </button>
        <button>
          <i class="fa-sharp fa-solid fa-filter"></i> FILTERS
        </button>
      </nav>
    );
  }
}

export default MyAside;

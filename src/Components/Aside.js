import React, { Component } from "react";
import "./Aside.css";

export default class MyAside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOPened: false,
    };
  }

  toggleFilter = (event) => {
    event.preventDefault();
    this.setState({ filterOpened: !this.state.filterOpened });
  };

  render() {
    if (!this.state.filterOpened) {
      return (
        <nav className="container_column" id="aside">
          <a href="/" className="asideElements">
            <i class="fa-solid fa-user"></i> MY ACCOUNT
          </a>
          <a href="/" className="asideElements">
            <i class="fa-solid fa-tag"></i> SALE
          </a>
          <a href="/" className="asideElements">
            <i class="fa-solid fa-cart-shopping"></i> MY CART
          </a>
          <a href="/" className="asideElements" onClick={this.toggleFilter}>
            <i class="fa-sharp fa-solid fa-filter"></i> FILTERS
          </a>
        </nav>
      );
    } else {
      return (
        <nav className="container_column" id="aside">
          <a href="/" className="asideElements">
            <i class="fa-solid fa-user"></i> MY ACCOUNT
          </a>
          <a href="/" className="asideElements">
            <i class="fa-solid fa-tag"></i> SALE
          </a>
          <a href="/" className="asideElements">
            <i class="fa-solid fa-cart-shopping"></i> MY CART
          </a>
          <a href="/" className="asideElements" onClick={this.openFilter}>
            <i class="fa-sharp fa-solid fa-filter"></i> FILTERS
          </a>
          <form className="container_column" id="filterOptions">
            <p>Filter by:</p>
            <ul>
              <li>
                <label>Price:</label>
              </li>
              <label>Category:</label>
            </ul>
          </form>
        </nav>
      );
    }

    //{elements.map(function(value, index) {
    //return <li key={index}>{value}</li>
    //})}
  }
}

/*<select name="category" multiple>
                {products.map(function (product, index) {
                  return (
                    <option key={index} value={product.category}>
                      {this.product.category}
                    </option>
                  );
                })}
              </select>*/

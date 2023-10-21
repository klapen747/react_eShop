import React, { useState } from "react";
import "./Aside.css";

export default function MyAside({ products }) {
  /*constructor(props) {
    super(props);
    this.state = {
      filterOPened: false,
    };
  }*/
  const [filterOpened, setFilterOpened] = useState(false);

  function toggleFilter(event) {
    event.preventDefault();
    setFilterOpened(!filterOpened);
  }

  if (!filterOpened) {
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
        <a href="/" className="asideElements" onClick={toggleFilter}>
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
        <a
          href="/"
          className="asideElements"
          onClick={toggleFilter}
          style={{ color: "#0087a1" }}
        >
          <i class="fa-sharp fa-solid fa-filter"></i> FILTERS
        </a>
        <form className="container_column" id="filterOptions">
          <p>Filter by:</p>
          <ul>
            <li>
              <label>Price:</label>
            </li>
            <li>
              <label>Category:</label>
            </li>
            <select name="category" multiple>
              {products.map(function (product, index) {
                return (
                  <option key={index} value={product.category}>
                    {product.category}
                  </option>
                );
              })}
            </select>
          </ul>
        </form>
      </nav>
    );
  }

  //{elements.map(function(value, index) {
  //return <li key={index}>{value}</li>
  //})}
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

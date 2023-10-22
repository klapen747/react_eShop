import React, { useState, useEffect } from "react";
import "./Aside.css";

export default function MyAside({ products, props }) {
  const [filterOpened, setFilterOpened] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [listOfCategories, setListOfCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setListOfCategories(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const selectCategoryHandler = (event) => {
    setSelectedCategory(event.target.value);
    console.log(listOfCategories);
  };

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
            <select
              name="category"
              value={selectedCategory}
              onChange={selectCategoryHandler}
              multiple
            >
              {listOfCategories.map(function (category, index) {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </ul>
        </form>
      </nav>
    );
  }
}

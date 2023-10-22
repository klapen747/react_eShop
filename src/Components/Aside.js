import React, { useState, useEffect } from "react";
import "./Aside.css";

export default function MyAside({ products, onCategoryChange }) {
  const [filterOpened, setFilterOpened] = useState(false);
  let [selectedCategory, setSelectedCategory] = useState("");
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

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  const selectCategoryHandler = (event) => {
    setSelectedCategory(event.target.value);
    console.log(listOfCategories);
  };

  function resetFilters(event) {
    event.preventDefault();
    setSelectedCategory(null);
    onCategoryChange(null);
  }

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
        <form id="filterOptions" className="column_container">
          <p>Filter by:</p>
          <ul>
            <li>
              <label>Category:</label>
            </li>
            <select
              onChange={handleCategoryChange}
              name="category"
              value={selectedCategory}
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
          <label id="resetFilters" onClick={resetFilters}>
            RESET FILTERS
          </label>
        </form>
      </nav>
    );
  }
}

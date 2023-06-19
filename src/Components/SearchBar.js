import React, { Component } from "react";
import "./SearchBar.css";

class MySearchBar extends Component {
  render() {
    return (
      <div className="container_row" id="search">
        <form id="searchForm">
          <input
            id="inputWindow"
            type="text"
            placeholder="Search for a product"
            autocomplete="off"
            autofocus="on"
          />
          <button id="searchButton">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default MySearchBar;

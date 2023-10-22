import "./App.css";
import React, { useState, useEffect } from "react";
import MyHeader from "./Components/Header";
import MyNav from "./Components/Nav";
import MyAside from "./Components/Aside";
import MyMain from "./Components/Main";
import MySearchBar from "./Components/SearchBar";

//Ovo je wrapper u koji se sve komponente salju i u kojem se one slazu.
function App() {
  const [products, setProducts] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState(null);
  /*let priceRanges = getPriceRanges(products);*/

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  /*function getPriceRanges(products) {
    let max = 0;
    let priceRanges = [];
    function rangesSlicing(rangesArray, max, res) {
      if (max <= 0) {
        return rangesArray;
      }
      rangesArray.push(rangesSlicing(rangesArray, max - res, res));
    }
    products.map(function (product, index) {
      if (product.price > max) {
        max = product.price;
      }
    });
    let res = max / 3;
    return (priceRanges = rangesSlicing(priceRanges, max, res));
  }*/

  return (
    <div className="container_column" id="App">
      <MyNav />
      <MyHeader />
      <MySearchBar />
      <div className="container_row" id="aside_main">
        <MyAside products={products} onCategoryChange={handleCategoryChange} />
        <MyMain products={products} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default App;

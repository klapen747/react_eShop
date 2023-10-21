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

  return (
    <div className="container_column" id="App">
      <MyNav />
      <MyHeader />
      <MySearchBar />
      <div className="container_row" id="aside_main">
        <MyAside products={products} />
        <MyMain products={products} />
      </div>
    </div>
  );
}

export default App;

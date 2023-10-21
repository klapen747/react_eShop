import React, { Component } from "react";
import MyCard from "./Card";
import "./Main.css";

function MyMain({ products }) {
  /* constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }*/

  return (
    <div className="container_row" id="threeProducts">
      {products.map((product) => (
        <MyCard
          id={product.id}
          title={product.title}
          price={`$${product.price}`}
          category={product.category}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default MyMain;

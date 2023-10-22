import React, { useEffect, useState } from "react";
import MyCard from "./Card";
import "./Main.css";

function MyMain({ products, selectedCategory }) {
  const [productsByCat, setProductsByCat] = useState([]);

  useEffect(() => {
    //api call to get products from one category

    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setProductsByCat(data);
        })
        .catch(
          (error) => {
            console.log("Error fetching data:", error);
          },
          [selectedCategory]
        );
    }
  });
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

  if (!selectedCategory) {
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
  } else {
    return (
      <div className="container_row" id="threeProducts">
        {productsByCat.map((productByCat) => (
          <MyCard
            id={productByCat.id}
            title={productByCat.title}
            price={`$${productByCat.price}`}
            category={productByCat.category}
            description={productByCat.description}
            image={productByCat.image}
          />
        ))}
      </div>
    );
  }
}

export default MyMain;

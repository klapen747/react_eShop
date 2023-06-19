import React, { Component } from "react";
import "./Card.css";
import Modal from "./Modal";

class MyCard extends Component {
  render() {
    console.log(this.props.description, this.props.description);
    return (
      <div className="container_column" id="card_wrap">
        <p>{this.props.id}</p>
        <h3>{this.props.title}</h3>
        <h3>{this.props.price}</h3>
        <h4>{this.props.category}</h4>
        {/* <p id="product_description">{this.props.description}</p> */}
        <figure id="productImg">
          <img src={this.props.image} width="100%" />
        </figure>
        <Modal title={this.props.title} description={this.props.description} />
        <button id="addToCartButton">
          <i class="fa-solid fa-cart-shopping"></i> Add to cart
        </button>
      </div>
    );
  }
}

export default MyCard;

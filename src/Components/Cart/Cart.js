import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const productPrice = props.cart.reduce(
    (sum, products) => sum + products.price,
    0
  );
  const tax = Math.round(productPrice * 0.1);
  const totalPrice = Math.round(productPrice + tax);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <h4>Total Item: {props.cart.length}</h4>
      <h4>Price: {productPrice}$</h4>
      <h4>Tax: {tax}$</h4>
      <h4 style={{ borderTop: "1px solid lightgray", width: "200px" }}>
        Total Price: {totalPrice}$
      </h4>
    </div>
  );
};

export default Cart;

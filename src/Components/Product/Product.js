import React from "react";
import "./Product.css";
import { Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

const Product = (props) => {
  const { title, price, category, image } = props.product;
  return (
    <div className="product">
      <div className="image-div">
        <img src={image} alt="product_img" />
      </div>
      <div className="product-detais-div">
        <h3 className="text-primary">{title}</h3>
        <h5>Category: {category}</h5>
        <h5>Price: {price}$</h5>
        <h6 className="text-danger">In Stock</h6>
        <Button
          variant="warning"
          onClick={() => props.addProduct(props.product)}
        >
          ADD TO CART <FaCartPlus style={{ fontSize: "18px" }} />
        </Button>
      </div>
    </div>
  );
};

export default Product;

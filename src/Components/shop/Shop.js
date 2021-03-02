import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);

  const addProduct = (products) => {
    const newCart = [...cart, products];
    setCart(newCart);
  };
  return (
    <>
      {loading && <h2 style={{ textAlign: "center" }}>Loading....</h2>}
      <div className="shop">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Shop;

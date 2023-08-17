import React from "react";
import { Container } from "react-bootstrap";
import Product from "./Product";
import { PRODUCTS } from "./products";
import "./Home.css";

const Home = () => {
  return (
    <Container className="Home-container shop">
      <div className="products">
        {" "}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </Container>
  );
};

export default Home;



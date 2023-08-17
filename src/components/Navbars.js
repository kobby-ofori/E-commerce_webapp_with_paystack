import React, { useContext } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import shoppingCart from "../images/shoppingCart.png";
import onlineShopping from "../images/onlineShopping.png"
import { ShopContext } from "../context/ShopContext";

const Navbars = () => {
  const { cartItems } = useContext(ShopContext);

  // Calculate the total number of items in the cart
  const totalCartItems = Object.values(cartItems).reduce((total, amount) => total + amount, 0);

  return (
    <Navbar bg="dark" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={onlineShopping} alt="Home-page-logo"/> 
          </Link>
        </Navbar.Brand>
        <Nav>
          <Link to="cart">
            <img src={shoppingCart} alt="cart pic" />
            <Badge variant="secondary">{totalCartItems}</Badge>
          </Link>
          {/* <Button variant="light">
              <Link to="contact">Contact</Link>
            </Button>
            <Button variant="light">
              <Link to="services">Services</Link>
            </Button> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;

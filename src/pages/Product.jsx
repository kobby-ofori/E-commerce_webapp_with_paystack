import React from "react";
import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ShopContext } from "../context/ShopContext";

const Product = (props) => {
  const { id, attire, price, attireImage } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount =cartItems[id];
  return (
    <Container>
      <Row className="content-row">
        <Col md={3}>
          <Card style={{ width: "18rem" }} className="card text-center custom-card">
            <Card.Img variant="top" src={attireImage} alt="attire-pics" className="card-img-top img-responsive custom-img"/>
            <p className="top-right-tag">Free shipping</p>
            <Card.Body>
              <Card.Title>{attire}</Card.Title>
              <Card.Text>GHS {price}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;

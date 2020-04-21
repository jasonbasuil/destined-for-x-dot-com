import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Avatar from "./Avatar";

function Testimonials(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={4} className="py-3" key={index}>
          <Card>
            <Card.Body className="p-4 text-center">
              <Avatar src={item.avatar} alt={item.name} size="120px"></Avatar>
              <Card.Text className="mt-4">"{item.testimonial}"</Card.Text>
              <h5 className="font-weight-bold mb-0 mt-4">{item.name}</h5>
              <small>{item.company}</small>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Testimonials;

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Avatar from "./Avatar";

function Speakers(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={4} className="py-3" key={index}>
          <Card>
            <Card.Body className="p-4 text-center">
              <Avatar src={item.avatar} alt={item.name} size="120px"></Avatar>
              <h4 className="font-weight-bold mb-0 mt-4">{item.name}</h4>
              <medium>{item.company}</medium>
              <Card.Text className="mt-3">"{item.bio}"</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Speakers;

import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Features3 from "./Features3";
import "./FeaturesSection3.scss";

function FeaturesSection3(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-left">
            <figure className="FeaturesSection3__image-container mx-auto">
              <Image src={props.image} fluid={true}></Image>
            </figure>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <Features3
              items={[
                {
                  title: "Get paired with a mentor",
                  description:
                    "Find a mentor from our network who matches your interests and goals. Interested in tech, healthcare, or nonprofits? We have several mentors who are available and willing to help you on your journey.",
                  iconClass: "fas fa-comments",
                  iconColor: "primary",
                },
                {
                  title: "Stay accountable",
                  description:
                    "No one every reaches success on their own. One of the fastest ways to achieve your own version of success if by staying accountable for your goals. Mentors will help give you the tools to keep you on track with your goals.",
                  iconClass: "fas fa-gamepad",
                  iconColor: "danger",
                },
                {
                  title: "Reach your goals faster",
                  description:
                    "Make progress on your goals throughout the entire year. Get check-ins from your mentor. ",
                  iconClass: "fas fa-cat",
                  iconColor: "dark",
                },
              ]}
            ></Features3>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesSection3;

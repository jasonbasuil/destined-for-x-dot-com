import React from "react";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../SectionHeader";
import Features from "./Features";
import Google from "../../assets/Google.JPG";
import Lightgrid from "../../assets/Lightgrid.jpeg";
import Facebook from "../../assets/Facebook.JPG";
import Park from "../../assets/Park.jpg"

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <Features
          items={[
            {
              title: "Inspire Possibility",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: Google,
            },
            {
              title: "Learn Invaluable Skills",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: Lightgrid,
            },
            {
              title: "Network with top professionals",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: Facebook,
            },
            {
              title: "Build lifelong frienships",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: Park,
            },
          ]}
        ></Features>
      </Container>
    </Section>
  );
}

export default FeaturesSection;

import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Stats from "./Stats";

function StatsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <Stats
          items={[
            {
              title: "Students served",
              stat: "100",
            },
            {
              title: "% attending college",
              stat: "100%",
            },
            {
              title: "Another stat",
              stat: "364",
            },
            {
              title: "Likes",
              stat: "789",
            },
          ]}
        ></Stats>
      </Container>
    </Section>
  );
}

export default StatsSection;

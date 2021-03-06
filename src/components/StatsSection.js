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
              stat: "108",
            },
            {
              title: "% attending college",
              stat: "100%",
            },
            {
              title: "Volunteer Hours",
              stat: "7,329+",
            },
            {
              title: "% Students Recommend us (2020)",
              stat: "100%",
            },
          ]}
        ></Stats>
      </Container>
    </Section>
  );
}

export default StatsSection;

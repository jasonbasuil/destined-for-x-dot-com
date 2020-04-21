import React from "react";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../SectionHeader";
import Features from "../Features";
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
                "We strive to empower our students to think big and challenge what's possible for them. Through our programs, we allow students to explore different career paths, reflect on their values, and give them the tools to take direct action on any goal they set for themselves.",
              image: Google,
            },
            {
              title: "Learn Invaluable Skills",
              description:
                "What you learn in a traditional classroom setting can only get you so far. We teach our students skills that will be invaluable for their entire lives. These skills include effective goal-setting, how to network, confident communication, and much more.",
              image: Lightgrid,
            },
            {
              title: "Network with top professionals",
              description:
                "Students gain the opportunity to meet and network with top professionals from various backgrounds, roles, and industries. One of the best ways to figure out the career you want to pursue in the next step of your life is by talking to people who have already done it and ask how they did it.",
              image: Facebook,
            },
            {
              title: "Build lifelong friendships",
              description:
                "Experience and unforgettable summer program and make some new friends. You'll be joining a fast-growing community of learners, self-starters, and motivated individuals who will uplift you and help you get to where you want to go in life.",
              image: Park,
            },
          ]}
        ></Features>
      </Container>
    </Section>
  );
}

export default FeaturesSection;

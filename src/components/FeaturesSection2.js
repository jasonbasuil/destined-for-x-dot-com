import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Features2 from "./Features2";
import undraw_youtube_tutorial from "../assets/icons/undraw_youtube_tutorial_2gn3.svg"
import undraw_conference_call from "../assets/icons/undraw_conference_call_b0w6.svg"
import undraw_Group_chat from "../assets/icons/undraw_Group_chat_unwm.svg"
import undraw_conversation from "../assets/icons/undraw_conversation_h12g.svg"

function FeaturesSection2(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        ></SectionHeader>
        <Card>
          <Features2
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Skills Workshops",
                body:
                  "Join online workshops every week and learn how to effectively network, set goals, and figure out next steps for creating a fulfilling future for yourself.",
                image: undraw_youtube_tutorial,
              },
              {
                title: "Panelist Discussions",
                body:
                  "Every other week, join us on calls where we will be bringing in guest panelists from top companies around Silicon Valley. Learn about different roles, industries, and stories about how they got there.",
                image: undraw_conference_call,
              },
              {
                title: "Access to the D4X Network",
                body:
                  "Join a community of over 500+ students, mentors, volunteers, and supporters of Destined for X. Get access to our Slack channel to continue your relationships and network with professionals.",
                image: undraw_Group_chat,
              },
              {
                title: "Join the Mentorship Program",
                body:
                  "At the end of the virtual program, you'll have the opportunity to join an extended mentorship program to get 1-on-1 time with a successful professional in a field or industry that interests you.",
                image: undraw_conversation,
              },
            ]}
          ></Features2>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;

import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Speakers from "./Speakers";
import AliceLiu from "../assets/speakers/AliceLiu.jpeg"
import SabeehaIslam from "../assets/speakers/SabeehaIslam.jpg"
import MaddyRueda from "../assets/speakers/MaddyRueda.jpg"

function SpeakersSection(props) {
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
        <Speakers
          items={[
            {
              avatar: AliceLiu,
              name: "Alice Liu",
              bio:
                "Alice is currently working at Blend (fintech focused on lending) as a team lead for Product Analytics. Growing up, she didn't have a set idea of what she wanted to study or what career path she wanted to take. That has manifested into a career with different roles ranging from Design to Customer Success to Marketing and Product Management. To navigate those switches, she took advantage of opportunities that came her way and also worked to acquire necessary skills to fill in the gaps. She has also been a voice for Diversity, Equity and Inclusion, leading events and company initiatives to support women's needs and careers in the workplace. In her free time, she writes poetry and volunteers with Full Circle Fund.",
              company: "Product @ Blend",
            },
            {
              avatar: SabeehaIslam,
              name: "Sabeeha Islam",
              bio:
                "Sabeeha Islam is a Sustainability Consultant for Engie Impact, the strategic advisory arm of Engie. She also co-authors her own newsletter, The Emergence Initiative, which curates best-in-class content at the intersection of industrial development, social inclusion, and decarbonization solutions.",
              company: "Sustainability Consultant @ Engie Impact",
            },
            {
              avatar: MaddyRueda,
              name: "Maddy Rueda",
              bio:
                "Maddy is currently a Staffing Services Associate at Google. Formerly a student athlete for Southern Methodist University's Division I Rowing Team, she graduated in 2018 with degrees in Marketing and Sport Management. She is passionate about career development, non-profit engagement, diversity and inclusion. Originally from New England, she is a Boston Bruins fan and an avid skier.",
              company: "Staffing Services Associate @ Google",
            },
          ]}
        ></Speakers>
      </Container>
    </Section>
  );
}

export default SpeakersSection;
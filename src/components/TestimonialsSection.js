import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Testimonials from "./Testimonials";
import Freddy from "../assets/FreddyAnene.jpg"
import Teland from "../assets/TelandLa.jpg"
import Rachel from "../assets/RachelRatnam.png"

function TestimonialsSection(props) {
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
        <Testimonials
          items={[
            {
              avatar: Freddy,
              name: "Freddy Anene",
              testimonial:
                "Remembering that I am the CEO of my life and that asking questions is important have definitely stuck the most since leaving. Through the program, I realized that what I have to say... there's value to it. I feel super comfortable giving speeches to my club now!",
              company: "D4X 2017 (Junior). Currently @ UC Berkeley.",
            },
            {
              avatar: Rachel,
              name: "Rachel Ratnam",
              testimonial:
                "I’m leaving this program as a confident, outgoing person. I know how to network and connect with people, how to approach people and have meaningful conversations. Now I feel like I can go up to anyone to hear their story and share my own. I learned so much from such successful people whom I never even thought I could say hi to. I’ve learned that I am important, and there's nothing that can stop me.",
              company: "D4X 2018 (Senior). Currently @ Carnegie Mellon.",
            },
            {
              avatar: Teland,
              name: "Teland La",
              testimonial:
                "The program helped me understand the importance of networking. I realize that it opens the door to so many opportunities like internships or jobs. It also exposed me to several different careers within the tech industry which I can see myself pursuing.  ",
              company: "D4X 2019 (Junior). Incoming @ Stanford University.",
            },
          ]}
        ></Testimonials>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;

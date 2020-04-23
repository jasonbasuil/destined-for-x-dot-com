import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Faq from "./Faq";

function FaqSection(props) {
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
        <Faq
          items={[
            {
              question: "How much the 2020 Virtual program cost?",
              answer:
                "Absolutely free! All we ask is that you commit to attending all sessions. We will have incentives and giveaways for students who attend all sessions (which may include scholarship opportunities, D4X apparel, mentorship opportunities and more!)",
            },
            {
              question: "What is the time commitment like for the 2020 Virtual program?",
              answer:
                "1 hour sessions every Thursday via ZOOM as well as few short assignments to be completed prior to each session. We estimate no more than a 3 hour total commitment every week for 6 weeks.",
            },
            {
              question: "What happened to the in-person program with all the cool company tours!?",
              answer:
                "We're just as sad as you are that we aren't able to host an in-person program this year due to the COVID-19 crisis. We're trying are hardest to provide value to all students who are eligible and apply to our Virtual Program this year. We're here to help you on your life journey in any way we can... even if it's just online!",
            },
            {
              question: "What is the best way to contact Destined for X?",
              answer:
                "Email us at admin@destinedforx.com",
            },
            
          ]}
        ></Faq>
      </Container>
    </Section>
  );
}

export default FaqSection;

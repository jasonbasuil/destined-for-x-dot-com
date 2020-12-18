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
              question: "How much does the 2020 Virtual program cost?",
              answer:
                "Absolutely free! All we ask is that you commit to attending all sessions.",
            },
            {
              question:
                "What is the time commitment like for the 2020 Virtual program?",
              answer:
                "1 hour sessions every Thursday via ZOOM as well as few short assignments to be completed prior to each session. We estimate no more than a 3 hour total commitment every week for 6 weeks.",
            },
            {
              question:
                "What happened to the in-person program with all the cool company tours!?",
              answer:
                "We're just as sad as you are that we aren't able to host an in-person program this year due to the COVID-19 crisis. We're trying our hardest to provide value to all students who are eligible and apply to our Virtual Program this year. We're here to help you on your life journey in any way we can, even if it's just online!",
            },
            {
              question:
                "What if I already applied for the 2020 in-person program?",
              answer:
                "Due to COVID-19 and our pivot to a virtual program, you application for the in person program was shifted into the pool for the virtual program. We do reccomend you join us for the virtual program as we cover many of the same topics as the in-person program. There's no need to submit another application. We'll send you more details as the virtual program application closes.",
            },
            {
              question:
                "But I was so excited to travel & stay in Silicon Valley for the trip!",
              answer:
                "We totally get it! We're super bummed too. But putting on a virtual program this year in lieu of the COVID-19 crisis is better than no program. And it's at no expense for all students.",
            },
            {
              question:
                "But students from previous years got to go to so many cool companies and meet new people!",
              answer:
                "And this year's virtual program you still get to meet cool people from top companies as well as meet other ambitious students who are wanting to improve their leadership skills this summer! In addition, all students who join us and complete the Virtual program this year will be eligible to receive Destined for X apparel, potential scholarships, mentorship opportunities, and more!",
            },
            {
              question: "Will there be an in-person program next year?",
              answer:
                "We are planning to host an in-person program in 2021, so you can always submit an application next year.",
            },
            {
              question:
                "What is the best way to contact Destined for X if I have more questions?",
              answer: "Email us at admin@destinedforx.com",
            },
          ]}
        ></Faq>
      </Container>
    </Section>
  );
}

export default FaqSection;

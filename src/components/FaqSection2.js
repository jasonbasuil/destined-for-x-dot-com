import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Faq from "./Faq";

function FaqSection2(props) {
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
              question: "What are the expectations for mentors?",
              answer:
                "You will be assigned to a student based on your career interests and experiences. Our mentees are low income students from around the country (majority in high school, although some are in college). Destined for X will provide recommended topics for discussion depending on what grade your mentee is in, but you and your mentee are welcome to set your own agenda depending on your interests and what is top of mind for your mentee!",
            },
            {
              question: "What is the time commitment for being a mentor?",
              answer: "You are expected to meet with your mentee for ~1 hour every month (phone, facetime, or in person) and attend a program check-in once every 2 months (Google Hangouts). The meeting time with your mentee is flexible, and you and your mentee will need to coordinate (text or email) to set up a time each month.",
            },
            {
              question: "I have more questions! Who do I contact for more info?",
              answer: "If you would like to learn more about our program, please feel free to email the Program Directors at stacey.zhou@destinedforx.com and emily.castanares@destinedforx.com."
            },
          ]}
        ></Faq>
      </Container>
    </Section>
  );
}

export default FaqSection2;
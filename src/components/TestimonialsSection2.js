import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Testimonials2 from "./Testimonials2";
import undraw_profile_pic from "../assets/icons/undraw_profile_pic_ic5t.svg";

function TestimonialsSection2(props) {
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
          size={1}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <Testimonials2
          items={[
            {
              avatar: undraw_profile_pic,
              name: "Hein San",
              testimonial:
                "The D4X Mentorship program helped me connect with a professional closely and provided me with necessary assistance in order to succeed. My mentor went out of his way to meet me personally and elaborate on the concepts that I didn't understand.",
              company: "2019 Mentee",
            },
            {
              avatar: undraw_profile_pic,
              name: "Curtis Calder",
              testimonial:
                "Libbe demonstrated a tremendous amount of personal growth throughout the year. The most noticeable was in her confidence. For example, she started her own Humankind Zine but was really keeping it a secret since she wasn't sure how it would be received. Over the course of knowing her she worked up the courage and finally told people in her personal life about her online magazine. She received a lot of support from her friends after sharing and is getting ready for her first publication. She received over 100 artists who submitted work and has looped in friends to help due to the unexpected volume.",
              company: "Mentor to Libbe Phan",
            },
            {
              avatar: undraw_profile_pic,
              name: "Aziz Kamoun",
              testimonial:
                "In response to the personal growth seen in my mentee: 1) Increased confidence in the face of unknown outcomes when applying to internships and 2) An even greater willingness to collaborate with strangers, particularly in the context of hackathons.",
              company: "Mentor to Hein San",
            },
            {
              avatar: undraw_profile_pic,
              name: "Lauren Chen",
              testimonial:
                "Destined for X is the perfect mentorship program structured to prompt insightful discussion. I was blown away by my mentee’s passion and talent. The time commitment is feasible and the check-ins help hold everyone accountable. It’s a two way street and I’ve learned a lot from my mentee. A lot of thought went into the mentor/mentee pairing which makes discussion flow seamlessly. I’m at a stage in my career where I’ve been through most of the things my mentee is going through.",
              company: "2020 Mentor",
            },
          ]}
        ></Testimonials2>
      </Container>
    </Section>
  );
}

export default TestimonialsSection2;

import React from "react";
import HeroSection2 from "../components/HeroSection2";
import FeaturesSection3 from "../components/FeaturesSection3";
import CtaSection from "../components/CtaSection";
import FacebookTour from "../assets/events/FacebookTour.JPG";
import TestimonialsSection2 from "../components/TestimonialsSection2";
import FaqSection2 from "../components/FaqSection2";

function MentorshipProgramPage(props) {
  return (
    <>
      <HeroSection2
        bg="dark"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2020 Mentorship Program"
        subtitle="Be paired with a professional mentor for continuous support throughout the school year."
      ></HeroSection2>
      <FeaturesSection3
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image={FacebookTour}
      ></FeaturesSection3>
      <TestimonialsSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Testimonials"
        subtitle=""
      ></TestimonialsSection2>
      <FaqSection2
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      ></FaqSection2>
      <CtaSection
        bg="dark"
        textColor="white"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Applications have closed for the 2020 Mentorship Program."
      ></CtaSection>
    </>
  );
}

export default MentorshipProgramPage;

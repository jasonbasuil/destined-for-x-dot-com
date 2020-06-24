import React from "react";
import HeroSection2 from "../components/HeroSection2";
import FeaturesSection3 from "../components/FeaturesSection3";
import CtaSection2 from "../components/CtaSection2";
import { useRouter } from "../util/router.js";
import undraw_people from "../assets/icons/undraw_people_tax5.svg"
import TestimonialsSection2 from "../components/TestimonialsSection2";
import FaqSection2 from "../components/FaqSection2";

function MentorshipProgramPage(props) {
  const router = useRouter();

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
        image={undraw_people}
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
      <CtaSection2
        bg="dark"
        textColor="white"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Apply to a 2020 program today."
        subtitle=""
        buttonText="Apply"
        buttonColor="primary"
        buttonOnClick={() => {
          router.push("/apply");
        }}
      ></CtaSection2>
    </>
  );
}

export default MentorshipProgramPage;
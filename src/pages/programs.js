import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import FeaturesSection2 from "./../components/FeaturesSection2";
import FeaturesSection3 from "./../components/FeaturesSection3";
import CtaSection2 from "./../components/CtaSection2";
import { useRouter } from "./../util/router.js";

function ProgramsPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection2
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2020 Virtual Program"
        subtitle="Amidst the COVID-19 crisis, Destined for X will be hosting a virtual program to provide students with valuable life skills as well as the opportunity to network with professionals from various job functions and industries all around Silicon Valley."
      ></HeroSection2>
      <FeaturesSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      ></FeaturesSection2>
      <HeroSection2
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2020 Mentorship Program"
        subtitle="Be paired with a professional mentor for continuous support throughout the school year."
      ></HeroSection2>
      <FeaturesSection3
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      ></FeaturesSection3>
      <CtaSection2
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Apply to a 2020 program today."
        subtitle=""
        buttonText="Apply"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/apply");
        }}
      ></CtaSection2>
    </>
  );
}

export default ProgramsPage;

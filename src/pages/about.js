import React from "react";
import HeroSection2 from "./../components/HeroSection2";

function AboutPage(props) {
  return (
    <HeroSection2
      bg="primary"
      textColor="white"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="Our story"
      subtitle="It doesn't matter where you come from, what matters is where you're going."
    ></HeroSection2>
  );
}

export default AboutPage;

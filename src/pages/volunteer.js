import React from "react";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "./../util/router.js";

function VolunteerPage(props) {
  const router = useRouter();

  return (
    <CtaSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Volunteer with us!"
      subtitle="We're always looking for committed individuals who believe in empowering young people. A great way to get involved with Destined for X is to volunteer to be a mentor. We are looking for early- to mid-career professionals to serve as mentors to our students to advise them in their high school/college careers. Being a mentor is a high-impact, low-time commitment opportunity and a great way to support the mission of Destined for X. If you are interested in becoming a mentor, please fill out our interest form below and we will reach out to you with more details!"
      buttonText="Get Started"
      buttonColor="primary"
      buttonOnClick={() => {
        // Navigate to pricing page
        router.push("/pricing");
      }}
    ></CtaSection>
  );
}

export default VolunteerPage;

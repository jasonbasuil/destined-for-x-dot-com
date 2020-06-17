import React from "react";
import CtaSection from "./../components/CtaSection";

function VolunteerPage(props) {

  return (
    <CtaSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Apply to be a mentor!"
      subtitle="We're always looking for committed individuals who believe in empowering young people. A great way to get involved with Destined for X is to volunteer to be a mentor. We are looking for early- to mid-career professionals to serve as mentors to our students to advise them in their high school/college careers. Being a mentor is a high-impact, low-time commitment opportunity and a great way to support the mission of Destined for X. If you are interested in becoming a mentor, please fill out our interest form below and we will reach out to you with more details!"
      buttonText="Apply now"
      buttonColor="primary"
      buttonOnClick={() => {
        // Navigate Mentor interest form
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSeFRXYntnxjSN-5a5iQ5FNJCypxsWoQZyYdzmcv67qCuVr4aw/viewform");
      }}
    ></CtaSection>
  );
}

export default VolunteerPage;

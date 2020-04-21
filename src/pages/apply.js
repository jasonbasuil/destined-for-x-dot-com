import React, {Fragment} from "react";
import CtaSection from "../components/CtaSection"

function ApplyPage(props) {
  return (
    <Fragment>
    <CtaSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Apply to the 2020 Virtual Program"
        subtitle=""
        buttonText="Apply"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          window.open("www.destinedforx.com")
        }}
      ></CtaSection>
      <CtaSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Apply to the 2020 Mentorship Program"
      subtitle=""
      buttonText="Apply"
      buttonColor="primary"
      buttonOnClick={() => {
        // Navigate to pricing page
        window.open("www.destinedforx.com")
      }}
    ></CtaSection>
    </Fragment>
  );
}

export default ApplyPage;

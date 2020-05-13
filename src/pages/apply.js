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
        subtitle="Admissions will be accepted on a rolling basis until May 17, 2020 at 11:59PM PST"
        buttonText="Apply"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          window.open("https://docs.google.com/forms/d/e/1FAIpQLSdo9oOQ0GBy3pl2LMnjPMAY2KhvFoqmzmlyxdbxd-uQc4wQEg/viewform")
        }}
      ></CtaSection>
      <CtaSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="2020 Mentorship Program"
      subtitle="Applications for this year's mentorship program will be announced later this summer"
      buttonText=""
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

import React from "react";
import CtaSection from "./../components/CtaSection";
import SchoolsSection from "./../components/SchoolsSection";
import StatsSection from "./../components/StatsSection";
//import FeaturesSection4 from "./../components/FeaturesSection4";

function DonatePage(props) {
  return (
    <>
      <CtaSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Donate"
        subtitle="Destined for X prides itself on being a fully transparent business, and on using our program funds efficiently and effectively. Destined for X is entirely volunteer-run, and our staff do not draw salaries. So every dollar donated goes directly to what matters: creating a transformative experience for our students."
        buttonText="Donate"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          window.open("https://www.paypal.com/us/fundraiser/charity/2767731");
        }}
      ></CtaSection>
      <SchoolsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="100% of our graduating seniors attend college"
        subtitle=""
      ></SchoolsSection>
      <StatsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      ></StatsSection>
      {/* <FeaturesSection4
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      ></FeaturesSection4> */}
      <CtaSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Help us keep our programs going"
        subtitle="Destined for X is a registered 501(c)(3) public charity. EIN: 82-1227489. Donations are tax-deductible."
        buttonText="Donate"
        buttonColor="primary"
        buttonOnClick={() => {
          window.open("https://www.paypal.com/us/fundraiser/charity/2767731");
        }}
      ></CtaSection>
    </>
  );
}

export default DonatePage;

import React, { Fragment } from "react";
import CtaSection from "../components/CtaSection";

function ApplyPage(props) {
  return (
    <Fragment>
      <CtaSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2021 Immersive Program"
        subtitle="Destined for X is planning an Immersive Program for 2021 contingent on the status of the ongoing health crisis. Stay tuned for updates!"
        buttonText=""
        buttonColor="primary"
        buttonOnClick={() => {
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSd15C00Gl3iXbnRyrgn2bO2vSnbj8jCXRM6guqxAq-RHaDIlQ/viewform"
          );
        }}
      ></CtaSection>
      <CtaSection
        bg="dark"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2020 Mentorship Program"
        subtitle="CLOSED: The applications for the 2020 Mentorship Program have officially closed. Be on the lookout for our 2021 programs!"
        buttonText=""
        buttonColor="primary"
        buttonOnClick={() => {
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSd15C00Gl3iXbnRyrgn2bO2vSnbj8jCXRM6guqxAq-RHaDIlQ/viewform"
          );
        }}
      ></CtaSection>
      <CtaSection
        bg="dark"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2020 Virtual Program"
        subtitle="CLOSED: The application cycle for 2020 has concluded. Be on the lookout for our 2021 programs!"
        buttonText=""
        buttonColor="primary"
        buttonOnClick={() => {
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSdo9oOQ0GBy3pl2LMnjPMAY2KhvFoqmzmlyxdbxd-uQc4wQEg/viewform"
          );
        }}
      ></CtaSection>
      <CtaSection
        bg="dark"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Destined for X Miami"
        subtitle="COMING SOON: we are excited to announce that we will be launching a branch of Destined for X in Miami! Stay tuned for details."
        buttonText=""
        buttonColor="primary"
        buttonOnClick={() => {
          window.open("www.destinedforx.com");
        }}
      ></CtaSection>
    </Fragment>
  );
}

export default ApplyPage;

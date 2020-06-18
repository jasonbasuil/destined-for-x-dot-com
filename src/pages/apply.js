import React, {Fragment} from "react";
import CtaSection from "../components/CtaSection"
import { useRouter } from "../util/router.js";

function ApplyPage(props) {
  const router = useRouter();

  return (
    <Fragment>
    <CtaSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2020 Virtual Program (closed)"
        subtitle="The application cycle for 2020 has concluded. Be on the lookout for our 2021 programs!"
        buttonText=""
        buttonColor="primary"
        buttonOnClick={() => {
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
      buttonText="Learn more"
      buttonColor="primary"
      buttonOnClick={() => {
        router.push("/mentorship-program")
      }}
    ></CtaSection>
    <CtaSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Destined for X Miami"
      subtitle="Coming Soon: we are excited to announce that we will be launching a branch of Destined for X in Miami! Stay tuned for details."
      buttonText=""
      buttonColor="primary"
      buttonOnClick={() => {
        window.open("www.destinedforx.com")
      }}
    ></CtaSection>
    </Fragment>
  );
}

export default ApplyPage;

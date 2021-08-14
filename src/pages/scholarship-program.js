import React from "react";
import HeroSection2 from "../components/HeroSection2";
import ScholarshipBanner from "../assets/scholarship/ScholarshipBannerFinal.png"
import CtaSection2 from "../components/CtaSection2";

function ScholarshipProgramPage(props) {
  return (
    <>
      <HeroSection2
        bg="dark"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2021 Scholarship Program"
        subtitle="We are excited to announce that Destined for X will be awarding 3 scholarships this year."
      ></HeroSection2>
      <div className="ScholarshipBannerContainer" style={{ textAlign: "center"}}>
        <a href="https://forms.gle/s72icorBvWq6PDzi9">
          <img src={ScholarshipBanner} alt="Destined for X 2021 Scholarship Program" style={{ maxWidth: "100%", height: "auto"}} />
        </a>
      </div>
      <CtaSection2
        bg="dark"
        textColor="white"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        buttonText="Apply Today"
        buttonOnClick={() => {
          window.open("https://forms.gle/s72icorBvWq6PDzi9");
        }}
        title="Applications are open"
      />
    </>
  );
}

export default ScholarshipProgramPage;
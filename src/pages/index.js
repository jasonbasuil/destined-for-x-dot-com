import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "../components/index/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import CtaSection from "./../components/CtaSection";
//import NewsletterSection from "./../components/NewsletterSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="We empower underrepresented students to confidently craft a fulfilling future."
        subtitle=""
        buttonText="Learn More"
        buttonColor="primary"
        image="https://res.cloudinary.com/dwgvb9rdh/image/upload/c_scale,q_auto,w_800/v1587758853/IMG_1757_up6rnu.jpg"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/programs");
        }}
      ></HeroSection>
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="About our programs"
        subtitle="Destined for X hosts two programs:
        a week-long, all-expenses paid summer program in Silicon Valley where students visit top tech companies and network with industry professionals; and 
        a mentorship program that pairs students with an industry mentor who guides them on their professional endeavors."
      ></FeaturesSection>
      <ClientsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="We partner with top Silicon Valley companies"
        subtitle=""
      ></ClientsSection>
      <TestimonialsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what our students are saying"
        subtitle=""
      ></TestimonialsSection>
      <CtaSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Apply to our programs!"
        subtitle="Apply for the 2020 Destined for X virtual program! Applications are now open and acceptances will be sent out on a rolling basis. Hurry, as spaces do tend to fill up. Click below for more info."
        buttonText="Apply"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/apply");
        }}
      ></CtaSection>
      {/* <NewsletterSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive updates on programs, news, and more."
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      ></NewsletterSection> */}
    </>
  );
}

export default IndexPage;

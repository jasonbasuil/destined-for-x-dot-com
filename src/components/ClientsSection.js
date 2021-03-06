import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";
import FacebookLogo from "../assets/FacebookLogo.jpg";
import GoogleLogo from "../assets/GoogleLogo.jpg";
import MicrosoftLogo from "../assets/MicrosoftLogo.png";
import LyftLogo from "../assets/LyftLogo.png";
import AppleLogo from "../assets/AppleLogo.png";

function ClientsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        ></SectionHeader>
        <Clients
          items={[
            {
              name: "Facebook",
              image: FacebookLogo,
              width: "195px",
            },
            {
              name: "Google",
              image: GoogleLogo,
              width: "150px",
            },
            {
              name: "Apple",
              image: AppleLogo,
              width: "50px",
            },
            {
              name: "Microsoft",
              image: MicrosoftLogo,
              width: "180px",
            },
            {
              name: "Lyft",
              image: LyftLogo,
              width: "85px",
            },
          ]}
        ></Clients>
      </Container>
    </Section>
  );
}

export default ClientsSection;

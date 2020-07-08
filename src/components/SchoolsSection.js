import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";
import Harvard from "../assets/schools/Harvard.png"
import Stanford from "../assets/schools/Stanford.png"
import Berkeley from "../assets/schools/Berkeley.png"
import CarnegieMellon from "../assets/schools/CarnegieMellon.png"
import CalPoly from "../assets/schools/CalPoly.png"
import SantaClara from "../assets/schools/SantaClara.png"
import Davis from "../assets/schools/Davis.png"
import SJSU from "../assets/schools/SJSU.png"
import UCMerced from "../assets/schools/Merced.png"
import Dartmouth from "../assets/schools/Dartmouth.png"
import AntelopeValley from "../assets/schools/AntelopeValley.png"
import UCLA from "../assets/schools/UCLA.png"

function SchoolsSection(props) {
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
              name: "Stanford",
              image: Stanford,
              width: "120px",
            },
            {
              name: "UC Berkeley",
              image: Berkeley,
              width: "165px",
            },
            {
              name: "Harvard",
              image: Harvard,
              width: "170px",
            },
            {
              name: "Carnegie Mellon",
              image: CarnegieMellon,
              width: "165px",
            },
            {
              name: "Dartmouth",
              image: Dartmouth,
              width: "175px",
            },
            {
              name: "Merced",
              image: UCMerced,
              width: "245px",
            },
            {
              name: "Cal Poly SLO",
              image: CalPoly,
              width: "215px",
            },
            {
              name: "Santa Clara",
              image: SantaClara,
              width: "215px",
            },
            {
              name: "Davis",
              image: Davis,
              width: "235px",
            },
            {
              name: "Antelope Valley College",
              image: AntelopeValley,
              width: "165px",
            },
            {
              name: "SJSU",
              image: SJSU,
              width: "205px",
            },
            {
              name: "UCLA",
              image: UCLA,
              width: "210px"
            }

          ]}
        ></Clients>
      </Container>
    </Section>
  );
}

export default SchoolsSection;
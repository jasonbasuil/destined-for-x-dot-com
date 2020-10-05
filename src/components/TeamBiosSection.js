import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";
import Josh from "../assets/team/Josh.jpg";
import Jason from "../assets/team/Jason.jpg";
import Alejandro from "../assets/team/Alejandro.jpg";
import Alex from "../assets/team/Alex.png";
import Stacey from "../assets/team/Stacey.jpg";
import Emily from "../assets/team/Emily.jpg";
import Sam from "../assets/team/Sam.png";
import Mel from "../assets/team/Mel.jpeg";
import Meer from "../assets/team/Meer.jpg";

function TeamBiosSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <TeamBios
          items={[
            {
              avatar: Josh,
              name: "Joshua Mendoza",
              role: "Founder & Executive Director",
              bio:
                "Joshua Mendoza is passionate about empowering others to reach their full potential. This passion comes from his own story coming from a low-income background and—with the help of friends, family, and mentors—going on to graduate from Stanford University and working as an engineer in Silicon Valley. He is also passionate about real estate investing and coaches professionals to reconcile their careers with the legacy they wish to leave behind.",
            },
            {
              avatar: Jason,
              name: "Jason Basuil",
              role: "Co-founder & Program Director",
              bio:
                "Jason Basuil graduated from Seattle University with a B.A. in Biology. With the original intention of heading to dental school, he pivoted in his last year of college to pursue a career in tech. He started working as a product specialist at a retail startup in Seattle, but soon realized he wanted to gain more technical expertise. Jason now works as a Software Engineer specializing in frontend technologies. His message to students is that it's never too late to make a change!",
            },
            {
              avatar: Alejandro,
              name: "Alejandro Pérez",
              role: "Chief Financial Officer",
              bio:
                "Alejandro Pérez is a data driven professional with a passion for empowering people and developing teams. Alejandro graduated from Harvard University with a B.A. in Applied Mathematics and a minor in Computer Science, he now works as a data scientist at Lyft. Away from the desk, Alejandro is an avid cyclist, skier, and picnicker.",
            },
            {
              avatar: Alex,
              name: "Alex Hall",
              role: "Brand Manager",
              bio:
                "Alex Hall graduated from Chapman University with a B.S. in Biological Sciences and a minor in Business Administration. He is passionate about precision medicine and works at Genomic Health, a cancer diagnostics company that provides life changing information to patients and physicians. Alex spends his free time hiking, reading, and exploring San Francisco.",
            },
            {
              avatar: Stacey,
              name: "Stacey Zhou",
              role: "Program Manager, Mentorship Program",
              bio:
                "Stacey Zhou graduated from the University of Pennsylvania, where she studied Finance and Operations & Information Management. She currently works as a technology investor at a large private equity firm and previously spent several years in investment banking. In her free time, she loves traveling, skiing, and enjoying a good podcast.",
            },
            {
              avatar: Emily,
              name: "Emily Castañares",
              role: "Program Manager, Mentorship Program",
              bio:
                "Emily works at Apple as a product manager. She graduated from Purdue University with a B.S. in Finance and is currently pursuing a Master’s degree from Northwestern in Data Science. Emily is passionate about tackling social justice issues through both political and non-profit efforts. In her spare time she enjoys going to hiphop dance classes and hanging out with her dog, Indy.",
            },
            {
              avatar: Sam,
              name: "Säm Bagheri",
              role: "",
              bio:
                "Säm graduated from the University of San Diego, where he studied International Business and Strategic Communications. While his professional interests are around strategy and operations, he enjoys and takes pride in supporting various social justice efforts. In his free time, you can find Säm cooking, weight lifting, reading, and observing abstract art.",
            },
            {
              avatar: Mel,
              name: "Mel Demma",
              role: "",
              bio:
                "Melissa Demma graduated from the University of Southern California where she studied Business and Entrepreneurship. She currently works in early-stage venture capital in San Francisco. Melissa loves to travel, read, and try new restaurants in her free time. ",
            },
            {
              avatar: Meer,
              name: "Meer",
              role: "",
              bio:
                "Meer works as a Software Developer with an R & D team at an energy company. He graduated from the University of Regina with a B.Sc. in Computer Science. He is interested in meaningful and purpose-driven work that makes a positive impact. Meer is passionate about empowering others to be their best. He is a fitness enthusiast and loves reading, listening to audiobooks/podcasts, travelling, and learning new things in his spare time.",
            },
          ]}
        ></TeamBios>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;

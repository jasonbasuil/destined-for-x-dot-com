import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";

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
              avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "Joshua Mendoza",
              role: "Founder & Executive Director",
              bio:
                "Joshua Mendoza is passionate about empowering others to reach their full potential. This passion comes from his own story coming from a low-income background and—with the help of friends, family, and mentors—going on to graduate from Stanford University and working as an engineer in Silicon Valley. He is also passionate about real estate investing and coaches professionals to reconcile their careers with the legacy they wish to leave behind.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
              name: "Jason Basuil",
              role: "Co-founder & Director of Product / Curriculum",
              bio:
                "Jason Basuil graduated from Seattle University, where he studied Biology and Psychology, but currently works as a Front End Engineer after attending a coding bootcamp. He's been actively involved with The LEAP Foundation as a leadership coach and has a passion for helping others become their best selves.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Alejandro Pérez",
              role: "Chief Financial Officer",
              bio:
                "Alejandro Pérez is a data driven professional with a passion for empowering people and developing teams. Alejandro graduated from Harvard University with a B.A. in Applied Mathematics and a minor in Computer Science, he now works as a data scientist at Lyft. Away from the desk, Alejandro is an avid cyclist, skier, and picnicker.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Alex Hall",
              role: "Brand Manager",
              bio:
                "Alex Hall graduated from Chapman University with a B.S. in Biological Sciences and a minor in Business Administration. He is passionate about precision medicine and works at Genomic Health, a cancer diagnostics company that provides life changing information to patients and physicians. Alex spends his free time hiking, reading, and exploring San Francisco.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Stacey Zhou",
              role: "Program Manager, Mentorship Program",
              bio:
                "Stacey Zhou graduated from the University of Pennsylvania, where she studied Finance and Operations & Information Management. She currently works as a technology investor at a large private equity firm and previously spent several years in investment banking. In her free time, she loves traveling, skiing, and enjoying a good podcast.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Emily Castañares",
              role: "Program Manager, Mentorship Program",
              bio:
                "Emily works at Apple as a product manager. She graduated from Purdue University with a B.S. in Finance and is currently pursuing a Master’s degree from Northwestern in Data Science. Emily is passionate about tackling social justice issues through both political and non-profit efforts. In her spare time she enjoys going to hiphop dance classes and hanging out with her dog, Indy.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Säm Bagheri",
              role: "",
              bio:
                "Säm graduated from the University of San Diego, where he studied International Business and Strategic Communications. While his professional interests are around strategy and operations, he enjoys and takes pride in supporting various social justice efforts. In his free time, you can find Säm cooking, weight lifting, reading, and observing abstract art.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Nina Gibbs",
              role: "",
              bio:
                "Nina Gibbs is a Stanford graduate from the Product Design program and works in healthcare tech as a UX Designer. She is so excited to help create a great experience for everyone in Destined for X because she believes the program is a unique opportunity for students to learn how to ask for directions in a large city of professional career paths and prototype future possible versions of themselves. She can’t wait to meet all of the attendees and help them navigate their future!",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
          ]}
        ></TeamBios>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;

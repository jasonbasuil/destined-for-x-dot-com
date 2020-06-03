import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Speakers from "./Speakers";
import AliceLiu from "../assets/speakers/AliceLiu.jpeg"
import SabeehaIslam from "../assets/speakers/SabeehaIslam.jpg"
import MaddyRueda from "../assets/speakers/MaddyRueda.jpg"
import ChristianColy from "../assets/speakers/ChristianColy.png"
import AndresMarquez from "../assets/speakers/AndresMarquez.png";
import PriyaGanesan from "../assets/speakers/PriyaGanesan.png";
import MichelleTanaka from "../assets/speakers/MichelleTanaka.png"

function SpeakersSection(props) {
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
        <Speakers
          items={[
            {
              avatar: PriyaGanesan,
              name: "Priya Ganesan",
              bio:
                "Priya Ganesan is a software engineer at Facebook on the Content Integrity team, where she works to proactively detect and take down objectionable content on Facebook. Before joining Facebook, she graduated from Stanford University with a degree in computer science. She interned at Facebook the summer before her senior year of college, and enjoyed her internship so much that she decided to come back – not only back to Facebook, but also back to the same team!",
              company: "Software Engineer - Content Integrity @ Facebook",
            },
            {
              avatar: AndresMarquez,
              name: "Andres Marquez",
              bio:
                "Andres joined Facebook in April 2019 as a Camera Software Engineer with Portal. He was with Intel for almost four years on their Imaging and Camera Technology Group before joining the company. Andres has 10+ years of experience in the computing industry, having previously worked at Edge Access, Qorvo, and Qualcomm. His experience includes FPGA design, embedded Linux, and software development for DSP applications. He is originally from Colombia, where he grew up and completed his BSEE before coming to the US to study his MSEE in Florida. His main interests include camera, computer vision, and artificial intelligence. For fun, Andres enjoys reading, going to the gym, playing sports, and traveling to Colombia.",
              company: "Camera Software Engineer--Portal @ Facebook",
            },
            {
              avatar: ChristianColy,
              name: "Christian Coly",
              bio:
                "Christian joined Facebook two years ago, as an Account Manager in Facebook’s Retail Sales team. Before joining Facebook, Christian worked for Parrot, a global company headquartered in Paris (France) specialized in building consumer and commercial drones. At Parrot, Christian had the opportunity to learn about the consumer electronics business in Europe and North America (specifically Business development, Sales, Product Management and Trainer). Christian was born in Dakar, Senegal (West Africa) and tries to go back home every 2 years.",
              company: "Strategic Account Manager - AR/VR Global Sales @ Facebook",
            },
            {
              avatar: MichelleTanaka,
              name: "Michelle Tanaka",
              bio:
                "Michelle is a Product TPM (Technical Program Manager) in the AR/VR organization, managing end to end program execution. She managed the successful delivery and launch of the Rift S and continues to work on new exciting AR/ VR programs. Prior to Facebook, she worked and shipped products at consumer electronics companies like Nest/ Google and Amazon/Lab126. She has been involved with diversity programs, especially for Women in tech at Facebook and at her previous companies. Outside of work, she run (jogs if you go by definition), plays golf (hacker status) and enjoys trying new restaurants with friends.",
              company: "Product TPM - Technical Program Manager @ Facebook",
            },
            {
              avatar: AliceLiu,
              name: "Alice Liu",
              bio:
                "Alice is currently working at Blend (fintech focused on lending) as a team lead for Product Analytics. Growing up, she didn't have a set idea of what she wanted to study or what career path she wanted to take. That has manifested into a career with different roles ranging from Design to Customer Success to Marketing and Product Management. To navigate those switches, she took advantage of opportunities that came her way and also worked to acquire necessary skills to fill in the gaps. She has also been a voice for Diversity, Equity and Inclusion, leading events and company initiatives to support women's needs and careers in the workplace. In her free time, she writes poetry and volunteers with Full Circle Fund.",
              company: "Product Manager @ Blend",
            },
            {
              avatar: SabeehaIslam,
              name: "Sabeeha Islam",
              bio:
                "Sabeeha Islam is a Sustainability Consultant for Engie Impact, the strategic advisory arm of Engie. She also co-authors her own newsletter, The Emergence Initiative, which curates best-in-class content at the intersection of industrial development, social inclusion, and decarbonization solutions.",
              company: "Sustainability Consultant @ Engie Impact",
            },
            {
              avatar: MaddyRueda,
              name: "Maddy Rueda",
              bio:
                "Maddy is currently a Staffing Services Associate at Google. Formerly a student athlete for Southern Methodist University's Division I Rowing Team, she graduated in 2018 with degrees in Marketing and Sport Management. She is passionate about career development, non-profit engagement, diversity and inclusion. Originally from New England, she is a Boston Bruins fan and an avid skier.",
              company: "Staffing Services Associate @ Google",
            },
          ]}
        ></Speakers>
      </Container>
    </Section>
  );
}

export default SpeakersSection;
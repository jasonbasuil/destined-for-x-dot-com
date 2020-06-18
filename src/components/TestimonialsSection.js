import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Testimonials from "./Testimonials";
import JuanPalominos from "../assets/JuanPalominos.png";
import GiselleMondragon from "../assets/GiselleMondragon.png";
import LibbePhan from "../assets/LibbePhan.jpg";
import BritneyOhanian from "../assets/BritneyOhanian.jpg";
import CiaraRogers from "../assets/CiaraRogers.png";

function TestimonialsSection(props) {
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
        {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6677412852850143233" height="395" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6678130658596007936" height="528" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> */}
        <Testimonials
          items={[
            {
              avatar: "https://res.cloudinary.com/dwgvb9rdh/image/upload/q_auto:low/v1587760083/Freddy_Anene_wfrz4f.jpg",
              name: "Freddy Anene",
              testimonial:
                "Remembering that I am the CEO of my life and that asking questions is important have definitely stuck the most since leaving. Through the program, I realized that what I have to say... there's value to it. I feel super comfortable giving speeches to my club now!",
              company: "D4X 2017 (Junior). Currently @ UC Berkeley.",
            },
            {
              avatar: "https://res.cloudinary.com/dwgvb9rdh/image/upload/q_auto:low/v1587760085/Rachel_Ratnam_p7bhhy.png",
              name: "Rachel Ratnam",
              testimonial:
                "I’m leaving this program as a confident, outgoing person. I know how to network and connect with people, how to approach people and have meaningful conversations. Now I feel like I can go up to anyone to hear their story and share my own. I learned so much from such successful people whom I never even thought I could say hi to. I’ve learned that I am important, and there's nothing that can stop me.",
              company: "D4X 2018 (Senior). Currently @ Carnegie Mellon.",
            },
            {
              avatar: "https://res.cloudinary.com/dwgvb9rdh/image/upload/q_auto:low/v1587760088/D4X-1_hkgqls.jpg",
              name: "Teland La",
              testimonial:
                "The program helped me understand the importance of networking. I realize that it opens the door to so many opportunities like internships or jobs. It also exposed me to several different careers within the tech industry which I can see myself pursuing.  ",
              company: "D4X 2019 (Junior). Incoming @ Stanford University.",
            },
            {
              avatar: GiselleMondragon,
              name: "Giselle Mondragon",
              testimonial: "What really stuck with me is the importance of first impressions and professionalism. I realized the importance of first impressions and communication after the program because I ended up getting a job interview for my school's bookstore. I was happy to know that I was very prepared for the interview and was not as nervous to ask questions or to answer them. I was able to get another interview for another opportunity right after!",
              company: "D4X 2017 (Junior). Currently @ CSU Long Beach"
            },
            {
              avatar: JuanPalominos,
              name: "Juan Palominos",
              testimonial:
                `I've realized that I've changed my mindset. I used to be an intelligent student who was suffering from a lack of confidence. "What's the best thing that can happen?" and "What's the worst thing that can happen?" are some of my favorite phrases now that I ask myself whenever I find myself struggling to decide between two choices. I'm just excited now, excited to find out what else I can do now that I have a more open mindset!`,
              company: "D4X 2017 (Junior). Currently @ Cal Poly SLO.",
            },
            {
              avatar: LibbePhan,
              name: "Libbe Phan",
              testimonial:
                `I'll forever be indebted to D4X. I don't how I can ever repay you all. When I told my friends who were interested in applying about this program, I don't think they really truly understood how much I gained from D4X. Hopefully my friends who ended up in cohort value all the work you guys do.`,
              company: "D4X 2019 (Junior). Currently @ Irvine Valley College.",
            },
            {
              avatar: BritneyOhanian,
              name: "Britney Ohanian",
              testimonial:
                `I learned how to communicate, how to be comfortable being uncomfortable and that I can pursue anything I put my mind to.`,
              company: "D4X 2019 (Junior). Currently @ Antelope Valley College",
            },
            {
              avatar: CiaraRogers,
              name: "Ciara Rogers",
              testimonial:
                `The thing that stuck with me the most is that your pathway is not set in stone. There's more within a pathway. Taking detours and figuring out that you might have not gone the right way is okay.`,
              company: "D4X 2017 (Senior). Currently @ San Jose State University",
            },

          ]}
        ></Testimonials>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;

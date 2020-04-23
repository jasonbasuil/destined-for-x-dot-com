import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import FeaturesSection2 from "./../components/FeaturesSection2";
import FeaturesSection3 from "./../components/FeaturesSection3";
import CtaSection2 from "./../components/CtaSection2";
import { useRouter } from "./../util/router.js";

function ProgramsPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection2
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2020 Virtual Program"
        subtitle="Amidst the COVID-19 crisis, Destined for X will be hosting a virtual program to provide students with valuable life skills as well as the opportunity to network with professionals from various job functions and industries all around Silicon Valley."
      ></HeroSection2>
      <FeaturesSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      ></FeaturesSection2>
      <div style={{textAlign: "center"}}>
        <h3>Overview of 2020 Virtual Sessions</h3>
      </div>
      <br/>
        <div style={{marginLeft: "10%", marginRight: "10%"}}>
          <h4>*Weekly Sessions on Thursdays from 6-7pm PST</h4>
          <ul>
            <li><h5>May 28: The Fastest Path to Your Goals or Career Ambitions</h5></li>
              <ul>
                <li>How to network and create lasting relationships</li>
                <li>Utilizing LinkedIn to your professional advantage</li>
                <li>Conducting informational interviews to figure out if a career if right for you</li>
              </ul>
            <li><h5>June 4: Panel: Learn from Employees at a Top Tech Company like Facebook or Google</h5></li>
            <ul>
              <li>Learn about what it's really like working at a top Silicon Valley company</li>
              <li>What are the different roles at tech companies (from engineering, HR, product management, marketing, and more)</li>
              <li>Learn how these professionals got to where they are today</li>
            </ul>
            <li><h5>June 11: Becoming More Confidently Self-Aware of Your Strengths and Motivations</h5></li>
            <ul>
              <li>Determining what's really important to you through your Core Values</li>
              <li>Exploring your WHY. What it is and why it's an important guide in your life</li>
              <li>Identifying your personal strengths and becoming more confident in your communication with others</li>
            </ul>
            <li><h5>June 18: Panel: Meet with Recruiters and Industry Professionals to Help with Resumes and Job/Internship searching</h5></li>
            <ul>
              <li>When should you start thinking about jobs and internships?</li>
              <li>What can you start doing now as a high school student to set yourself up for job success?</li>
            </ul>
            <li><h5>June 25: Taking Bold Action to Achieve Your Personal Goals</h5></li>
            <ul>
              <li>The power of setting effective goals</li>
              <li>Gain your time back with proper time-management skills & lessening distractions</li>
              <li>What it means to have a mentor and how to find one</li>
            </ul>
            <li><h5>July 2: Panel: Meet with College Admissions Professionals to Answer All Your Questions</h5></li>
            <ul>
              <li>What does it take to get into the college of your dreams?</li>
              <li>How can you attend college for a fraction of the cost?</li>
              <li>What scholarships are available to you?</li>
              <li>How we can support you for the rest of your journey.</li>
            </ul>
          </ul>
        </div>
        <br/>
        <div style={{marginLeft: "10%"}}>*Workshops/panels are subject to change upon availability.</div>
      <HeroSection2
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="2020 Mentorship Program"
        subtitle="Be paired with a professional mentor for continuous support throughout the school year."
      ></HeroSection2>
      <FeaturesSection3
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      ></FeaturesSection3>
      <CtaSection2
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Apply to a 2020 program today."
        subtitle=""
        buttonText="Apply"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/apply");
        }}
      ></CtaSection2>
    </>
  );
}

export default ProgramsPage;

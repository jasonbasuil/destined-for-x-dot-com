import React from "react";
import HeroSection2 from "../components/HeroSection2";
import FeaturesSection2 from "../components/FeaturesSection2";
import CtaSection2 from "../components/CtaSection2";
import SpeakersSection from "../components/SpeakersSection";
import { useRouter } from "../util/router.js";

function VirtualProgramPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection2
        bg="dark"
        textColor="white"
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
        <h2>Overview of 2020 Virtual Sessions</h2>
      </div>
      <br/>
        <div style={{marginLeft: "16%", marginRight: "16%"}}>
          <h4 style={{marginBottom: "20px"}}>* Weekly Sessions on Thursdays from 6-7pm PST</h4>
          <ul>
            <li><h5>May 28 - The Fastest Path to Your Goals or Career Ambitions</h5></li>
              <ul>
                <li>How to network and create lasting relationships</li>
                <li>Utilizing LinkedIn to your professional advantage</li>
                <li>Conducting informational interviews to figure out if a career is right for you</li>
              </ul>
              <br/>
            <li><h5>June 4 - Panel: Learn from Employees at a Top Silicon Valley Tech Company</h5></li>
            <ul>
              <li>Learn about what it's really like working at a top Silicon Valley company</li>
              <li>What are the different roles at tech companies (from engineering, HR, product management, marketing, and more)</li>
              <li>Learn how these professionals got to where they are today</li>
            </ul>
            <br/>
            <li><h5>June 11 - Becoming More Confidently Self-Aware of Your Strengths and Motivations</h5></li>
            <ul>
              <li>Determining what's really important to you through your Core Values</li>
              <li>Exploring your WHY. What it is and why it's an important guide in your life</li>
              <li>Identifying your personal strengths and becoming more confident in your communication with others</li>
            </ul>
            <br/>
            <li><h5>June 18 - Panel: Meet with Recruiters and Industry Professionals to Help with Resumes and Job/Internship searching</h5></li>
            <ul>
              <li>When should you start thinking about jobs and internships?</li>
              <li>What can you start doing now as a high school student to set yourself up for job success?</li>
              <li>What are the top tips and tricks while interviewing for a new job?</li>
            </ul>
            <br/>
            <li><h5>June 25 - Taking Bold Action to Achieve Your Personal Goals</h5></li>
            <ul>
              <li>The power of setting effective goals</li>
              <li>Gain your time back with proper time-management skills & lessening distractions</li>
              <li>What it means to have a mentor and how to find one</li>
            </ul>
            <br/>
            <li><h5>July 2 - Panel: Meet with College Admissions Professionals to Answer All Your Questions</h5></li>
            <ul>
              <li>What does it take to get into the college of your dreams?</li>
              <li>How can you attend college for a fraction of the cost?</li>
              <li>What scholarships are available to you?</li>
              <li>How we can support you for the rest of your journey.</li>
            </ul>
          </ul>
        </div>
        <br/>
        <div style={{marginLeft: "16%", marginBottom: "2%"}}>* Workshops / panels are subject to change upon availability.</div>
      <SpeakersSection 
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Confirmed Speakers"
        subtitle=""
      />
      <CtaSection2
        bg="dark"
        textColor="white"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Our 2020 Virtual Program is currently in session"
        subtitle="We will be planning the 2021 program this coming year. Stay tuned!"
        buttonText="Apply for another program"
        buttonColor="primary"
        buttonOnClick={() => {
          router.push("/apply");
        }}
      ></CtaSection2>
    </>
  );
}

export default VirtualProgramPage;

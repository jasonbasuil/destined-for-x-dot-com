import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link to="/">
              <img src={props.logo} alt="Logo"></img>
            </Link>
          </div>
          <div className="links right">
            {/* <Link to="/about">About</Link> */}
            <Link to="/virtual-program">Programs</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/apply">Apply</Link>
            <Link target="_blank" to="/team" rel="noopener noreferrer">
              Team
            </Link>
          </div>
          <div className="links right">
            <Link to="/volunteer">Volunteer</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="social right">
            <a
              href="https://twitter.com/DestinedForX"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
            </a>
            <a
              href="https://facebook.com/Destined4X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-facebook-f"></i>
              </span>
            </a>
            <a
              href="https://instagram.com/destinedforx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-instagram"></i>
              </span>
            </a>
          </div>
          <div className="copyright left">{props.copyright}</div>
          <div></div>
          <div style={{ maxWidth: "300px", textAlign: "left" }}>
            {props.ein}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;

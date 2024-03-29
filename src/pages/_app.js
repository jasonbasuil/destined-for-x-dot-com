import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import ScholarshipProgramPage from "./scholarship-program";
import VirtualProgramPage from "./virtual-program";
import MentorshipProgramPage from "./mentorship-program";
import TestimonialsPage from "./testimonials";
import ApplyPage from "./apply";
import TeamPage from "./team";
import VolunteerPage from "./volunteer";
// import BlogPage from "./blog";
import DonatePage from "./donate";
import FaqPage from "./faq";
import AuthTypePage from "./authtype";
import { Switch, Route, Router } from "./../util/router.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";
import D4XIcon from "../assets/D4XIcon.png";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://res.cloudinary.com/dwgvb9rdh/image/upload/v1611699473/Screen_Shot_2021-01-26_at_2.16.57_PM_dcavz5.png"
          ></NavbarCustom>
          <MessengerCustomerChat
            pageId="669786999881921"
            appId="768352100668005"
            themeColor="#366ba7"
            loggedInGreeting="Hi! Have a question? We're here to help."
            loggedOutGreeting="Hi! Have a question? We're here to help."
          />
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route 
              exact 
              path="/scholarship-program"
              component={ScholarshipProgramPage}
            />
            <Route
              exact
              path="/virtual-program"
              component={VirtualProgramPage}
            />
            <Route
              exact
              path="/mentorship-program"
              component={MentorshipProgramPage}
            />
            <Route exact path="/testimonials" component={TestimonialsPage} />
            <Route exact path="/apply" component={ApplyPage} />
            {/* <Route exact path="/blog" component={BlogPage} /> */}
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/volunteer" component={VolunteerPage} />
            <Route exact path="/donate" component={DonatePage} />
            <Route exact path="/faq" component={FaqPage} />
            <Route exact path="/auth/:type" component={AuthTypePage} />
            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>
          <Footer
            bg="light"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            description=""
            copyright="© 2021 Destined for X."
            ein="Destined for X is a registered 501(c)(3) public charity. EIN: 82-1227489. Donations are tax-deductible."
            logo={D4XIcon}
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;

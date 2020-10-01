import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import VirtualProgramPage from "./virtual-program";
import MentorshipProgramPage from "./mentorship-program";
import MiamiProgramPage from "./miami-program";
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
            logo="//static1.squarespace.com/static/587dade6b3db2bee3e358563/t/5e2a80faa14fd526ec94b4d8/1584500907855/?format=1500w"
          ></NavbarCustom>
          <MessengerCustomerChat
            pageId="669786999881921"
            appId="768352100668005"
            themeColor="#366ba7"
            greetingDialogDisplay="hide"
          />
          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

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

            <Route exact path="/miami-program" component={MiamiProgramPage} />

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
            copyright="© 2020 Destined for X."
            ein="Destined for X is a registered 501(c)(3) public charity. EIN: 82-1227489. Donations are tax-deductible."
            logo={D4XIcon}
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;

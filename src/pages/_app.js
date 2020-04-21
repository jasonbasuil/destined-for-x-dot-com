import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import ProgramsPage from "./programs";
import TestimonialsPage from "./testimonials";
import ApplyPage from "./apply";
import TeamPage from "./team";
import VolunteerPage from "./volunteer";
import DonatePage from "./donate";
import FaqPage from "./faq";
import AuthTypePage from "./authtype";
import { Switch, Route, Router } from "./../util/router.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";
import D4XIcon from "../assets/D4XIcon.png"

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

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/programs" component={ProgramsPage} />

            <Route exact path="/testimonials" component={TestimonialsPage} />

            <Route exact path="/apply" component={ApplyPage} />

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
            copyright="© 2020 Destined for X"
            logo={D4XIcon}
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;

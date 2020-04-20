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

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
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
            description="A short description of what you do here"
            copyright="© 2019 Company"
            logo="https://uploads.divjoy.com/logo.svg"
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;

import React from "react";
import WelcomingSection from "./welcomingSection";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import MyProjects from "./MyProjects";

function Main() {
    return (
        <React.Fragment>
            <WelcomingSection />
            <AboutMe />
            <Skills />
            <MyProjects />
            <Contact />
            <Footer />
        </React.Fragment>
    );
}

export default Main;

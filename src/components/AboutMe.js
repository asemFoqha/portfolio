import React from "react";
import img from "../images/ana.jpeg";
import zaid from "../data/Asem_CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";

AOS.init();

function AboutMe() {
  return (
    <section id="about-me" className="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>

        <div className="about-content">
          <div data-aos="fade-right" className="left">
            <img src={img} alt="" />
          </div>
          <div data-aos="fade-left" className="right">
            <div className="text">I'm Asem Alfoqha ...</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis tenetur asperiores praesentium repellendus sit.
              Perferendis, quam fuga. Iusto ipsam corrupti sit voluptatum? Eius
              saepe libero dolores dignissimos necessitatibus quo veniam sit
              deserunt alias quas. Consectetur eveniet ipsum doloremque iste id
              porro unde, excepturi a corrupti consequatur minima fuga quaerat
              voluptas?
            </p>
            <a href={zaid} download target="_blank" className="cv-download">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

import React from "react";
import "../styles/skills.css";
import "../styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="max-width">
                <h2 className="title">My Skills</h2>
                <div className="skills-content">
                    <div data-aos="fade-up" className="skills__left">
                        <div className="text">
                            My hard skills {"&"} experiences.
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Sequi ipsum totam doloribus sed dolorem
                            distinctio repellendus sit maxime! Totam repellat
                            enim doloremque asperiores ratione, omnis animi
                            minus? Numquam error nisi debitis dolores, possimus
                            tempore! Fuga deleniti maiores, vitae a qui tempore
                            aspernatur tempora voluptates quos dolore cum
                            necessitatibus neque, laboriosam aliquam voluptatem
                            doloribus quia voluptas eius dignissimos
                            reprehenderit ut impedit? Similique laborum saepe
                            tenetur blanditiis mollitia consequuntur ullam. Ad,
                            quae!
                        </p>
                    </div>

                    <div data-aos="fade-down" className="skills__right">
                        <div className="persentage">
                            HTML <span>90%</span>
                        </div>

                        <div className="line html"></div>

                        <div className="persentage">
                            React<span>60%</span>
                        </div>

                        <div className="line react"></div>

                        <div className="persentage">
                            CSS<span>80%</span>
                        </div>

                        <div className="line css"></div>

                        <div className="persentage">
                            JavaScript<span>75%</span>
                        </div>

                        <div className="line js"></div>

                        <div className="persentage">
                            OPP<span>60%</span>
                        </div>

                        <div className="line opp"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

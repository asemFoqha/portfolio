import React, { useState } from "react";
import image from "../images/imagesArray";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../styles/projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function MyProjects() {
    let [index, setIndex] = useState(0);
    let length = image.length;

    const handelClick = (e) => {
        setIndex(index === 0 ? length - 1 : index - 1);
        console.log(index);
    };

    return (
        <section id="projects" className="my-projects">
            <div className="max-width">
                <h2 className="projects-title">Some of my projects</h2>
                <div data-aos="zoom-in" className="projects-content">
                    <button className="arrows left-arrow" onClick={handelClick}>
                        <AiOutlineArrowLeft className="arrow" />
                    </button>
                    <button
                        className="arrows right-arrow"
                        onClick={() => {
                            setIndex(index === length - 1 ? 0 : index + 1);
                        }}
                    >
                        <AiOutlineArrowRight className="arrow " />
                    </button>
                    <img src={image[index]} alt="zaid" />
                </div>
            </div>
        </section>
    );
}

export default MyProjects;

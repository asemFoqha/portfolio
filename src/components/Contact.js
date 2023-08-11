import React, { useState } from "react";
import db from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import Joi from "joi-browser";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.css";

AOS.init();

function Contact() {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        title: "",
        message: "",
    });

    const handelSubimt = (e) => {
        e.preventDefault();

        db.collection("contacts two")
            .add({
                name: contact.username,
                email: contact.email,
                title: contact.title,
                message: contact.message,
            })
            .then(() => {
                toast.success(
                    "thanks " +
                        contact.username +
                        ", your message has been submited 😍"
                );
            })
            .catch((error) => {
                toast.error("an error occur 💔");
            });

        setContact({
            username: "",
            email: "",
            title: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="contact">
            <ToastContainer />
            <div className="max-width">
                <h2 className="title">Contact</h2>

                <div className="contact-content">
                    <div data-aos="flip-left" className="contact-left">
                        <div className="contact-title">Get in Touch</div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Dignissimos minus quasi sunt, ratione eaque
                            eligendi delectus. Impedit minus laborum, eligendi
                            et modi vel asperiores consectetur eius amet illum
                        </p>

                        <div className="info name">
                            <i className="fa fa-user"></i>
                            <div>
                                <h2>Name</h2>
                                <div>Asem alfoqha</div>
                            </div>
                        </div>
                        <div className="info address">
                            <i className="fa fa-map-marker"></i>
                            <div>
                                <h2>Address</h2>
                                <div>Amman, alyadodah</div>
                            </div>
                        </div>
                        <div className="info email">
                            <i className="fa fa-envelope"></i>
                            <div>
                                <h2>Email</h2>
                                <div>asem.sh.foqha@gmail.com</div>
                            </div>
                        </div>
                        <div className="info">
                            <i className="fa fa-mobile"></i>
                            <div>
                                <h2>Phone Number</h2>
                                <div>0786458424</div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="flip-up" className="contact-right">
                        <form onSubmit={handelSubimt}>
                            <div className="form__header">Message me</div>
                            <div className="felids">
                                <div className="felid form-name">
                                    <input
                                        type="text"
                                        value={contact.username}
                                        onChange={(e) =>
                                            setContact({
                                                ...contact,
                                                username: e.target.value,
                                            })
                                        }
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="felid form-email">
                                    <input
                                        type="text"
                                        value={contact.email}
                                        onChange={(e) =>
                                            setContact({
                                                ...contact,
                                                email: e.target.value,
                                            })
                                        }
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="felid form-title">
                                <input
                                    type="text"
                                    value={contact.title}
                                    onChange={(e) =>
                                        setContact({
                                            ...contact,

                                            title: e.target.value,
                                        })
                                    }
                                    placeholder="Title"
                                />
                            </div>
                            <div className="felid form-message">
                                <textarea
                                    cols="30"
                                    rows="10"
                                    value={contact.message}
                                    onChange={(e) =>
                                        setContact({
                                            ...contact,

                                            message: e.target.value,
                                        })
                                    }
                                    placeholder="Message..."
                                ></textarea>
                            </div>
                            <div className="subitm__button">
                                <button type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

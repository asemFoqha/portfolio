import React from "react";
import "../styles/footer.css";

function Footer() {
    return (
        <section className="footer">
            <div className="max-width">
                <div className="footer-content">
                    <div className="footer__left">
                        Created <span>BY </span>
                        Asem
                    </div>
                    <div className="footer__right">
                        <i className="fa fa-copyright"></i>
                        2021 all rights reserved
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;

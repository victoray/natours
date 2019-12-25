import React from "react";
import logo from "../statics/img/logo-green-2x.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="" className="footer__logo"/>
            </div>

            <div className="row u-margin-top-big">
                <div className="col-1-of-2">
                    <ul className="footer__list">
                        <li className="footer__item"><a href={""} className={"footer__link"}>Company</a></li>
                        <li className="footer__item"><a href={""} className={"footer__link"}>Contact Us</a></li>
                        <li className="footer__item"><a href={""} className={"footer__link"}>Careers</a></li>
                        <li className="footer__item"><a href={""} className={"footer__link"}>Privacy Policy</a></li>
                        <li className="footer__item"><a href={""} className={"footer__link"}>Terms</a></li>
                    </ul>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Designed by Jonas Schmedtmann. Built by
                        <a href={"https://github.com/victoray"} target={"_blank"}
                           className={"footer__link"}>&nbsp; Victor A.</a>
                        &nbsp; Copyright &copy; 2020
                    </p>
                </div>
            </div>
        </footer>
    )
};


export default Footer;
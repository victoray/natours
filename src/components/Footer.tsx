import React from "react";
import logo2x from "../statics/img/logo-green-2x.png";
import logo1x from "../statics/img/logo-green-1x.png";
import logoSmall1x from "../statics/img/logo-green-small-1x.png"
import logoSmall2x from "../statics/img/logo-green-small-2x.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <picture className="footer__logo">
                    <source srcSet={`${logoSmall2x} 2x, ${logoSmall1x} 1x`} media={"(max-width: 37.5em)"}/>
                    <img srcSet={`${logo2x} 2x, ${logo1x} 1x`} alt=""/>
                </picture>

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
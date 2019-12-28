import React from "react";
import nat8 from "../statics/img/nat-8.jpg";
import nat9 from "../statics/img/nat-9.jpg";

const Popup = () => {
    return (
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className={"popup__left"}>
                    <img className={"popup__image"} src={nat8} alt={""}/>

                    <img className={"popup__image"} src={nat9} alt={""}/>
                </div>
                <div className={"popup__right"}>
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className={"heading-secondary u-margin-bottom-small"}>start booking now</h2>
                    <h3 className={"heading-tertiary u-margin-bottom-small"}>Important &ndash; Read terms</h3>

                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="" className="btn btn--green">Book now &rarr; </a>
                </div>
            </div>
        </div>
    )
};

export default Popup;
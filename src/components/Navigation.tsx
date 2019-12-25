import React from "react";

const Navigation = () => {
    return (
        <div className="navigation">
            <input type="checkbox" id={"navi-toggle"} className="navigation__checkbox"/>
            <label htmlFor="navi-toggle" className="navigation__label">
                <span className={"navigation__icon"}></span>
            </label>

            <div className="navigation__background">
                &nbsp;
            </div>

            <nav className="navigation__nav">
                <ol className="navigation__list">
                    <li className="navigation__item"><a href="" className="navigation__link">About Natours</a></li>
                    <li className="navigation__item"><a href="" className="navigation__link">Your benefits</a></li>
                    <li className="navigation__item"><a href="" className="navigation__link">popular tours</a></li>
                    <li className="navigation__item"><a href="" className="navigation__link">stories</a></li>
                    <li className="navigation__item"><a href="" className="navigation__link">book now</a></li>
                </ol>
            </nav>
        </div>
    )
};

export default Navigation;
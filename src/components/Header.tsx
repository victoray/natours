import React from "react";
import logoWhite from "../statics/img/logo-white.png"

const Header = ()=> {
    return (
        <header className={"header"}>
            <div className={"logo-box"}>
                <img src={logoWhite} alt={""} className={"logo"}/>
            </div>
            <div className={"text-box"}>
                <h1 className={"heading-primary"}>
                    <span className={"heading-primary-main"}>Outdoors</span>
                    <span className={"heading-primary-sub"}> is where life happens</span>
                </h1>
                <a href={"#"} className={"btn btn-white btn-animated"}>Discover Our Tours</a>
            </div>
        </header>
    )
};

export default Header;
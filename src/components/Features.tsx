import React from "react";


interface FeatureBox {
    heading: string;
    icon: string;
}
const FeatureBox = ({heading, icon}: FeatureBox) => {
    return  (
        <div className="feature-box">
            <i className={"feature-box__icon icon-basic-" + icon}/>
            <h3 className="heading-tertiary">
                {heading}
            </h3>
            <p className="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </p>
        </div>
    )
};
const Features = ()=> {
    return (
        <section className={"section-features"}>
            <div className="row">
                <div className="col-1-of-4">
                    <FeatureBox heading={"Explore the world"} icon={"world"}/>
                </div>
                <div className="col-1-of-4">
                    <FeatureBox heading={"Meet Nature"} icon={"compass"}/>
                </div>
                <div className="col-1-of-4">
                    <FeatureBox heading={"find your way"} icon={"map"}/>
                </div>
                <div className="col-1-of-4">
                    <FeatureBox heading={"live a healthier life"} icon={"heart"}/>
                </div>
            </div>
        </section>
    )
};

export default Features;
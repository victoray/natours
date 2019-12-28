import React from "react";
import nat1 from "../statics/img/nat-1-large.jpg";
import nat1Small from "../statics/img/nat-1.jpg";
import nat2 from "../statics/img/nat-2-large.jpg";
import nat2Small from "../statics/img/nat-2.jpg";
import nat3 from "../statics/img/nat-3-large.jpg";
import nat3Small from "../statics/img/nat-3-large.jpg";


export const About = () => {
    return (
        <section className="section-about">
            <div className="u-center-text">
                <h2 className="heading-secondary u-margin-bottom-big u-margin-top-big">
                    Exciting Tours for adventurous people.
                </h2>
            </div>
            <div className={"row"}>
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        You are going to fall in love with nature.
                    </h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ornare arcu odio ut sem nulla pharetra diam. Purus faucibus ornare
                        suspendisse sed nisi lacus sed. Nibh venenatis cras sed felis eget velit aliquet sagittis id.
                        Varius sit amet
                        mattis vulputate enim.
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Live Adventures like you have never had before
                    </h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua.
                    </p>
                    <button className="btn btn--green">
                        Learn More &rarr;
                    </button>

                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img srcSet={`${nat1Small} 300w, ${nat1} 1000w`}
                             sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                             alt="Photo 1"
                             className="composition__photo composition__photo--p1"
                             src={nat1}/>

                        <img srcSet={`${nat2Small} 300w, ${nat2} 1000w`}
                             sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                             alt="Photo 2"
                             className="composition__photo composition__photo--p2"
                             src={nat2}/>

                        <img srcSet={`${nat3Small} 300w, ${nat3} 1000w`}
                             sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                             alt="Photo 3"
                             className="composition__photo composition__photo--p3"
                             src={nat3}/>
                        {/*<img src={nat1} alt="" className="composition__photo composition__photo--p1"/>*/}
                        {/*<img src={nat2} alt="" className="composition__photo composition__photo--p2"/>*/}
                        {/*<img src={nat3} alt="" className="composition__photo composition__photo--p3"/>*/}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;
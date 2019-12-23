import React from "react";
import nat8 from "../statics/img/nat-8.jpg";
import nat9 from "../statics/img/nat-9.jpg";


// @ts-ignore
import videoMp4 from "../statics/img/video.mp4";

// @ts-ignore
import videoWebm from "../statics/img/video.webm";

interface Story {
    name: string;
    heading: string;
    text: string;
    img: string;
}

const Story = ({name, heading, text, img}: Story) => {
    return (
        <div className={"story"}>
            <figure className="story__shape">
                <img className={"story__image"} src={img} alt={""}/>
                <figcaption className={"story__caption"}>{name}</figcaption>
            </figure>
            <div className="story__text">
                <h3 className={"heading-tertiary u-margin-bottom-small"}>
                    {heading}
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    )
};


const Stories = () => {
    return (
        <section className={"section-stories"}>
            <div className="bg-video">
                <video className="bg-video__content" autoPlay loop muted>
                    <source src={videoMp4} type={"video/mp4"}/>
                    <source src={videoWebm} type={"video/webm"}/>
                </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    we make people genuinely happy
                </h2>
            </div>
            <div className={"row"}>
                <Story name={"Mary Smith"} heading={"I had the best week with my family"} text={""} img={nat8}/>
                <Story name={"John Cole"} heading={"WOW! my life is completely different"} text={""} img={nat9}/>
            </div>

            <div className="u-center-text">
                <a className="btn btn--green">Read All Stories &rarr;</a>
            </div>
        </section>
    )
};

export default Stories;
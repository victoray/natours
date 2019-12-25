import React from "react";
import Popup from "./Popup";

interface ToursCard {
    heading: string;
    details: string[];
    price: number;
    id: number;
}

const ToursCard = ({heading, details, price, id}: ToursCard) => {
    return (
        <div className={"card"}>
            <div className="card__side card__side--front">
                <div className={"card__img card__img--" + id}/>
                <h4 className="card__heading">
                              <span className={"card__heading-span card__heading-span--" + id}>
                                  {heading}
                              </span>
                </h4>

                <div className="card__details">
                    <ul>
                        {details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                </div>
            </div>
            <div className={"card__side card__side--back card__side--back-" + id}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">${price}</p>
                        <a href={"#popup"} className={"btn btn--white"}>Book now!</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Tours = () => {
    return (
        <section className="section-tours" id="section-tours">
            <div className="u-center-text">
                <h2 className="heading-secondary u-margin-bottom-big">
                    Most Popular tours
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <ToursCard heading={"the sea explorer"}
                               details={["3 day tour", "up to 30 people", "2 tour guides", "Sleep in cozy hotels", "Difficulty: easy"]}
                               price={297} id={1}/>
                </div>
                <div className="col-1-of-3">
                    <ToursCard heading={"the forest hiker"}
                               details={["5 day tour", "up to 50 people", "5 tour guides", "Sleep in cozy hotels", "Difficulty: medium"]}
                               price={500} id={2}/>
                </div>
                <div className="col-1-of-3">
                    <ToursCard heading={"the snow adventurer"}
                               details={["7 day tour", "up to 100 people", "10 tour guides", "Sleep in cozy hotels", "Difficulty: hard"]}
                               price={1200} id={3}/>
                </div>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <a className="btn btn--green">Discover all tours</a>
            </div>
        </section>
    )
};

export default Tours;
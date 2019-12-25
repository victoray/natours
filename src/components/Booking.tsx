import React from "react";

const Booking = () => {
    return (
        <section className="section-book">
            <div className={"row"}>
                <div className="book">
                    <div className="book__form">
                        <form className={"form"}>
                            <div className="u-margin-bottom-small">
                                <h2 className="heading-secondary">
                                    start booking now
                                </h2>
                            </div>
                            <div className="form__group">
                                <input type={"text"} className={"form__input"} placeholder={"Full Name"} id={"name"}
                                       required autoComplete={"off"}/>
                                <label htmlFor="name" className="form__label">Full Name</label>
                            </div>
                            <div className="form__group">
                                <input type={"email"} className={"form__input"} placeholder={"Email"} id={"email"}
                                       required autoComplete={"off"}/>
                                <label htmlFor="email" className="form__label">Email</label>
                            </div>
                            <div className="form__group">
                                <div className="form__radio-group">
                                    <input type={"radio"} className={"form__radio-input"} id={"small"} required
                                           name={"tour"}/>
                                    <label htmlFor="small" className="form__radio-label">
                                        <span className="form__radio-button"/>
                                        Small tour group
                                    </label>
                                </div>
                                <div className="form__radio-group u-margin-bottom-medium">
                                    <input type={"radio"} className={"form__radio-input"} id={"large"} required
                                           name={"tour"}/>
                                    <label htmlFor="large" className="form__radio-label">
                                        <span className="form__radio-button"/>
                                        Large tour group
                                    </label>
                                </div>
                            </div>

                            <div className="form__group">
                                <button className="btn btn--green">
                                    Next Step &rarr;
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Booking;
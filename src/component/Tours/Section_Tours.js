import React, { Component } from 'react'



export default class Section_Tours extends Component {
    render() {
        return (
            <div>
            <section className="section-tours">
                        <div className="u-center-text u-margin-botton-big">
                            <h2 className="heading-secondary">
                                Up coming tours
                            </h2>
                        </div>
                        <div className="row">

                            {/* Card One */}
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front wow fadeInLeft" data-wow-dutarion="1s" data-wow-delay=".9s">
                                        <div className="card__picture card__picture--1">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--1">
                                                Badagry Xmas plore
                                            </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>2 days tours</li>
                                                <li>One night in whispering palm</li>
                                                <li>Pedal boating</li>
                                                <li>First Story Building</li>
                                                <li>Bicycle Boaty</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p class="card__price-only">Only</p>
                                                <p class="card__price-value">#40000</p>
                                            </div>
                                            <a href="tel: +2349018903141" class="btn btn__white margin-top-s">call to book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Card One */}

                            {/* Card Two */}
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <div className="card__picture card__picture--2">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--2">
                                                Southwest Tour
                                            </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <ul>
                                                    <li>7 Days Tour</li>
                                                    <li>Mountain Hiking</li>
                                                    <li>Swimming</li>
                                                    <li>Camp Fire</li>
                                                    <li>Visit To Erinjiyan Ekiti</li>
                                                </ul>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card__side card__side--back card__side--back-2">
                                            <div className="card__cta">
                                                <div class="card__price-box">
                                                    <p class="card__price-only">Only</p>
                                                    <p class="card__price-value">#25000</p>
                                                </div>
                                                <a href="tel: +2349018903141" class="btn btn__white margin-top-s">call to book</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Card Two */}

                            {/* Card Three */}
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <div className="card__picture card__picture--3">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--3">
                                                Beach Hangout
                                            </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>A Day Tour</li>
                                                <li>Swimming</li>
                                                <li>Kayaking</li>
                                                <li>Boat Ride</li>
                                                <li>Pedal Boating</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card__side card__side--back card__side--back-3">
                                            <div className="card__cta">
                                                <div class="card__price-box">
                                                    <p class="card__price-only">Only</p>
                                                    <p class="card__price-value">#20000</p>
                                                </div>
                                                <a href="tel: +2349018903141" class="btn btn__white margin-top-s">call to book</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Of Card Three*/}
                        </div>
                        {/*Button*/}
                        <div class="u-center-text u-margin-top-huge">
                            <a href='/tours'className="btn btn__green">Discover all tours</a>
                        </div>
                        {/* End Of Button*/}
                    </section>
                    {/*End Of Card Section*/}

            </div>
        )
    }
}

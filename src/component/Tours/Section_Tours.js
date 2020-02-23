import React, { Component } from 'react';
import {Link} from 'react-router-dom'



export default class Section_Tours extends Component {
    
    state = {
        title: 'Badagry Xmas plore',
        title2: 'Southwest Tour',
        title3: 'Beach Hangout',
        lists: [ '2 days tours', 'One night in whispering palm', 'Pedal boating', 'First Story Building', 'Bicycle Boaty'],
        lists2: [ '7 Days Tour', ' Mountain Hiking', ' Swimming', 'Camp Fire', ' Visit To Erinjiyan Ekiti'],
        lists3: [ 'A Day Tour', 'Swimming', 'Kayaking', ' Boat Ride', ' Pedal Boating'],
        price: '40000',
        price2: '25000',
        price3: '20000'
    };
    
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
                                    <div className="card__side card__side--front wow fadeInLeft" data-wow-dutarion="1s" data-wow-delay=".8s">
                                        <div className="card__picture card__picture--1">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--1">
                                                {this.state.title}
                                            </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                               {this.state.lists.map(list =><li>{list}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p class="card__price-only">Only</p>
                                                <p class="card__price-value">#{this.state.price}</p>
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
                                                {this.state.title2}
                                            </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <ul>
                                                    {this.state.lists2.map(list => <li>{list}</li>)}
                                                </ul>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card__side card__side--back card__side--back-2">
                                            <div className="card__cta">
                                                <div class="card__price-box">
                                                    <p class="card__price-only">Only</p>
                                                    <p class="card__price-value">#{this.state.price2}</p>
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
                                <div className="card" >
                                    <div className="card__side card__side--front wow fadeInRight" data-wow-dutarion="1s" data-wow-delay="1s">
                                        <div className="card__picture card__picture--3">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--3">
                                                {this.state.title3}
                                            </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                               {this.state.lists3.map(list => <li>{list}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card__side card__side--back card__side--back-3">
                                            <div className="card__cta">
                                                <div class="card__price-box">
                                                    <p class="card__price-only">Only</p>
                                                    <p class="card__price-value">#{this.state.price3}</p>
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
                            <a componenetClass={Link} to='/tours'className="btn btn__green">Discover all tours</a>
                        </div>
                        {/* End Of Button*/}
                    </section>
                    {/*End Of Card Section*/}

            </div>
        )
    }
}

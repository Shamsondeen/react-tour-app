import React, { Component } from 'react'
import n2 from '../../assets/n2.jpeg';
import n6 from "../../assets/n6.jpg";
import n1 from "../../assets/n1.jpg";
import './About_Section.css';

export default class About_Section extends Component {
    render() {
        return (
            <div>
            <section className="section-about">
                        <div className="u-center-text u-margin-botton-big">
                            <h2 class="heading-secondary">
                                Exciting tours for adventurous people
                            </h2>
                        </div>

                        <div className="row">
                            <div className="col-1-of-2">
                                <h3 class="heading-tertiary u-margin-botton-small">You're going to fall in love with nature</h3>
                                <p class="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis voluptatibus molestiae impedit expedita beatae
                                    aspernatur ad quam mollitia praesentium repellat quo laborum dolorem?
                                </p>

                                <h3 class="heading-tertiary u-margin-botton-small">Live adventures like you never have before</h3>
                                <p class="paragraph">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam facere molestias sequi quis consequuntur, officia quia!
                                </p>
                            </div>

                            <div className="col-1-of-2">
                                <div className="composition">
                                    <img src={n1} alt="Photo 1" class="composition__photo composition__photo--p1 wow fadeIn animated" data-wow-dutarion="1s" data-wow-delay=".4s" />
                                    <img src={n2} alt="Photo 2" class="composition__photo composition__photo--p2  wow fadeIn animated" data-wow-dutarion="1s" data-wow-delay=".6s" />
                                    <img src={n6} alt="Photo 3" class="composition__photo composition__photo--p3 wow fadeIn animated" data-wow-dutarion="1s" data-wow-delay=".9s" />
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}


import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../ika.png';
import sharme from "../assets/ika.jpg";
import n1 from "../assets/n1.jpg";
import video from "../assets/video.mp4";
import videos from "../assets/video.webm";
import n2 from "../assets/n2.jpeg";
import n6 from "../assets/n6.jpg";
import styled from 'styled-components';


const Home = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');

        return (
            <div>
                <header className="header">
                    <div className="header__logo-box">
                        <Link to="/">
                            <img src={logo} alt="store" className="header__logo" />
                        </Link>
                    </div>
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary__main">Outdoors</span>
                            <span class="heading-primary__sub">is where lifes happens</span>
                        </h1>

                        <Link to="/tours">
                        <a className="btn btn__animated btn__white">Discover our tours</a>
                        </Link>
                    </div>
                </header>
                <main>
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

                    <section className="section-features">
                        <div className="row">
                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    <i class="feature-box__icon icon-basic-world"></i>
                                    <h3 class="heading-tertiary u-margin-botton-small">Explore the world</h3>
                                    <p class="feature-box__text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus repellat qui

                                    </p>
                                </div>
                            </div>

                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    <i class="feature-box__icon icon-basic-compass"></i>
                                    <h3 class="heading-tertiary u-margin-botton-small">Meet Nature</h3>
                                    <p class="feature-box__text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus repellat qui

                                    </p>
                                </div>
                            </div>

                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    <i class="feature-box__icon icon-basic-map"></i>
                                    <h3 class="heading-tertiary u-margin-botton-small">Find your way</h3>
                                    <p class="feature-box__text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus repellat qui

                                    </p>
                                </div>
                            </div>

                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    <i class="feature-box__icon icon-basic-heart"></i>
                                    <h3 class="heading-tertiary u-margin-botton-small">Live a healthier life</h3>
                                    <p class="feature-box__text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus repellat qui

                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

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
                            <Link to="/tours">
                            <a className="btn btn__green">Discover all tours</a>
                            </Link>
                        </div>
                        {/* End Of Button*/}
                    </section>
                    {/*End Of Card Section*/}


                    {/*Story Section*/}

                    <section className="section-stories">
                        <div className="bg-video">
                            <video className="bg-video__content" autoPlay muted loop>
                                <source src={video} type="video/mp4" />
                                <source src={videos} type="video/webm" /> Your browser is not supported
                       </video>
                        </div>
                        <div className="u-center-text u-margin-botton-big">
                            <h2 class="heading-secondary">
                                We make people genuinely happy
                            </h2>
                        </div>

                        <div className="row">
                            <div className="story">
                                <figure className="story__shape">
                                    <img src={sharme} alt=" Person on tour" class="story__img" />
                                    <figcaption className="story__caption">Sharme Ika</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 class="heading-tertiary u-margin-botton-small">I had the best week ever with my family</h3>
                                    <p className="p_caption"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit, aliquid reprehenderit voluptate
                                        aliquam praesentium saepe quaerat velit ipsa ab. Iusto maxime saepe quaerat velit ipsa ab. Iusto
                        maxime tempora ipsa. Voluptas numquam illum sequi aut magnam?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="story">
                                <figure className="story__shape">
                                    <img src={sharme} alt=" Person on tour" class="story__img" />
                                    <figcaption className="story__caption">Sharme Ika</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 class="heading-tertiary u-margin-botton-small">I had the best week ever with my family</h3>
                                    <p className="p_caption"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit, aliquid reprehenderit voluptate
                                        aliquam praesentium saepe quaerat velit ipsa ab. Iusto maxime saepe quaerat velit ipsa ab. Iusto
                        maxime tempora ipsa. Voluptas numquam illum sequi aut magnam?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="u-center-text u-margin-top-medium">
                            <Link to="/story" className="btn-text">Read all stories &rarr;
                            </Link>
                        </div>
                    </section>
                    {/* End Of Story Section*/}

                    {/* Booking Section*/}
                    <section className="section-book">
                        <div className="row">
                            <div className="book">
                                <div className="book__form">
                                    <form action="" className="form">
                                        <div className="u-margin-botton-medium">
                                            <h2 class="heading-secondary">
                                                Newsletter
                                        </h2>
                                        </div>

                                         <div className="form__group">
                                        <input type="text"  placeholder="Full name" name="name"  onChange={(event) => setName(event.target.value)} required="required" />
                                        <label HtmlFor="name" className="form__label">Full name</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="Email" placeholder="Email Address"  onChange={(event) => setEmail(event.target.value)}  required />
                                        <label HtmlFor="Email" className="form__label">Email address</label>
                                    </div>
                                        <button className="btn btn_green">Submit</button>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Of Booking Section*/}
                </main>

               
            </div>
        )
}

    export default Home;





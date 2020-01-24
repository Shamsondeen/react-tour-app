import React, { Component } from 'react';
import './About_Section.css';
import Footer from '../Footer/Footer';

const About = () => {
        return (
            <div>
                <section className="section-about">
                    <div className="u-center-text u-margin-botton-big">
                        <h5 className="heading-secondary">
                            Tour Nature
                        </h5>
                        <h3 className="heading-tertiary-2">
                        Is a Nigeria based tour organizing company who help you <i class="feature-box__icon" class="far fa-hand-point-down"></i> 
                        </h3>
                    </div>
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
            </div>
        )
    }
    export default About;

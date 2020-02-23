import React, { Component } from 'react'
import './Features.css';

export default class Features_Section extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="section-features">
                        <div className="row">
                            <div className="col-1-of-4">
                                <div className="feature-box wow pulse">
                                    <i class="feature-box__icon icon-basic-world"></i>
                                    <h3 class="heading-tertiary u-margin-botton-small">Explore the world</h3>
                                    <p class="feature-box__text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus repellat qui

                                    </p>
                                </div>
                            </div>

                            <div className="col-1-of-4">
                                <div className="feature-box wow pulse">
                                    <i class="feature-box__icon icon-basic-compass"></i>
                                    <h3 class="heading-tertiary u-margin-botton-small">Meet Nature</h3>
                                    <p class="feature-box__text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus repellat qui

                                    </p>
                                </div>
                            </div>

                            <div className="col-1-of-4">
                                <div className="feature-box wow pulse">
                                    <i class="feature-box__icon icon-basic-map"></i>
                                    <h3 class="heading-tertiary u-margin-botton-small">Find your way</h3>
                                    <p class="feature-box__text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus repellat qui

                                    </p>
                                </div>
                            </div>

                            <div className="col-1-of-4">
                                <div className="feature-box wow pulse">
                                    <i class="feature-box__icon icon-basic-heart"></i>
                                    <h3 class="heading-tertiary u-margin-botton-small">Live a healthier life</h3>
                                    <p class="feature-box__text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti veniam ducimus repellat qui

                                    </p>
                                </div>
                            </div>
                        </div>
                    </section> 
            </React.Fragment>
        )
    }
}



import React, { Component } from 'react'
import sharme from "../../assets/ika.jpg";
import video from "../../assets/video.mp4";
import videos from "../../assets/video.webm";
import './Story.css';

export default class Story_Section extends Component {
    render() {
        return (
            <div>
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
                            <a href="/story" className="btn-text">Read all stories &rarr;
                            </a>
                        </div>
                    </section>
                    {/* End Of Story Section*/}
            </div>
        )
    }
}

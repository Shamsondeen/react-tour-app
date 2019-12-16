import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../ika.png';

const Footer = () => {
        return (
            <div>
                {/* Footer */}
                <footer className="footer">
                    <div className="footer__logo-box">
                        <a href="/"><img src={logo} alt="full logo" class="footer__logo" /></a>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="footer__navigation">
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <a href="" className="footer__link">Company</a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="/about" className="footer__link">About Us</a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="" className="footer__link">Careers</a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="" className="footer__link">Privacy</a>
                                    </li>
                                    <li className="footer__item">
                                        <a href="" className="footer__link">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1-of-2">
                            <p className="footer__copyright">
                                Built <a href="" class="footer__link">Ogundipe Shamsondeen</a> for his web development practice
                                <a href="" class="footer__link">
                                    Advance CSS</a>. Copyright &copy; by Ogundipe Shamsondeen.
                            </p>
                        </div>
                    </div>
                   <div className="footer__social">
                        <Link to="https:/www.facebook.com/ogundipe.samson.14">
                            <i class="fab fa-facebook" />
                        </Link>
                        <Link to="https://www.instagram.com/shamzy112">
                            <i class="fab fa-instagram" />
                        </Link>
                        <Link to="https:/www.facebook.com/ogundipe.samson.14">
                            <i class="fab fa-twitter" />
                        </Link>
                    </div>
                </footer>
                {/* End Of Footer */}
            </div>
        )
    }


export default Footer;

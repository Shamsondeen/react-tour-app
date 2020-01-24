import React from 'react';
import logo from '../../ika.png';
import './Footer.css'

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
                        <a href="https:/www.facebook.com/ogundipe.samson.14">
                            <i class="fab fa-facebook" />
                        </a>
                        <a href="https://www.instagram.com/shamzy112">
                            <i class="fab fa-instagram" />
                        </a>
                        <a href="https:/www.facebook.com/ogundipe.samson.14">
                            <i class="fab fa-twitter" />
                        </a>
                    </div>
                </footer>
                {/* End Of Footer */}
            </div>
        )
    }


export default Footer;

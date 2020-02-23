import React from 'react';
import logo from '../../ika.png';
import './Footer.css'

const Footer = () => {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="footer__logo-box">
                        <a href="/"><img src={logo} alt="full logo" className="footer__logo" /></a>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="footer__navigation">
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <a href='' className="footer__link">Company</a>
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
                                Built <a href="" className="footer__link">Ogundipe Shamsondeen</a> for his web development practice
                                <a href="" className="footer__link">
                                    Advance CSS</a>. Copyright &copy; by Ogundipe Shamsondeen.
                            </p>
                        </div>
                    </div>
                   <div className="footer__social">
                        <a href="https:/www.facebook.com/ogundipe.samson.14">
                            <i className="fab fa-facebook" />
                        </a>
                        <a href="https://www.instagram.com/shamzy112">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="https:/www.facebook.com/ogundipe.samson.14">
                            <i className="fab fa-twitter" />
                        </a>
                    </div>
                </footer>
                {/* End Of Footer */}
            </React.Fragment>
        )
    }


export default Footer;

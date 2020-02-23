import React, { Component } from 'react';
import './Nav.css';


export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navigation">
                    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                    <label htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>
                    <div className="navigation__background">
                        &nbsp;
                   </div>
                    <nav className="navigation__nav">
                        <ul className="navigation__list">
                            <li className="navigation__item"><a href="/" className="navigation__link"><span>01</span>Home</a></li>
                            <li className="navigation__item"><a href='/about' className="navigation__link"><span>02</span>About Us</a></li>
                            <li className="navigation__item"><a href="/Tours" className="navigation__link"><span>03</span>Popular Tours</a></li>
                            <li className="navigation__item"><a href="/Story" className="navigation__link"><span>04</span>Stories</a></li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}



import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation= () => {
    return (
            <NavWrapper>
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
                            <li class="navigation__item"><Link to="/"><a class="navigation__link"><span>01</span>Home</a></Link></li>
                            <li class="navigation__item"><Link to="/about"><a class="navigation__link"><span>02</span>About Us</a></Link></li>
                            <li class="navigation__item"><Link to="/tours"><a class="navigation__link"><span>03</span>Popular Tours</a></Link></li>
                            <li class="navigation__item"><Link to="/story"><a  class="navigation__link"><span>04</span>Stories</a></Link></li>
                        </ul>
                    </nav>
                </div>
            </NavWrapper>
        );
    }
    export default Navigation;

const NavWrapper = styled.nav `
/*Navigation*/
.navigation__checkbox {
    display: none;
}

.navigation__button {
    background-color: #fff;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
}

@media only screen and (max-width: 56.25em) {
    .navigation__button {
        top: 4rem;
        right: 4rem;
    }
}

@media only screen and (max-width : 37.5em) {
    .navigation__button {
        top: 3rem;
        right: 3rem;
    }
}

.navigation__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(#1b8ffc, #1900f7);
    z-index: 1000 !important;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1) !important;
}

@media only screen and (max-width: 56.25em) {
    .navigation__background {
        top: 4.5rem;
        right: 4.6rem;
    }
}

@media only screen and (max-width: 37.5em) {
    .navigation__background {
        top: 3.5rem;
        right: 3.5rem;
    }
}

.navigation__nav {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500 !important;
    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
}

.navigation__list {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    overflow: hidden;
}

.navigation__item {
    margin: 1rem;
}

.navigation__link:link,
.navigation__link:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 200;
    padding: 1rem 2rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%) !important;
    background-size: 220%;
    transition: all .4s !important;
    
}

.navigation__link:link span,
.navigation__link:visited span {
    margin-right: 1.5rem;
    display: inline-block;
}

.navigation__link:hover,
.navigation__link:active {
    background-position: 100%;
    color: #2999ff;
    transform: translateX(1rem)
}


.navigation__checkbox:checked~.navigation__background {
    transform: scale(80);
}

.navigation__checkbox:checked~.navigation__nav {
    opacity: 1;
    width: 100%;
}

.navigation__icon {
    position: relative;
    margin-top: 3.5rem;
}

.navigation__icon,
.navigation__icon::before,
.navigation__icon::after {
    width: 3rem;
    height: 2px;
    background-color: #333;
    display: inline-block;
}

.navigation__icon::before,
.navigation__icon::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all .2s;
}

.navigation__icon::before {
    top: -.8rem;
}

.navigation__icon::after {
    top: .8rem;
}

.navigation__button:hover .navigation__icon::before {
    top: -1rem;
}

.navigation__button:hover .navigation__icon::after {
    top: 1rem;
}

.navigation__checkbox:checked + .navigation__button .navigation__icon {
    background-color: transparent;
}

.navigation__checkbox:checked + .navigation__button .navigation__icon::before {
    top: 0;
    transform: rotate(135deg) !important;
}

.navigation__checkbox:checked+ .navigation__button .navigation__icon::after {
    top: 0;
    transform: rotate(-135deg) !important;
}
/*End Of Navigation*/
`

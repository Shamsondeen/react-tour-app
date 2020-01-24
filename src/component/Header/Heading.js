import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../ika.png';
import './Heading.css'

export default class Heading extends Component {
    render() {
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

                        
                        <a href="/tours" className="btn btn__animated btn__white">Discover our tours</a>
                       
                    </div>
                </header>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../ika.png';
import './Heading.css'

export default class Heading extends Component {
    state = {
        heading_primary: 'is where lifes happens'
    }
    render() {
        return (
            <React.Fragment>
            <header className="header">
                    <div className="header__logo-box">
                        <Link to="/">
                            <img src={logo} alt="store" className="header__logo" />
                        </Link>
                    </div>
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary__main">Outdoors</span>
                            <span class="heading-primary__sub">{this.state.heading_primary}</span>
                        </h1>

                        
                        <a href="/tours" className="btn btn__animated btn__white">Discover our tours</a>
                       
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

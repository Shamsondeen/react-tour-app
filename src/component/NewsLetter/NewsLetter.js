import React, {  useState } from 'react'

import './NewsLetter.css';

const NewsLetter = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');

        return (
            <div>
                 {/* Booking Section*/}
                 <section className="NewsLetter">
                        <div className="row">
                            <div className="Letter">
                                <div className="Letter__form">
                                    <form action="" className="form">
                                        <div className="u-margin-botton-medium">
                                            <h2 class="heading-secondary">
                                                Newsletter
                                        </h2>
                                        </div>

                                         <div className="form__group">
                                        <input type="text"  placeholder="Full name" name="name"  onChange={(event) => setName(event.target.value)} required="required" />
                                        <label HtmlFor="name" className="form__label">Full name</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="Email" placeholder="Email Address"  onChange={(event) => setEmail(event.target.value)}  required />
                                        <label HtmlFor="Email" className="form__label">Email address</label>
                                    </div>
                                        <button className="btn btn_green">Submit</button>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Of Booking Section*/}
            </div>
        )
    }


export default NewsLetter;

import React, { Component } from 'react';
import './Tours.css';
import Footer from '../Footer/Footer';


export default class Tours extends Component {
    state = {
        // TITTLES
        title: 'Badagry Xmas plore',title2: 'Southwest Tour',title3: 'Beach Hangout',title4: 'DECEMBER HANG-OUT',title5: 'Cultural Tour',title6: 'Abuja City Tour',
        title7: 'Lagos city tour',title8: 'Lekki C Centre tour',title9: 'Almart Resort tour',title10: 'Abeokuta City Tour',title11: 'Kano City Tour',title12: 'Benin City Tour',

        // LISTS
        lists: [ '2 days tours', 'One night in whispering palm', 'Pedal boating', 'First Story Building', 'Bicycle Boaty'],
        lists2: [ '7 Days Tour', ' Mountain Hiking', ' Swimming', 'Camp Fire', ' Visit To Erinjiyan Ekiti'],
        lists3: [ 'A Day Tour', 'Swimming', 'Kayaking', ' Boat Ride', ' Pedal Boating'],lists4: [ ' A Day Tour', ' Visit To Whispering palm', ' Visit To First Story Building', ' Visit To Brazilian Baracoon', ' Visit To Point Of No Return'],
        lists5: [ '2 Days Tour', 'Visit to Erinjiyan Ekiti', "Visit to Oni Of Ife's Palace", 'Visit To Oba Of Lagos Palace', 'Visit To Osun/Oshogbo Shrine'],lists6: [ '3 Days Tour', 'Visit To Aso Rock', 'Visit Zuma Rock', 'Visit To Presidential Villa', 'Visit To Senate House'],
        lists7: [ '2 days tours', 'One night in Eko Hotel', 'Visit To Eko Atlantic', "Visit To Governor's Office", "Visit To Tinubu's House"],lists8: [ 'A Day Tour', 'Swimming', 'Kayaking', 'Boat Ride', 'Pedal Boating'],
        lists9: [ 'A Day Tour', 'Mountain Hiking', 'Swimming', 'Camp Fire', 'Photography'], lists10: [ '2 days tours', 'Visit To Olumo Rock', 'Visit To Government House', 'Visit To Mapoly', "Visit To OBASANJO'S Library"],
        lists11: [ '2 Days Tour', "Visit To Emir's Palace", 'Visit To Government House', "Visit To Kano's Market", 'Visit To University Of Kano'],lists12: [ '2 Days Tour', 'Visit To Oba Of Benin Palace', 'Visit To UNIBEN', 'Camp Fire', 'Visit To Benin Market'],

        // TOUR PRICE
        price: '40000', price2: '25000',price3: '20000', price4: '10000', price5: '20000', price6: '25000', price7: '40000',
        price8: '20000',price9: '10000',price10: '25000',price11: '30000',price12: '10000'

    };
    render() {
        return (
            <React.Fragment>
                <section className="section-tours">
                    <div className="u-center-text u-margin-botton-big">
                        <h2 className="heading-secondary">
                            Popular Tours
                            </h2>
                    </div>
                    <div className="row">

                        {/* Card One */}
                        <div className="col-1-of-3">
                            <div className="card" >
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay=".5s">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                        </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            {this.state.title}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                        {this.state.lists.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">#{this.state.price}</p>
                                        </div>
                                        <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Card One */}

                        {/* Card Two */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay=".9s">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                        </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">
                                            {this.state.title2}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <ul>
                                            {this.state.lists2.map(list => <li key={list}>{list}</li>)}
                                            </ul>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">#{this.state.price2}</p>
                                            </div>
                                            <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Card Two */}

                        {/* Card Three */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay="1.3s">
                                    <div className="card__picture card__picture--3">
                                        &nbsp;
                                        </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">
                                            {this.state.title3}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                        {this.state.lists3.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="card__side card__side--back card__side--back-3">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">#{this.state.price3}</p>
                                            </div>
                                            <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Of Card Three*/}

                    </div>

                    <div className="row">

                        {/* Card One */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay="1.3s">
                                    <div className="card__picture card__picture--4">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            {this.state.title4}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                        {this.state.lists4.map(list => <li key={list}>{list}</li>)} 
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">#{this.state.price4}</p>
                                        </div>
                                        <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Card One */}

                        {/* Card Two */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay=".9s">
                                    <div className="card__picture card__picture--5">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">
                                            {this.state.title5}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                        {this.state.lists5.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">#{this.state.price5}</p>
                                            </div>
                                            <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Card Two */}

                        {/* Card Three */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay=".5s">
                                    <div className="card__picture card__picture--6">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">
                                            {this.state.title6}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                        {this.state.lists6.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="card__side card__side--back card__side--back-3">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">#{this.state.price6}</p>
                                            </div>
                                            <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Of Card Three*/}

                    </div>

                    <div className="row">

                        {/* Card One */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay=".5s">
                                    <div className="card__picture card__picture--7">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            {this.state.title7}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                        {this.state.lists7.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">#{this.state.price7}</p>
                                        </div>
                                        <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Card One */}

                        {/* Card Two */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay=".9s">
                                    <div className="card__picture card__picture--8">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">
                                            {this.state.title8}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                           {this.state.lists8.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">#{this.state.price8}</p>
                                            </div>
                                            <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Card Two */}

                        {/* Card Three */}
                        <div className="col-1-of-3">
                            <div className="card" data-wow-dutarion="1s" data-wow-delay="1.3s">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay="1.3s">
                                    <div className="card__picture card__picture--9">
                                        &nbsp;
                                </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">
                                            {this.state.title9}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                           {this.state.lists9.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="card__side card__side--back card__side--back-3">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">#{this.state.price9}</p>
                                            </div>
                                            <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Of Card Three*/}

                    </div>

                    <div className="row">

                        {/* Card One */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay="1.3s">
                                    <div className="card__picture card__picture--10">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            {this.state.title10}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            {this.state.lists10.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">#{this.state.price10}</p>
                                        </div>
                                        <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Card One */}

                        {/* Card Two */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay=".9s">
                                    <div className="card__picture card__picture--11">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">
                                            {this.state.title11}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                         {this.state.lists11.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">#{this.state.price11}</p>
                                            </div>
                                            <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Card Two */}

                        {/* Card Three */}
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front wow fadeIn" data-wow-dutarion="1s" data-wow-delay=".5s">
                                    <div className="card__picture card__picture--12">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">
                                            {this.state.title12}
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                          {this.state.lists12.map(list => <li key={list}>{list}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="card__side card__side--back card__side--back-3">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">#{this.state.price12}</p>
                                            </div>
                                            <a href="tel: +2349018903141" className="btn btn__white margin-top-s">call to book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Of Card Three*/}

                    </div>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}

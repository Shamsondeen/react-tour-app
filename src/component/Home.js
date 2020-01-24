import React, { Component, useState } from 'react';
import About_Section from './About/About_Section';
import Features_Section from './Features/Features_Section';
import Section_Tours from './Tours/Section_Tours';
import Footer from './Footer/Footer';
import Story_Section from './Story/Story_Section';
import NewsLetter from './NewsLetter/NewsLetter'
import Heading from './Header/Heading'


const Home = () => {


    return (
        <div>
            <Heading />
            <main>
                <About_Section />

                <Features_Section />

                <Section_Tours />

                <Story_Section />

                <NewsLetter />
            </main>
            <Footer />

        </div>
    )
}

export default Home;





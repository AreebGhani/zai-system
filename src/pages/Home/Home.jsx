import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import OurServices from './components/OurServices';
import Portfolios from './components/Portfolios';
import PopularApp from './components/PopularApp';
import Testimonials from './components/Testimonials';
import Technologies from '../../components/Technologies';
import GetInTouch from '../../components/GetInTouch';

export default function Home() {
    return (
        <>
            <Header />
            <AboutUs />
            <Skills />
            <OurServices />
            <Portfolios />
            <PopularApp />
            <Testimonials />
            <Technologies />
            <GetInTouch
                title="Bring your projects to life"
                text="Transform your ideas"
            />
        </>
    )
}

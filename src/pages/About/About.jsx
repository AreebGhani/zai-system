import React from 'react';
import Hero from "../../components/Hero";
import Tabs from './components/Tabs';
import OurSkills from './components/OurSkills';
import Blogs from './components/Blogs';
import GetInTouch from '../../components/GetInTouch';

export default function About() {
    return (
        <>
            <Hero
                page="About Us"
                title="WHAT WE MAKE"
                subTitle="We enjoy building products that ignites our clients vision and sparks creative engagement."
            />
            <div className="hero-about section-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 intro-about">
                            <h5 className="sm-title-block"> </h5>
                            <p className="p-larg"> </p>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs />
            <OurSkills />
            <Blogs />
            <GetInTouch title="WANT TO JOIN?" text="We're hiring" />
        </>
    )
}

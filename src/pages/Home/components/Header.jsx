import React from 'react';
import { Helmet } from "react-helmet";

export default function Header() {
    return (
        <>
            <Helmet>
                <script src="/assets/js/app.js"></script>
            </Helmet>
            <header data-dsn-header="project">
                <div id="particles-js"></div>
                <div className="header-project p-relative h-100-v over-hidden" data-dsn-header="parallax">
                    <div id="dsn-hero-parallax-img" data-dsn-ajax="img" className="p-absolute w-100 h-100 over-hidden"
                        data-overlay="6">
                        <img className="cover-bg-img" src="assets/img/home-slide.jpg" alt="" />
                    </div>
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="content p-relative w-100">
                                <div className="intro-project">
                                    <div id="dsn-hero-title" className="intro-title">
                                        <div className="metas d-inline-block">
                                            <span></span>
                                        </div>
                                        <h1 className="title" data-dsn-ajax="title">YOUR PERFECT DIGITAL PARTNER </h1>
                                    </div>
                                    <p id="dsn-hero-description" className="description">
                                        You have vision for amazing digital experience. We have the right team that will
                                        bring it to life.
                                    </p>
                                    <div id="dsn-hero-desc-items" className="intro-project-details d-flex">
                                        <div className="descrption-item">
                                            <a className="btn btn-light" href="contact.html"><span>Get Free Quote
                                            </span></a>
                                        </div>
                                        <div className="descrption-item">
                                            <a className="btn btn-light-bordered" href="portfolio.html"
                                                data-toggle="portfolio.php"><span>Check Portfolio</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-d p-absolute">
                        <img src="assets/img/scroll_down.svg" alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}

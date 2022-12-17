import React from "react";

export default function AboutUs() {
    return (
        <>
            <section
                className="intro-about section-margin have-dsn-animate-number"
                data-dsn-animate="section"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="intro-about-info">
                                <div className="section-title-2">
                                    <h2>About Us</h2>
                                    <p>Why ReTech? </p>
                                </div>
                                <div className="intro-about-info-bottom">
                                    <h2 className="title-h2 dsn-up"> </h2>
                                    <p className="dsn-text">
                                        We exist to provide you with IT services that accelerate
                                        your progress, in the digital economy, and directly sustain
                                        success. Our main aim is to develop and become a leading
                                        performer in executing the client's digital transformation
                                        by bringing together their vision while following the latest
                                        industry trends.
                                    </p>
                                    <div className="accordion mt-30">
                                        <div className="accordion__wrapper">
                                            <div className="accordion__item dsn-up">
                                                <div className="accordion__question expanded d-flex align-items-center p-relative">
                                                    <span className="icon">
                                                        <img src="assets/img/vision.svg" alt="" />
                                                    </span>
                                                    <h4 className="sm-title-block">Our Vision</h4>
                                                </div>
                                                <div className="accordion__answer active">
                                                    <p>
                                                        We aspire to deliver valued IT services that exceed
                                                        expectations & be the first choice of our clients
                                                        while maintaining the highest level of quality.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="accordion__item dsn-up">
                                                <div className="accordion__question d-flex align-items-center p-relative">
                                                    <span className="icon">
                                                        <img src="assets/img/target.svg" alt="" />
                                                    </span>
                                                    <h4 className="sm-title-block">Our goals</h4>
                                                </div>
                                                <div className="accordion__answer">
                                                    <p>
                                                        Deliver valued individual experiences as per the
                                                        needs and requirements of the customers at par
                                                        excellence.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="accordion__item dsn-up">
                                                <div className="accordion__question d-flex align-items-center p-relative">
                                                    <span className="icon">
                                                        <img src="assets/img/mission.svg" alt="" />
                                                    </span>
                                                    <h4 className="sm-title-block">Our Mission</h4>
                                                </div>
                                                <div className="accordion__answer">
                                                    <p>
                                                        • Epitomize professionalism & integrity that
                                                        enhances business development and growth. <br /> •
                                                        Set the benchmarks in creating high quality
                                                        solutions.
                                                        <br />• Deliver valued individual experiences as per
                                                        customer needs.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-img p-relative  over-hidden">
                                <div className="bg-section p-absolute w-100 h-100">
                                    <div className="h-100" data-dsn-grid="move-up">
                                        <img
                                            className="cover-bg-img has-top-bottom"
                                            src="assets/img/about-intro.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <img src="assets/img/about-intro.jpg" alt="" />
                                <div className="exper background-theme p-absolute">
                                    <div className="sm-title-block dsn-up">
                                        <h1 style={{ color: "#ffffff" }}>Emirati</h1> <br />
                                        <h3 style={{ color: "#ffffff" }}>IT Solutions</h3> <br />
                                        <h3 style={{ color: "#ffffff" }}>Company</h3>
                                    </div>
                                    <div className="shap-section">
                                        <img src="assets/img/arr.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

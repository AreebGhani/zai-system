import React from 'react'

export default function PopularApp() {
    return (
        <>
            <div className="box-gallery-vertical box-gallery-content  section-margin" data-dsn-animate="section"
                data-dsn-duration="100%">
                <div className="mask-bg"></div>
                <div className="container">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-6 ">
                            <div className="box-im" data-dsn-grid="move-up">
                                <img className="has-top-bottom" src="assets/img/retech-app.jpg" alt=""
                                    data-dsn-move="20%" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-info">
                                <div className="title-cover" data-dsn-grid="move-section" data-dsn-opacity="0.1"
                                    data-dsn-duration="170%" data-dsn-move="0%">
                                    RETECH
                                </div>
                                <div className="vertical-title ">
                                    <h2 className="dsn-text">RETECH APP</h2>
                                </div>
                                <div className="bg-mask-content dsn-up pb-3">
                                    <div className="mask-bg-2"></div>
                                    <h6 className="dsn-up">ReTech app opens the doors to contactless retail for all
                                        businesses.
                                    </h6>
                                    <p className="dsn-up"> ReTech app is a receipt processing solution that
                                        automatically recognizes and extracts data from receipts. It allows you to
                                        immediately have access to the relevant receipt data, powered by artificial
                                        intelligence and machine learning while ensuring accurate, high-quality
                                        results.
                                    </p>
                                    <p className="dsn-up">The sophisticated engine captures data from receipts, analyzes
                                        it, and sends it to the user. This analyzed data is divided into relevant
                                        categories, which aims to give the user a full view of daily money spending.
                                        The app's simple user-centered design provides easy in-app navigation and
                                        targets users through dynamic content.</p>
                                </div>
                                <div className="d-inline-block dsn-up">
                                    <div id="dsn-hero-desc-items" className="intro-project-details d-flex">
                                        <a href="#" className="link-custom d-flex a-item-center p-relative">
                                            <span className="link-text">Download App</span>
                                            <span className="link-circle p-absolute">
                                                <i className="fab fa-apple"></i>
                                            </span>
                                        </a>
                                        <a href="portfolio.html"
                                            className="link-custom d-flex a-item-center p-relative">
                                            <span className="link-text">More Products</span>
                                            <span className="link-circle p-absolute">
                                                <i className="fas fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="av-extra-border-element border-extra-diagonal  diagonal-box-shadow">
                <div className="av-extra-border-outer">
                    <div className="av-extra-border-inner" style={{ backgroundColor: "#f9f9f9" }}></div>
                </div>
            </div>
        </>
    )
}

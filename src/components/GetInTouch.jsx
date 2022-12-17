import React from 'react'

export default function GetInTouch({ title, text }) {
    return (
        <>
            <section className="next-up next-project p-relative section-padding">
                <div className="bg-section p-absolute w-100 h-100">
                    <div className="h-100" data-dsn-grid="move-up" data-overlay="5">
                        <img className="cover-bg-img has-top-bottom" src="assets/img/bg-2.jpg" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 offset-lg-6 offset-md-5">
                            <div className="next-up-inner p-relative background-section">
                                <h2 className="title">{title}</h2>
                                <a href="contact.html" className="btn background-theme p-relative effect-ajax"
                                    data-dsn="parallax"><span>{text}</span></a>
                                <div className="infos d-flex a-item-center bd-highlight">
                                    <div className="infos_content mr-auto"> </div>
                                    <div className="infos_button "> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

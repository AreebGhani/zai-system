import React from 'react'

export default function Hero({ page, title, subTitle }) {
    return (
        <>
            <div className="image-head p-relative mb-section">
                <div id="particles-js"></div>
                <div className="bg-section p-absolute w-100 h-100 over-hidden">
                    <div className="h-100 before-z-index" data-dsn-grid="move-up" data-overlay="5">
                        <img className="cover-bg-img has-top-bottom d-img" src="assets/img/cms-slide.jpg" alt="" />
                        <img className="cover-bg-img has-top-bottom m-img" src="assets/img/cms-slide-m.html" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="box-text p-relative background-theme section-padding">
                        <h2 className="title-page p-relative text-light"> {page} </h2>
                        <h1 className="title text-light">{title}</h1>
                        <p className="subtitle-page text-light">{subTitle}</p>
                        <div className="shap-section">
                            <img src="assets/img/arr.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

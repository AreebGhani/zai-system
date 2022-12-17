import React from 'react'

export default function Cards() {
    return (
        <>
            <section className="service service-3 section-padding designe-process dsn-animate" data-dsn-animate="section">
                <div className="container" data-dsn-animate="section">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="single-item">
                                <div className="inner-box">
                                    <div className="left-layer"></div>
                                    <div className="right-layer"></div>
                                    <div className="icon">
                                        <img src="assets/img/icons/location.svg" alt="" />
                                    </div>
                                    <h4><a href="https://www.google.com/maps/place/Al+NahdaAl+Nahda+1+-+Dubai+-+United+Arab+Emirates/@25.2892006,55.3589912,15z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5c65da176de9:0x30673c9913edc9f4!8m2!3d25.2919567!4d55.365513">Location</a></h4>
                                    <div className="text">Al-Nahda 1, Dubai <br /> United Arab Emirates</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-item">
                                <div className="inner-box">
                                    <div className="left-layer"></div>
                                    <div className="right-layer"></div>
                                    <div className="icon">
                                        <img src="assets/img/icons/phone.svg" alt="" />
                                    </div>
                                    <h4><a href="tel:+971585785614">Phone</a></h4>
                                    <div className="text">+971 58 578 5614</div>
                                    <div className="text">+971 52 564 4103</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-item">
                                <div className="inner-box">
                                    <div className="left-layer"></div>
                                    <div className="right-layer"></div>
                                    <div className="icon">
                                        <img src="assets/img/icons/mail.svg" alt="" />
                                    </div>
                                    <h4><a href="mailto:info@retechae.com">Email</a></h4>
                                    <div className="text"> <a data-hover-text="info@retechae.com" href="mailto:reem@retechae.com">info@retechae.com</a></div>
                                    <div className="text"> <a data-hover-text="sales@retechae.com" href="mailto:reem@retechae.com">sales@retechae.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

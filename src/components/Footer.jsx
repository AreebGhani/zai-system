import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer-1 p-relative background-section">
                <div className="container">
                    <div className="footer-links p-relative">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-block-inner">
                                <div className="footer-block">
                                    <div className="footer-logo">
                                        <a href="index-2.html">
                                            <img src="assets/img/logo.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="textwidget">
                                        <h6>Reinventing Technology</h6>
                                        <p>
                                            We aspire to deliver valued IT services that exceed expectations while maintaining quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-block-inner">
                                <div className="footer-block col-menu">
                                    <h4 className="footer-title">Useful Links</h4>
                                    <div className="footer-social p-relative">
                                        <ul>
                                            <li className="over-hidden">
                                                <a href="contact.html" data-dsn="parallax" target="_blank"
                                                    rel="nofollow">About Us</a>
                                            </li>
                                            <li className="over-hidden">
                                                <a href="privacy.html" data-dsn="parallax" target="_blank"
                                                    rel="nofollow">Privacy Policy</a>
                                            </li>
                                            <li className="over-hidden">
                                                <a href="terms.html" data-dsn="parallax" target="_blank"
                                                    rel="nofollow">Terms & Conditions</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-block-inner">
                                <div className="footer-block col-contact">
                                    <h4 className="footer-title">Contact</h4>
                                    <p><strong>T</strong> <span>:</span> +971 58 578 5614 </p>
                                    <p><strong>M</strong> <span>:</span>+971 52 564 4103</p>
                                    <p className="over-hidden"><strong>E</strong> <span>:</span>
                                        <a className="link-hover" data-hover-text="info@retechae.com"
                                            href="mailto:reem@retechae.com">info@retechae.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-block-inner">
                                <div className="col-address">
                                    <h4 className="footer-title">Address</h4>
                                    <p>
                                        Al-Nahda 1,<br />
                                        Dubai<br />
                                        United Arab Emirates
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-nav">
                    <div className="container">
                        <ul>
                            <li><a className="link-hover" data-dsn="parallax" href="https://www.facebook.com/Retech.ae/"
                                target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="link-hover" data-dsn="parallax" href="https://twitter.com/ReTechae"
                                target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li><a className="link-hover" data-dsn="parallax" href="https://www.instagram.com/retech.ae/"
                                target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                            <li><a className="link-hover" data-dsn="parallax" href="#"><i className="fab fa-google-plus-g"
                                target="_blank" rel="noreferrer"></i></a></li>
                            <li><a className="link-hover" data-dsn="parallax"
                                href="https://www.linkedin.com/company/retech-ae/" target="_blank" rel="noreferrer"><i
                                    className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <div className="text-center">
                        <p>&COPY; 2022 RETECH Digital Agency | All Rights Reserved</p>
                        <div className="copright-text over-hidden">Designed by <a className="link-hover"
                            data-hover-text="RETECH" href="#" target="_blank">RETECH</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

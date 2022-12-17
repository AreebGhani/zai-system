import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div className="site-header">
                <div className="extend-container d-flex w-100 justify-content-between align-items-center">
                    <div className="inner-header p-relative">
                        <div className="main-logo">
                            <Link to="/" data-dsn="parallax">
                                <img className="dark-logo" src="assets/img/logo.png" alt="" />
                                <img className="light-logo" src="assets/img/logo-white.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className=" contactUsLink menu-icon d-flex align-items-baseline">
                        <Link to="/contact" className="contact-link text-button">Contact Us</Link>
                    </div>
                    <div className="menu-icon d-flex align-items-baseline">
                        <div className="text-menu p-relative  font-heading text-transform-upper">
                            <div className="p-absolute text-button"> MENU </div>
                            <div className="p-absolute text-open">Open</div>
                            <div className="p-absolute text-close">Close</div>
                        </div>
                        <div className="icon-m" data-dsn="parallax">
                            <span className="menu-icon-line p-relative d-inline-block icon-top"></span>
                            <span className="menu-icon-line p-relative d-inline-block icon-center"></span>
                            <span className="menu-icon-line p-relative d-block icon-bottom"></span>
                        </div>
                    </div>
                    <nav className="accent-menu main-navigation p-absolute  w-100  d-flex align-items-baseline ">
                        <div className="menu-cover-title">RETECH</div>
                        <ul className="extend-container p-relative d-flex flex-column justify-content-center h-100">
                            <li className="dsn-active">
                                <Link to="/" className="user-no-selection">
                                    <span className="dsn-title-menu">Home</span>
                                    <span className="dsn-meta-menu">01</span>
                                    <span className="dsn-title-menu dsn-subtile-menu"> Go digital become Agile
                                    </span>
                                </Link>
                            </li>
                            <li className="dsn-drop-down">
                                <Link to="/services" className="user-no-selection">
                                    <span className="dsn-title-menu">Services</span>
                                    <span className="dsn-meta-menu">02</span>
                                    <span className="dsn-title-menu dsn-subtile-menu">we got what you need
                                    </span>
                                </Link>
                            </li>
                            <li className="dsn-drop-down">
                                <Link to="/portfolio" className="user-no-selection">
                                    <span className="dsn-title-menu">Portfolio</span>
                                    <span className="dsn-meta-menu">03</span>
                                    <span className="dsn-title-menu dsn-subtile-menu">Our work speaks itself</span>
                                </Link>
                            </li>
                            <li className="dsn-drop-down">
                                <Link to="/about">
                                    <span className="dsn-title-menu">About</span>
                                    <span className="dsn-meta-menu">04</span>
                                    <span className="dsn-title-menu dsn-subtile-menu">Symbol of quality
                                    </span>
                                </Link>
                            </li>
                            <li className="dsn-drop-down">
                                <Link to="/blog">
                                    <span className="dsn-title-menu">Stories</span>
                                    <span className="dsn-meta-menu">05</span>
                                    <span className="dsn-title-menu dsn-subtile-menu">blogs/ events
                                    </span>
                                </Link>
                            </li>
                            <li className="dsn-drop-down">
                                <Link to="/contact">
                                    <span className="dsn-title-menu">Contact</span>
                                    <span className="dsn-meta-menu">06</span>
                                    <span className="dsn-title-menu dsn-subtile-menu">We're an email away </span>
                                </Link>
                            </li>
                        </ul>
                        <div className="nav-border-bottom"></div>
                    </nav>
                </div>
            </div>
        </>
    )
}

import React from 'react'

export default function Form() {
    return (
        <>
            <div className="wrapper root-contact">
                <div className="container">
                    <div className="form-box">
                        <div className="section-title text-center">
                            <p className="d-inline-block">
                                Ready to discuss your project let's talk
                            </p>
                            <h2>Contact Us</h2>
                        </div>
                        <form id="contact-form" className="form" method="post" action="https://www.retechae.com/sendMail.php"
                            data-toggle="validator">
                            <div className="messages"></div>
                            <div className="input__wrap controls">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <div className="entry">
                                                <label>Your Name *</label>
                                                <input id="form_name" type="text" name="name" placeholder="Type your name" required="required"
                                                    data-error="Name is required." />
                                            </div>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <div className="entry">
                                                <label>Your E-Mail *</label>
                                                <input id="form_email" type="email" name="email"
                                                    placeholder="Type your Email Address" required="required"
                                                    data-error="Valid email is required." />
                                            </div>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <div className="entry">
                                                <label>Your Phone *</label>
                                                <input id="form_phone" type="text" name="phone"
                                                    placeholder="Type your Phone Number" required="required"
                                                    data-error="Valid phone is required." />
                                            </div>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <div className="entry">
                                                <label>Select Category *</label>
                                                <select className="form-control" name="category">
                                                    <option>Contact</option>
                                                    <option>Get a Quote</option>
                                                    <option>Hire Resource</option>
                                                </select>
                                            </div>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="entry">
                                                <label>What are you looking for?
                                                    *</label>
                                                <textarea id="form_message" className="form-control" name="message"
                                                    placeholder="Tell us about you and your project"
                                                    required="required"
                                                    data-error="Message cannot be empty."></textarea>
                                            </div>
                                            <div className="help-block with-errors"></div>
                                            <p> * denotes required</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="text-center">
                                            <div className="image-zoom w-auto d-inline-block" data-dsn="parallax">
                                                <button className="btn-form" type="submit">
                                                    <span className="label">Send Message</span>
                                                    <span className="icon-c"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

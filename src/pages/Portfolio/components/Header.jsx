import React from 'react'

export default function Header() {
    return (
        <>
            <header className="p-relative mb-section portfolio-page">
                <div className="header-page header-page-work header-page-work-space">
                    <div className="container h-100">
                        <div className="contenet-hero portfolio-wrap p-relative pb-0 text-center">
                            <h1 className="title-page p-relative text-light">Portfolio</h1>
                            <h2 className="title text-light">Our Work
                            </h2>
                            <p className="subtitle-page text-light">Anyone can bring together lines of code. We do more. With our designing and engineering team, we value what moves people and build to inspire.
                            </p>
                        </div>
                        <div className="filters-content">
                            <div className="close-wind" data-cursor="close"></div>
                            <div className="filtering">
                                <button type="button" data-filter='*' className="active">
                                    <span className="text" data-hover="All">All</span>
                                    <span className="counter">(25)</span>
                                </button>
                                <button type="button" data-filter='.webdesign' className="sec">
                                    <span className="text">Web Designs</span>
                                    <span className="counter">(6)</span>
                                </button>
                                <button type="button" data-filter='.webapps'>
                                    <span className="text" data-hover="Design">Web Development</span>
                                    <span className="counter">(4)</span>
                                </button>

                                <button type="button" data-filter='.mobileapps' className="sec">
                                    <span className="text">Mobile Applications</span>
                                    <span className="counter">(4)</span>
                                </button>

                                <button type="button" data-filter='.logosbranding'>
                                    <span className="text">Graphics Design</span>
                                    <span className="counter">(5)</span>
                                </button>

                                <button type="button" data-filter='.printing' className="sec">
                                    <span className="text">Branding & Marketing</span>
                                    <span className="counter">(6)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

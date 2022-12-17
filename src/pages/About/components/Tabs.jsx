import React from 'react'

export default function Tabs() {
    return (
        <>
            <section className="services-about section-margin">
                <div className="container services-wp">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="box-title-services">
                                <ul>
                                    <li id="tabs-1" className="link-click active title-block">Product Strategy</li>
                                    <li id="tabs-2" className="link-click title-block">Design Strategy
                                    </li>
                                    <li id="tabs-3" className="link-click title-block">Market Research
                                    </li>
                                    <li id="tabs-4" className="link-click title-block">Defining Product
                                    </li>
                                    <li id="tabs-5" className="link-click title-block">User Insights
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content">
                                <div id="tabs-1-content" className="services-item-info">
                                    <h5> </h5>
                                    <h4 className="title-block">Imagining the future of your product </h4>
                                    <p className="p-larg">  What product will it become? Who will it benefit? How will it create value? It's a high-level plan that helps you realize your goal. Its  the key element  required to develop a success product.
                                    </p>
                                </div>
                                <div id="tabs-2-content" className="services-item-info">
                                    <h5> </h5>
                                    <h4 className="title-block">Integral Design Process</h4>
                                    <p className="p-larg">In Design Strategy we focus on integrated planning process that examines the relationships between how design and business complement each another. The combine efficient usability, interaction designs and emotionality with functionality.
                                    </p>
                                </div>
                                <div id="tabs-3-content" className="services-item-info">
                                    <h5> </h5>
                                    <h4 className="title-block">Systematic series of steps to define you're product </h4>
                                    <p className="p-larg">We brainstorming alongside with your team to understand the usability of a product and to some extent the overall user experience. Then we build an informed plan that aligns with your project goals.
                                    </p>
                                </div>
                                <div id="tabs-4-content" className="services-item-info">
                                    <h5> </h5>
                                    <h4 className="title-block">Create new products that the market seeks</h4>
                                    <p className="p-larg">Defining the product we focus on Transparency to progress and Transparency to help you  engage your audience with our premium digital services that are built to entice your visitors.
                                    </p>
                                </div>
                                <div id="tabs-5-content" className="services-item-info">
                                    <h5> </h5>
                                    <h4 className="title-block">Product launch isn't the end of the road </h4>
                                    <p className="p-larg">  We analyze user insights and behavior to understand the whole process effectively. It's a process of constantly refining and improving the product based on both qualitative and quantitative feedback data from your users. It's a process of constantly improving the product based on both qualitative and quantitative feedback data from your users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

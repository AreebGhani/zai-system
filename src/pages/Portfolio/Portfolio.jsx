import React from 'react';
import Header from "./components/Header";
import WebDesign from './components/WebDesign';
import WebApps from './components/WebApps';
import MobileApps from './components/MobileApps';
import GraphicDesign from './components/GraphicDesign';
import Marketing from './components/Marketing';
import OurWork from "./components/OurWork";

export default function Portfolio() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <section className="work-inner work-inner-space  p-relative zoom-gallery">
                    <div className="container container-custom">
                        <div className="projects-list">
                            <WebDesign />
                            <WebApps />
                            <MobileApps />
                            <GraphicDesign />
                            <Marketing />
                        </div>
                    </div>
                </section>
                <OurWork />
            </div>
        </>
    )
}

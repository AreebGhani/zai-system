import React from 'react';
import Hero from "../../components/Hero";
import Events from "./components/Events";
import Pagination from './components/Pagination';

export default function Blogs() {
  return (
    <>
      <Hero
        title="Blog/
        Events"
        subTitle="As we've grown, we've gathered a lot of knowledge and connections, and we'd like to share it !"
      />
      <div className="hero-about section-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 intro-about">
              <h5 className="sm-title-block"> </h5>
              <p className="p-larg"> </p>
            </div>
          </div>
        </div>
      </div>
      <div class="root-blog mt-section our-blog our-blog-classic">
        <div class="container">
          <h1>Coming Soon...</h1>
          <Events />
          <Pagination />
        </div>
      </div>
    </>
  )
}

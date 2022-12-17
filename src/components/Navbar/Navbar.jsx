import React, { useState } from 'react';
import "./Navbar.css";

export default function Navbar() {
  const [search, setSearch] = useState(false);

  return (
    <div className="nav-outer">
      {/* <!-- Main Menu --> */}
      <nav className="main-menu navbar-expand-md navbar-dark">
        <div className="navbar-header">
          {/* <!-- Toggle Button --> */}
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
          <ul className="navigation clearfix">
            <li className="current"><a href="index.html">Home</a></li>
            <li className="dropdown"><a href="#">About</a>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="team-detail.html">Team Detail</a></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#">Services</a>
              <ul>
                <li><a href="services.html">All Services</a></li>
                <li><a href="service-detail.html">Service-detail</a></li>

              </ul>
            </li>

            <li className="dropdown"><a href="#">Products</a>
              <ul>
                <li><a href="products.html">Products</a></li>
                <li><a href="products-detail.html">Products Detail</a></li>
                <li><a href="literature_review.html">Literature Review</a></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#">Blog</a>
              <ul>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-detail.html">Blog Detail</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
      {/* <!-- Main Menu End--> */}

      <div className="outer-box">
        {/* <!--Search Box--> */}
        <div className="search-box-outer">
          <div className={search ? "dropdown show" : "dropdown"}>
            <button onClick={() => setSearch(!search)} className="search-box-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded={search}><span className="fa fa-search"></span></button>
            <ul className={search ? "dropdown-menu pull-right search-panel show" : "dropdown-menu pull-right search-panel"} aria-labelledby="dropdownMenu3">
              <li className="panel-outer">
                <div className="form-container">
                  <form method="post" action="http://shmai.com/preview/manufactori-html/blog.html">
                    <div className="form-group">
                      <input type="search" name="field-name" value="" placeholder="Search Here" required />
                      <button type="submit" className="search-btn"><span className="fa fa-search"></span></button>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn-box">
          <a href="#" className="theme-btn btn-style-one"><span className="btn-title">Get A Quote </span></a>
        </div>
      </div>
      {/* <!--End Search Box--> */}
    </div>
  )
}

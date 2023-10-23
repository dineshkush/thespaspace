import React from "react";
import "./HomeBanner.css";
import slide1 from "../../../images/slide1.jpg";
import slide2 from "../../../images/slide2.jpg";
import slide3 from "../../../images/slide3.jpg";

function HomeBanner() {
  return (
    <>
      <section className="home_banner">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                backgroundImage: `url(${slide1})`,
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner_content">
                        <h4>
                          Best Place <span>For you</span>
                        </h4>
                        <h3>
                          <span>Harbal</span> Treatment
                        </h3>
                        <p>
                          Welcome to beauty lab, where you can relax and enjoy
                          life. A little peace in a crazy world goes a long way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: `url(${slide2})`,
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner_content">
                        <h4>
                          Best Place <span>For you</span>
                        </h4>
                        <h3>
                          <span>Beauty & </span> Relaxation
                        </h3>
                        <p>
                          Welcome to beauty lab, where you can relax and enjoy
                          life. A little peace in a crazy world goes a long way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: `url(${slide3})`,
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner_content">
                        <h4>
                        Beauty <span> Means</span>
                        </h4>
                        <h3>
                          <span>Healthy</span> You
                        </h3>
                        <p>
                          Welcome to beauty lab, where you can relax and enjoy
                          life. A little peace in a crazy world goes a long way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <i className="fa-solid fa-angle-left"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <i className="fa-solid fa-angle-right"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;

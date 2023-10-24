import React from "react";
import "./About.css";
// import AboutBg from "../../images/bg-1.png"
import AboutImg from "../../images/about-img.png";

function About() {
  return (
    <>
      <section className="about_section" id="About">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={AboutImg} alt="Spa Center" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title">
                  <h2>
                    <span>Welcome to</span> <br />
                    The Spa Space
                  </h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  unchanged. It was popularised in the 1960s with the release
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

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
            <div className="col-lg-6 mobile-hide">
              <img src={AboutImg} alt="Spa Center" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-12">
              <div className="about_content">
                <div className="site_title">
                  <h2>
                    <span>Welcome to</span> <br />
                    The Spa Space
                  </h2>
                </div>
                <p>
                The Spa Space, nestled in the heart of DLF Colony, Sector 14, Gurugram is a haven of pure relaxation and indulgence. We redefine the art of pampering, offering an oasis of luxury and tranquility. Our dedicated team of skilled professionals is committed to immersing you in a world of well-being.</p>

                <p>At The Spa Space, we believe in the therapeutic power of self-care and touch. Our welcoming staff and serene ambiance provide an escape from the daily hustle. Experience a range of exceptional services designed to rejuvenate your senses, revitalize your body, and calm your spirit. Each visit to The Spa Space is not just an appointment; it's a journey into serenity, leaving you refreshed and ready to face life's challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

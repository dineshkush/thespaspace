import React from "react";
import "./Testimonials.css";
import TestimonialsBg from "../../images/bg-2.jpg";
import TestimonialSlider from "../shared/testimonials-slider/TestimonialSlider";

function Testimonials() {
  return (
    <>
      <section
        className="testimonials_sec"
        style={{
          backgroundImage: `url(${TestimonialsBg})`,
        }}
        id="Testimonials"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title text-center">
                <h3>
                  <span>What</span> People Say
                </h3>
              </div>
              <p className="text-center">Find inspiration in the experiences of those who've discovered tranquility and rejuvenation with us. Their words reveal the exceptional care and satisfaction they've enjoyed, a testament to our service quality.</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;

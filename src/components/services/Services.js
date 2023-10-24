import React from "react";
import "./Services.css";
import servicesBg from "../../images/bg-2.jpg";

function Services() {
  return (
    <>
      <section
        className="services_sec"
        style={{
          backgroungImage: `url(${servicesBg})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title text-center">
                <h3>
                  <span>Services</span> For You
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

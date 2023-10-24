import React from "react";
import "./Services.css";
import ServicesBg from "../../images/bg-2.jpg";
import ServicesItems from "../shared/services-item/ServicesItems";

function Services() {

  return (
    <>
      <section
        className="services_sec"
        style={{
          backgroundImage: `url(${ServicesBg})`,
        }}
        id="Services"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title text-center">
                <h3>
                  <span>Services</span> For You
                </h3>
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                hendrerit elit turpis, a porttitor tellus sollicitudin at. Class
                aptent
                <br /> taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <ServicesItems />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

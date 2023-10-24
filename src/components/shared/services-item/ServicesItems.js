import React from "react";
import Slider from "react-slick";
import "./ServicesItems.css";
import ServiceImg1 from "../../../images/service1.jpg";

function ServicesItems() {
  var servicesSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480, // Adjust the breakpoint width as needed
        settings: {
          slidesToShow: 3, // Number of slides to show at this breakpoint
        }
      },
      {
        breakpoint: 768, // Adjust the breakpoint width as needed
        settings: {
          slidesToShow: 2, // Number of slides to show at this breakpoint
        }
      },
      {
        breakpoint: 480, // Adjust the breakpoint width as needed
        settings: {
          slidesToShow: 1, // Number of slides to show at this breakpoint
        }
      }
    ]
  };

  const serviceItemsData = [
    {
      id: 1,
      image: ServiceImg1,
      title: "Body Massage Centres",
      description:
        "Revitalize, Rebalance, Relax – Your Journey to Wellness Begins at Our Body Massage Centers.",
    },
    {
      id: 2,
      image: ServiceImg1,
      title: "Beauty Spas",
      description:
        "Indulge, Unwind, Glow. Our Beauty Spas are Your Haven of Tranquility, Where Well-being and Beauty Intertwine",
    },
    {
      id: 3,
      image: ServiceImg1,
      title: "Massage Centres For Men",
      description:
        "Men's Oasis: Elevate Well-being at Our Massage Centers, Where Rest and Revitalization Define the Experience.",
    },
    {
      id: 4,
      image: ServiceImg1,
      title: "Neck and shoulder",
      description:
        "Relief in Reach: Targeted Neck and Shoulder Massage for Tension Release and Soothing Relaxation.",
    },
    {
      id: 5,
      image: ServiceImg1,
      title: "Hands & Feet",
      description:
        "Pamper Your Hands and Feet: Indulgent Treatments for Ultimate Relaxation and Rejuvenation. Discover Bliss Today.",
    },
    // Add more service items as needed
  ];

  return (
    <div className="services_slider">
      <Slider {...servicesSlider}>
        {serviceItemsData.map((service) => (
          <div key={service.id} style={{ padding: "20px" }}>
            <div className="ServiceItem">
              <div className="radius-bx service_image">
                <img src={service.image} className="radius-bx img-fluid" alt="" />
                <div className="text-center service_img_content">
                  <div className="service-image-detail">
                    <div className="service-image-info">
                      <p className="m-b0">{service.description}</p>
                    </div>
                  </div>
                  <div className="site-bg-primary bg-color radius-bx opacity-08"></div>
                </div>
              </div>
              <div className="service_title text-center">
                <h2>{service.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ServicesItems;

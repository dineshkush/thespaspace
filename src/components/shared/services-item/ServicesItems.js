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
  };

  const serviceItemsData = [
    {
      id: 1,
      image: ServiceImg1,
      title: "Body Massage Centres",
      description:
        "Rejuvinate your body through the wide range of massages provided by our staff in our body massage centres.",
    },
    {
      id: 2,
      image: ServiceImg1,
      title: "Beauty Spas",
      description:
        "We have a wide range of beauty spa packages for you at the best price to energiser your body.",
    },
    {
      id: 3,
      image: ServiceImg1,
      title: "Massage Centres For Men",
      description:
        "Pamper yourself through a wide varieties of massages on offer in our massage centres for men.",
    },
    {
      id: 4,
      image: ServiceImg1,
      title: "Neck and shoulder",
      description:
        "A massage of your choice to give you a world class spa experience with comfort & personalised attention.",
    },
    {
      id: 5,
      image: ServiceImg1,
      title: "Hands & Feet",
      description:
        "Hands & Feet care strives to give you the relaxation that help you momentarily forget about the hassles.",
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

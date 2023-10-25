import React from "react";
import Slider from "react-slick";
import "./TestimonialSlider.css";
// import TestiImg1 from "../../../images/service1.jpg";

function TestimonialSlider() {
  var testimonialsSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Adjust the breakpoint width as needed
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

  const testiData = [
    {
      id: 1,
      profile: "RJ",
      name: "Raghav Jain",
      description:
        "You would love the service that you will get here. Very thankful to their amazing staff. Great going team..best Spa in the spa Space",
    },
    {
      id: 2,
      profile: "IK",
      name: "Imran Khan",
      description:
        "The staff was very nice and professional and the place was very clean too. Best spa sector 14😍",
    },
    {
      id: 3,
      profile: "SR",
      name: "Savita Rawat",
      description:
        "Embrace the art of self-care at the  Spa space Gurugram where each visit is a journey towards well-being.",
    },
    {
      id: 4,
      profile: "PP",
      name: "Pinky PrajapatRajput",
      description:
        "The spa space in Gurugram full body massage services good staff",
    },
    // {
    //   id: 5,
    //   profile: "I",
    //   name: "RINDA SMITH",
    //   position: "Founder",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and specimen book.",
    // },
  ];
  return (
    <div className="testimonials_slider">
      <Slider {...testimonialsSlider}>
        {testiData.map((testi) => (
          <div key={testi.id} style={{ padding: "20px" }}>
            <div className="testimonial_item radius-sm">
              <div className="testimonial-pic-block radius-bx">
                <div className="testimonial-pic radius">
                  <p className="profile_icon">{testi.profile}</p>
                </div>
              </div>
              <div className="testimonial-text">
                <div className="testimonial-paragraph">
                  <i className="fa fa-quote-left"></i>
                  <p>{testi.description}</p>
                </div>
                <div className="testimonial-detail">
                  <strong className="testimonial-name">{testi.name}</strong>
                  <span className="testimonial-position">
                    {testi.position}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;

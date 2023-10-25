import React from "react";
import "./Contact.css";
import LocationIcon from "../../images/location-icon.png";
import PhoneIcon from "../../images/phone-icon.png";
import EmailIcon from "../../images/email-icon.png";

function Contact({phone, email, address, addressLink, addressSecond, addressSecondLink, addressThird, addressThirdLink}) {
  return (
    <>
      <section className="conatct_sec" id="Contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title text-center">
                <h3>
                  <span>Contact</span> Us
                </h3>
              </div>
              <p className="text-center">
              Your Gateway to Reach Us. Contact us with ease to discover more about our services, book an appointment, or inquire about any queries you may have. We're here to assist you and look forward to connecting with you.
              </p>
            </div>
          </div>

          <div className="row conntact_row">
            <div className="col-lg-4 contact_left">
              <div className="section-content">
                <div className="contact_item">
                  <div className="icon">
                    <img
                      src={LocationIcon}
                      alt="Location"
                      className="img-fluid"
                    />
                  </div>
                  <div className="contact_details">
                    <h4>Address</h4>
                    <p><a href={addressLink} target="_blank" without rel="noreferrer">{address}</a></p>
                    <p><a href={addressSecondLink} target="_blank" without rel="noreferrer">{addressSecond}</a></p>
                    <p><a href={addressThirdLink} target="_blank" without rel="noreferrer">{addressThird}</a></p>
                  </div>
                </div>

                <div className="contact_item">
                  <div className="icon">
                    <img src={EmailIcon} alt="Email" className="img-fluid" />
                  </div>
                  <div className="contact_details">
                    <h4>Email</h4>
                    <p><a href={`mailto:${email}`}>{email}</a></p>
                  </div>
                </div>

                <div className="contact_item">
                  <div className="icon">
                    <img src={PhoneIcon} alt="Phone" className="img-fluid" />
                  </div>
                  <div className="contact_details">
                    <h4>Phone</h4>
                    <p><a href={`tel:${phone}`}>{phone}</a></p>
                  </div>
                </div>

                <div className="Opening_hours">
                  <h3>Opening Hours</h3>
                  <ul className="list-unstyled">
                    <li>
                      Monday - Friday{" "}
                      <span className="pull-right">9.00 Am - 9.00 Pm</span>
                    </li>
                    <li>
                      Saturday{" "}
                      <span className="pull-right">9.00 Am - 9.00 Pm</span>
                    </li>
                    <li>
                      Sunday <span className="pull-right">9.00 Am - 9.00 Pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 contact_right">
              <div className="contact-map">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1970032259464!2d77.0476443!3d28.4736132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1961c508d423%3A0x749843233181e023!2sThe%20Spa%20Space!5e0!3m2!1sen!2sin!4v1698148617706!5m2!1sen!2sin"
                  style={{ width: "100%", border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

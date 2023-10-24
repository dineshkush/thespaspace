import React, { useState } from "react";
import "./Header.css";
import Logo from "../../logo.png";

function Header(props) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId, offset) => {
    // Find the target section by its ID
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      // Calculate the offset
    const offsetValue = offset || 0; // Default to 0 if offset is not provided

    // Calculate the target scroll position
    const targetScrollPosition = targetSection.offsetTop - offsetValue;
    // Scroll to the target section with the specified offset
    window.scrollTo({ top: targetScrollPosition, behavior: "smooth" });
    }
    // Close the mobile menu after clicking a menu item
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="top_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="top_bar_contact">
                <ul>
                  <li className="phone">
                    <i class="fa-solid fa-phone"></i> <a href={`tel:${props.phone}`}>{props.phone}</a>
                  </li>
                  <li className="email">
                <i class="fa-solid fa-envelope"></i> <a href={`mailto:${props.email}`}>{props.email}</a>
                </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              
            <div className="header_social_media">
                <ul>
                  <li>
                    <a
                      href={props.facebook}
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.instagram}
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header_area sticky-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#home">
                  <img src={Logo} alt="The Spa Space" /> <h1>The Spa Space</h1>
                </a>
                {/* Mobile Toggle Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  onClick={toggleMobileMenu}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Off-canvas Navbar */}
                <div
                  className={`offcanvas offcanvas-start${
                    isMobileMenuOpen ? " show" : ""
                  }`}
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      The Spa Space
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      onClick={toggleMobileMenu}
                    ></button>
                  </div>
                  <div className="offcanvas-body justify-content-end nav_header">
                    {/* Your off-canvas menu items */}
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("Home", 120)}
                        >
                          Home
                        </p>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("About", 50)}
                        >
                          About
                        </p>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("Services", 50)}
                        >
                          Services
                        </p>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("Gallery", 50)}
                        >
                          Gallery
                        </p>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("Testimonials", 50)}
                        >
                          Testimonials
                        </p>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("Contact", 50)}
                        >
                          Contact
                        </p>
                      </li>
                      {/* Add more menu items here */}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

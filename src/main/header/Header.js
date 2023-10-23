import React, { useState } from "react";
import "./Header.css";
import Logo from "../../logo.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    // Find the target section by its ID
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      // Scroll to the target section
      targetSection.scrollIntoView({ behavior: "smooth" });
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
                  <li className="address">
                    <i class="fa-solid fa-location-dot"></i> Sector 14 Main Rd,
                    DLF Colony, Sector 14, Gurugram
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="top_bar_contact justify-content-end d-flex">
                <ul>
                  <li className="phone">
                    <i class="fa-solid fa-phone"></i> <a href="tel:09990748347">09990748347</a>
                  </li>
                  {/* <li className="email">
                <i class="fa-solid fa-envelope"></i> Sector 14 Main Rd,
                  DLF Colony, Sector 14, Gurugram
                </li> */}
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
                      Offcanvas Menu
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
                          onClick={() => scrollToSection("home")}
                        >
                          Home
                        </p>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("about-us")}
                        >
                          About
                        </p>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("services")}
                        >
                          Services
                        </p>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("gallery")}
                        >
                          Gallery
                        </p>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => scrollToSection("contact")}
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

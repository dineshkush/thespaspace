import React, { useState } from "react";
import "./Gallery.css";
import BodyMassageCentres from "../../images/body-massage-centres.jpg";
import BeautySpas from "../../images/beauty-spas.jpg";
import MassageCentresForMen from "../../images/massage-centres-for-men.jpg";
import NeckAndShoulder from "../../images/neck-and-shoulder.jpg";
import HandsAndFeet from "../../images/hands-and-feet.jpg";
import HandsAndFeet2 from "../../images/hands-and-feet-img.jpg";
import BodyMassageCentres2 from "../../images/BodyMassageCentres2.jpg";
import BeautySpasImg from "../../images/beauty-spas-img.jpg";

function Gallery() {
  const images = [BodyMassageCentres, BeautySpas, MassageCentresForMen, NeckAndShoulder, HandsAndFeet, HandsAndFeet2, BodyMassageCentres2, BeautySpasImg ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      // Loop back to the first image
      setSelectedImage(0);
    }
  };

  const goToPrevious = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else {
      // Loop to the last image when at the beginning
      setSelectedImage(images.length - 1);
    }
  };

  return (
    <>
      <section className="gallery_sec" id="Gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title text-center">
                <h3>
                  <span>Our</span> Gallery
                </h3>
              </div>
              <p className="text-center">
                A Visual Journey of Elegance and Beauty. Immerse yourself in the
                captivating visuals that tell the story of our exceptional
                services and tranquil ambiance. Each image is a testament to the
                care, skill, and attention to detail we pour into every client
                experience.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className={`lightbox ${selectedImage !== null ? "active" : ""}`}
              >
                <span className="close-button" onClick={closeLightbox}>
                <i class="fa-solid fa-xmark"></i>
                </span>
                {selectedImage !== null && (
                  <div className="lightbox-content">
                    <img
                      src={images[selectedImage]}
                      alt={`Gallery ${selectedImage + 1}`}
                      className="img-fluid"
                    />
                    <div className="nav-buttons">
                      <button onClick={goToPrevious} className="prev-button">
                      <i class="fa-solid fa-chevron-left"></i>
                      </button>
                      <button onClick={goToNext} className="next-button">
                      <i class="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="gallery">
                <div className="row">
                  {images.map((image, index) => (
                    <div className="col-lg-3 col-4">
                      <img
                        key={index}
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        onClick={() => openLightbox(index)}
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;

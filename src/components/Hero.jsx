import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar1 from "../images/cars-big/rorship.png";
import HeroCar2 from "../images/cars-big/rixen2.png";
import HeroCar3 from "../images/cars-big/rixen3.png";
import "../styles/Hero.css"; // Ensure you link your CSS file

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [HeroCar1, HeroCar2, HeroCar3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 4000);
    return () => clearInterval(autoSlide);
  }, []);

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <img className="bg-shape" src={BgShape} alt="background-shape" />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">V-Parso</h1>
            <h4 className="hero-price">
              ₹1,59,000/- <span className="starting-price">Starting Price</span>
            </h4>
            <div className="hero-details">
              <p>
                <i className="fa-solid fa-gauge-simple-high"></i> Speed:{" "}
                <span>80km/h</span>
              </p>
              <p>
                <i className="fa-solid fa-road"></i> Range:{" "}
                <span>150-170km</span>
              </p>
            </div>
            <p className="hero-desc">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="hero-buttons">
              <Link onClick={bookBtn} className="book-btn" to="/">
                Book Ride <i className="fa-solid fa-circle-check"></i>
              </Link>
            </div>
          </div>

          <div className="carousel">
            <button className="carousel-btn prev" onClick={prevSlide}>
              &#10094;
            </button>
            <div className="carousel-slide">
              <img
                src={images[currentIndex]}
                alt="car-img"
                className="carousel-img"
              />
            </div>
            <button className="carousel-btn next" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar1 from "../images/cars-big/rorship.png";
import HeroCar2 from "../images/cars-big/rixen2.png";
import HeroCar3 from "../images/cars-big/rixen3.png";

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
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide);
  }, []);

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h1>V-Parso</h1>
              <h4>
                ₹1,59,000/-{" "}
                <span>
                  <p>Starting Price</p>
                </span>
              </h4>
              <p>
                <span>
                  <i className="fa-solid fa-gauge-simple-high"></i> Speed{" "}
                </span>
                <span>80km/h</span>
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-road"></i> Range{" "}
                </span>
                <span>150-170km</span>
              </p>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
            </div>

            <div className="carousel">
              <button className="carousel-btn prev" onClick={prevSlide}>
                &#10094;
              </button>
              <img
                src={images[currentIndex]}
                alt="car-img"
                className="carousel-img"
              />
              <button className="carousel-btn next" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

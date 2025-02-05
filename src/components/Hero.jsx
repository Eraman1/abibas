import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/cars-big/rixen2.png";
// import { useEffect, useState } from "react";

function Hero() {
  // const [goUp, setGoUp] = useState(false);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: (0, 0), behavior: "smooth" });
  // };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   const onPageScroll = () => {
  //     if (window.pageYOffset > 600) {
  //       setGoUp(true);
  //     } else {
  //       setGoUp(false);
  //     }
  //   };
  //   window.addEventListener("scroll", onPageScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onPageScroll);
  //   };
  // }, []);
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
                  <i className="fa-solid fa-gauge-simple-high"></i> &nbsp; Speed
                  &nbsp;
                </span>
                <span>80km/h</span>
              </p>
              <p>
                <span>
                  <i className="fa-sharp-duotone fa-solid fa-road"></i> &nbsp;
                  Range &nbsp;
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
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                {/* <Link className="hero-content__text__btns__learn-more" to="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link> */}
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        {/* <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div> */}
      </section>
    </>
  );
}

export default Hero;

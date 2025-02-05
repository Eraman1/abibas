import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/vpaseo5.png";
import CarImg2 from "../images/cars-big/rixen2.png";
import CarImg3 from "../images/cars-big/rorship.png";
import CarImg4 from "../images/cars-big/vpaseo5.png";
import CarImg5 from "../images/cars-big/rixen2.png";
import CarImg6 from "../images/cars-big/rorship.png";
import { Link } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>V-Perso</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>₹1,19,999/-</h4>
                      <p>Starting Price</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-gauge-simple-high"></i> &nbsp;
                      Speed
                    </span>
                    <span style={{ textAlign: "right" }}>60km/h</span>
                    <span>
                      <i className="fa-sharp-duotone fa-solid fa-road"></i>{" "}
                      &nbsp; Range
                    </span>
                    <span style={{ textAlign: "right" }}>80-100km</span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Rixen</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>₹1,07,000/-</h4>
                      <p>Starting Price</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-gauge-simple-high"></i> &nbsp;
                      Speed
                    </span>
                    <span style={{ textAlign: "right" }}>60km/h</span>
                    <span>
                      <i className="fa-sharp-duotone fa-solid fa-road"></i>{" "}
                      &nbsp; Range
                    </span>
                    <span style={{ textAlign: "right" }}>80-100km</span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Rorship</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>₹1,87,000/-</h4>
                      <p>Starting Price</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-gauge-simple-high"></i> &nbsp;
                      Speed
                    </span>
                    <span style={{ textAlign: "right" }}>90-110km/h</span>
                    <span>
                      <i className="fa-sharp-duotone fa-solid fa-road"></i>{" "}
                      &nbsp; Range
                    </span>
                    <span style={{ textAlign: "right" }}>180-212km</span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>V-Parso 1.0</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>₹1,69,000/-</h4>
                      <p>Starting Price</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-gauge-simple-high"></i> &nbsp;
                      Speed
                    </span>
                    <span style={{ textAlign: "right" }}>80km/h</span>
                    <span>
                      <i className="fa-sharp-duotone fa-solid fa-road"></i>{" "}
                      &nbsp; Range
                    </span>
                    <span style={{ textAlign: "right" }}>170-200km</span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Rixen-ES</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>₹1,59,000/-</h4>
                      <p>Starting Price</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-gauge-simple-high"></i> &nbsp;
                      Speed
                    </span>
                    <span style={{ textAlign: "right" }}>80km/h</span>
                    <span>
                      <i className="fa-sharp-duotone fa-solid fa-road"></i>{" "}
                      &nbsp; Range
                    </span>
                    <span style={{ textAlign: "right" }}>150-170km</span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Rorship pro</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>₹1,87,000/-</h4>
                      <p>Starting Price</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-gauge-simple-high"></i> &nbsp;
                      Speed
                    </span>
                    <span style={{ textAlign: "right" }}>90-110km/h</span>
                    <span>
                      <i className="fa-sharp-duotone fa-solid fa-road"></i>{" "}
                      &nbsp; Range
                    </span>
                    <span style={{ textAlign: "right" }}>180-212km</span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a Ev Scooter by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+91-8123254305</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </section>
    </>
  );
}

export default Models;

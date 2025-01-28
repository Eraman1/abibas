import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import WhatsAppButton from "../components/WhatsAppButton";
import AboutMain from "../images/about/ABIBAS MOTORS INDIA PVT LTD.png";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Abibas Motors is Indian startup committed to provide quality and
                affordable mobility solutions in India. Established in 2024 with
                a vision to transform urban transportation by offering
                eco-friendly alternatives to traditional modes of travel, Driven
                by a shared goal of reducing carbon emissions, improving urban
                mobility, and electrifying India. for that we are working
                tirelessly to develop cutting-edge electric scooters that
                combine style, performance, and sustainability.
              </p>
              {/* <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
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
    </>
  );
}

export default About;

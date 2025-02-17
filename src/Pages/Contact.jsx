import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import WhatsAppButton from "../components/WhatsAppButton";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                <b>Redefining Mobility</b>: At Abibas Motors, we are committed
                to redefining how you move with smarter, cleaner, and faster
                electric solutions. <br /> <b>Customer-Centric Approach</b>: Our
                team is here to assist you with any queries or support you
                need—your satisfaction is our priority. <br />{" "}
                <b>Reach Out Anytime</b>: Contact us to explore our innovative
                EV scooters or for assistance in choosing the perfect ride for
                your journey.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; +91-8123254305
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                contact@abibasmotors.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; No. 235, 13th
                Cross, 2nd floor,Indiranagar Bangalore North, Karnataka, India -
                560038
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>
                <label>
                  Contant Number <b>*</b>
                </label>
                <input type="text" placeholder="+91 1234567890"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
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
       
      </section>
    </>
  );
}

export default Contact;

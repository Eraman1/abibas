import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
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

export default TestimonialsPage;

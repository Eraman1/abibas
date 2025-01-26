import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Move one card at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-content__title">
            <h4>Reviewed by People</h4>
            <h2>Client's Testimonials</h2>
            <p>
              Discover the positive impact we've made on our clients by reading
              through their testimonials. Our clients have experienced our
              service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Slider {...settings}>
            {/* Card 1 */}
            <div className="all-testimonials__box">
              <span className="quotes-icon">
                <i className="fa-solid fa-quote-right"></i>
              </span>
              <p>
                "The vehicles were in pristine condition, and the prices were
                unbeatable. Will definitely rent again!"
              </p>
              <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                  <img src={Img2} alt="user_img" />
                  <span>
                    <h4>Parry Hotter</h4>
                    <p>Belgrade</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="all-testimonials__box">
              <span className="quotes-icon">
                <i className="fa-solid fa-quote-right"></i>
              </span>
              <p>
                "The vehicles were in pristine condition, and the prices were
                unbeatable. Will definitely rent again!"
              </p>
              <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                  <img src={Img3} alt="user_img" />
                  <span>
                    <h4>Ron Rizzly</h4>
                    <p>Novi Sad</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="all-testimonials__box">
              <span className="quotes-icon">
                <i className="fa-solid fa-quote-right"></i>
              </span>
              <p>
                "The vehicles were in pristine condition, and the prices were
                unbeatable. Will definitely rent again!"
              </p>
              <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                  <img src={Img2} alt="user_img" />
                  <span>
                    <h4>Hermione Cranger</h4>
                    <p>Skopje</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="all-testimonials__box">
              <span className="quotes-icon">
                <i className="fa-solid fa-quote-right"></i>
              </span>
              <p>
                "The vehicles were in pristine condition, and the prices were
                unbeatable. Will definitely rent again!"
              </p>
              <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                  <img src={Img3} alt="user_img" />
                  <span>
                    <h4>Draco Balfoy</h4>
                    <p>Split</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="all-testimonials__box">
              <span className="quotes-icon">
                <i className="fa-solid fa-quote-right"></i>
              </span>
              <p>
                "The vehicles were in pristine condition, and the prices were
                unbeatable. Will definitely rent again!"
              </p>
              <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                  <img src={Img2} alt="user_img" />
                  <span>
                    <h4>Ginny Measley</h4>
                    <p>Zagreb</p>
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

import MainImg from "../images/chooseUs/abibasmotors.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <h2>Why Choose Us for Your EV Scooter Needs?</h2>
        <img className="choose-container__img" src={MainImg} alt="car_img" />
        <div className="container">
          <div className="choose-container">
            {/* <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            /> */}
            <div className="text-container">
              <div className="text-container__left">
                <div className="text-container__left__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__left__box__text">
                    <h4>Cutting-Edge Technology</h4>
                    <p>
                      Our EV scooters are designed with the latest advancements
                      in electric mobility, ensuring superior performance,
                      extended battery life, and enhanced safety features.
                    </p>
                  </div>
                </div>
                <div className="text-container__left__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__left__box__text">
                    <h4>Eco-Friendly Mobility</h4>
                    <p>
                      We are committed to sustainability. Our scooters produce
                      zero emissions, helping you reduce your carbon footprint
                      while enjoying an efficient and smooth ride.
                    </p>
                  </div>
                </div>
                <div className="text-container__left__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__left__box__text">
                    <h4>Unmatched Quality</h4>
                    <p>
                      Built with premium materials and rigorous quality checks,
                      our scooters are designed to be durable, reliable, and
                      stylish—perfect for urban commuters and adventurers alike.
                    </p>
                  </div>
                </div>
                <div className="text-container__left__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__left__box__text">
                    <h4>Affordable and Cost-Effective</h4>
                    <p>
                      Say goodbye to high fuel costs and frequent maintenance.
                      Our EV scooters offer a budget-friendly alternative with
                      significantly lower running and maintenance expenses.
                    </p>
                  </div>
                </div>
                <div className="text-container__left__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__left__box__text">
                    <h4>Innovative Design</h4>
                    <p>
                      Our scooters combine sleek aesthetics with functional
                      ergonomics, offering a modern and comfortable riding
                      experience that turns heads wherever you go.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Smart Features</h4>
                    <p>
                      Equipped with cutting-edge features like GPS tracking, app
                      connectivity, and anti-theft systems, our scooters
                      integrate technology to make your rides smarter and safer.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Customer-Centric Service</h4>
                    <p>
                      From purchase to after-sales support, we prioritize your
                      satisfaction. Our dedicated team is here to ensure a
                      seamless experience every step of the way.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Comprehensive Warranty & Support</h4>
                    <p>
                      Enjoy peace of mind with our comprehensive warranty and
                      responsive customer service. We’re here to keep you on the
                      road, worry-free.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Join the EV Revolution</h4>
                    <p>
                      By choosing us, you’re not just buying a scooter—you’re
                      joining a movement toward a cleaner, greener future.
                      Together, we can revolutionize urban mobility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;

import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>VISION & MISSION</h3>
              <h2>
                Eco-friendly mobility transforming urban transportation in
                India.
              </h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>SAFETY</h3>
                <p>
                  Committed to ensuring safe, reliable, and secure mobility
                  solutions for every journey.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>QUALITY</h3>
                <p>
                  Delivering exceptional quality through innovative and
                  sustainable mobility solutions.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>ADVANCE TECHNOGY</h3>
                <p>
                  Leveraging advanced technology to drive smarter, sustainable
                  mobility.
                </p>
              </div>
              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>BEST SERVICE</h3>
                <p>
                  Providing unparalleled service for a seamless mobility
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;

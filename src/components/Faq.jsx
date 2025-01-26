import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>
                    1. What is the range of your Abibas scooters on a single
                    charge?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Our scooters offer a range of 100–250 km] on a single full
                  charge, depending on the model and riding conditions.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. How long does it take to fully charge the scooter?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Charging times vary by model, but typically it takes 4–6 hours
                  for a full charge using a standard charger. Fast charging
                  options may reduce this time to 1–2 hours.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. What is the top speed of your scooters?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  The top speed of our scooters ranges from 65 km/h for
                  entry-level models to 110 km/h for performance models,
                  adhering to local traffic regulations.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q4"
                  onClick={() => openQ("q4")}
                  className={`faq-box__question ${getClassQuestion("q4")}`}
                >
                  <p>4. Are your scooters waterproof?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q4"
                  onClick={() => openQ("q4")}
                  className={`faq-box__answer ${getClassAnswer("q4")}`}
                >
                  Yes, our scooters are designed to be water-resistant and can
                  handle light rain or wet roads. However, we recommend avoiding
                  deep water or heavy flooding conditions.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q5"
                  onClick={() => openQ("q5")}
                  className={`faq-box__question ${getClassQuestion("q5")}`}
                >
                  <p>5. What is the warranty period for your scooters?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q5"
                  onClick={() => openQ("q5")}
                  className={`faq-box__answer ${getClassAnswer("q5")}`}
                >
                  We offer a 3-year warranty that covers the battery, motor, and
                  other critical components. Please refer to our warranty policy
                  for details.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q6"
                  onClick={() => openQ("q6")}
                  className={`faq-box__question ${getClassQuestion("q6")}`}
                >
                  <p>6. Where can I get the scooter serviced?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q6"
                  onClick={() => openQ("q6")}
                  className={`faq-box__answer ${getClassAnswer("q6")}`}
                >
                  We have a network of authorized Dealer & service centers
                  across India. You can also schedule a service appointment
                  through our mobile app or website.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q7"
                  onClick={() => openQ("q7")}
                  className={`faq-box__question ${getClassQuestion("q7")}`}
                >
                  <p>7. Can I test ride a scooter before purchasing?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q7"
                  onClick={() => openQ("q7")}
                  className={`faq-box__answer ${getClassAnswer("q7")}`}
                >
                  Yes! We encourage customers to book a free test ride at any of
                  our showrooms or during promotional events.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q8"
                  onClick={() => openQ("q8")}
                  className={`faq-box__question ${getClassQuestion("q8")}`}
                >
                  <p>8. Do you offer financing options?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q8"
                  onClick={() => openQ("q8")}
                  className={`faq-box__answer ${getClassAnswer("q8")}`}
                >
                  Yes, we have flexible financing plans and installment options
                  to make owning an Abibas scooter more accessible.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q9"
                  onClick={() => openQ("q9")}
                  className={`faq-box__question ${getClassQuestion("q9")}`}
                >
                  <p>9. What safety features are included in your scooters?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q9"
                  onClick={() => openQ("q9")}
                  className={`faq-box__answer ${getClassAnswer("q9")}`}
                >
                  Our scooters are equipped with features like anti-lock braking
                  systems (ABS), regenerative braking, LED headlights, and smart
                  app connectivity for enhanced safety and convenience.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q10"
                  onClick={() => openQ("q10")}
                  className={`faq-box__question ${getClassQuestion("q10")}`}
                >
                  <p>10. How do I charge the scooter?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q10"
                  onClick={() => openQ("q10")}
                  className={`faq-box__answer ${getClassAnswer("q6")}`}
                >
                  You can charge the scooter at home using a standard outlet or
                  at one of our public charging stations. Some models also
                  feature removable batteries for easy charging indoors.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q11"
                  onClick={() => openQ("q11")}
                  className={`faq-box__question ${getClassQuestion("q11")}`}
                >
                  <p>11. What happens if I run out of charge while riding?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q11"
                  onClick={() => openQ("q11")}
                  className={`faq-box__answer ${getClassAnswer("q11")}`}
                >
                  We recommend monitoring your battery level via the scooter's
                  display or app. In case of an emergency, you can contact
                  roadside assistance, available in certain areas.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q12"
                  onClick={() => openQ("q12")}
                  className={`faq-box__question ${getClassQuestion("q12")}`}
                >
                  <p>12. Can I upgrade or replace the battery later?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q12"
                  onClick={() => openQ("q12")}
                  className={`faq-box__answer ${getClassAnswer("q12")}`}
                >
                  Yes, batteries can be upgraded or replaced. Contact our
                  service centers for compatible battery options.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q13"
                  onClick={() => openQ("q13")}
                  className={`faq-box__question ${getClassQuestion("q13")}`}
                >
                  <p>13. Are spare parts readily available?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q13"
                  onClick={() => openQ("q13")}
                  className={`faq-box__answer ${getClassAnswer("q13")}`}
                >
                  Yes, we stock all essential spare parts and accessories at our
                  service centers and online store.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q14"
                  onClick={() => openQ("q14")}
                  className={`faq-box__question ${getClassQuestion("q14")}`}
                >
                  <p>14. Do you offer customization options?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q14"
                  onClick={() => openQ("q14")}
                  className={`faq-box__answer ${getClassAnswer("q14")}`}
                >
                  We offer a range of accessories and color choices to
                  personalize your scooter. Some models may also allow for
                  advanced customizations.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q15"
                  onClick={() => openQ("q15")}
                  className={`faq-box__question ${getClassQuestion("q15")}`}
                >
                  <p>
                    15. What makes your scooters different from others on the
                    market?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q15"
                  onClick={() => openQ("q15")}
                  className={`faq-box__answer ${getClassAnswer("q15")}`}
                >
                  Our scooters combine cutting-edge technology, sleek design,
                  and exceptional performance, along with top-notch customer
                  service and eco-friendly innovations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

import React from "react";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroPages from "../components/HeroPages";
import Banner from "../components/Banner";

export default function Refund() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="Refund Policy" />
        <div className="container">
          <div className="about-main">
            <div className="about-main__text">
              <section class="refund-policy">
                <h2>Abibas Refund Policy</h2>
                <p>
                  If a customer opts for a vehicle with a charging equipment
                  installation, the booking amount is refundable till such time
                  that the charging solution is installed. In the event the
                  customer requests for cancellation of the booking after
                  installation of the charging equipment by us, the customer
                  shall not be entitled to any refunds.
                </p>
                <p>
                  On such cancellation, we shall have the right to, directly or
                  through a third party, uninstall and take possession of the
                  charging equipment and adjust the booking amount towards
                  deinstallation of the charging equipment. If the customer has
                  not opted for charging equipment installation, the booking
                  amount is refundable till the time that the customer makes the
                  full payment for the vehicle.
                </p>
                <p>
                  All eligible refunds shall be processed by us within a period
                  of 7 working days. Please note that the customers will be
                  eligible for refunds only for the booking amount paid by the
                  customers. The customers shall not be eligible for any refunds
                  on payment by the customer of the complete purchase amount
                  towards the vehicle.
                </p>
              </section>

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
        </div>
      </section>
      <Banner />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

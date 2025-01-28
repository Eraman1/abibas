import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [active, setActive] = useState("FirstCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our Scooters</h2>
              <p>
                Choose from a variety of our amazing EV-Scooters to buy for your
                Stylish and Adventures Journey.
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn1");
                  }}
                >
                  &nbsp;&nbsp;&nbsp; V-PASEO &nbsp;&nbsp;&nbsp;
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn2");
                  }}
                >
                  &nbsp;&nbsp;&nbsp; V-PASEO 1.0 &nbsp;&nbsp;&nbsp;
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  &nbsp;&nbsp;&nbsp; Rixen &nbsp;&nbsp;&nbsp;
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  &nbsp;&nbsp;&nbsp; Rixen-ES &nbsp;&nbsp;&nbsp;
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  &nbsp;&nbsp;&nbsp; Rorship &nbsp;&nbsp;&nbsp;
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  &nbsp;&nbsp;&nbsp; Rorship-Pro &nbsp;&nbsp;&nbsp;
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;

import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>₹ {car.price}/-</span> Starting price
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>MOTOR</span>
                <span>{car.motor}</span>
              </div>

              <div className="pick-description__table__col">
                <span>SPEED</span>
                <span>{car.speed}</span>
              </div>

              <div className="pick-description__table__col">
                <span>BREAK</span>
                <span>{car.break}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Battery</span>
                <span>{car.battery}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Range</span>
                <span>{car.range}</span>
              </div>

              <div className="pick-description__table__col">
                <span>INSTRUMENT</span>
                <span>{car.instrument}</span>
              </div>
              <div className="pick-description__table__col">
                <span>TYRE</span>
                <span>{car.tyre}</span>
              </div>
              <div className="pick-description__table__col">
                <span>ADDITIONAL</span>
                <span>{car.additional}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Book Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;

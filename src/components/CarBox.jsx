import { useState } from "react"

function CarBox({ car }) {
  const [carLoad, setCarLoad] = useState(true)
  console.log(car)
  return (
    <div className="box-cars">
      <div className="pick-car">
        {carLoad && <span className="loader"></span>}
        <img
          style={{ display: carLoad ? "none" : "block" }}
          src={car.image || "/placeholder.svg"}
          alt={car.name}
          onLoad={() => setCarLoad(false)}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "/placeholder.svg"
            setCarLoad(false)
          }}
        />
      </div>
      <div className="pick-description">
        <div className="pick-description__price">
          <span>₹ {car.startingPrice}/-</span> Starting price
        </div>
        <div className="pick-description__table">
          {car.motor && (
            <div className="pick-description__table__col">
              <span>MOTOR</span>
              <span>{car.motor}</span>
            </div>
          )}
          {car.speed && (
            <div className="pick-description__table__col">
              <span>SPEED</span>
              <span>{car.speed}</span>
            </div>
          )}
          {car.brake && (
            <div className="pick-description__table__col">
              <span>BRAKE</span>
              <span>{car.brake}</span>
            </div>
          )}
          {car.battery && (
            <div className="pick-description__table__col">
              <span>Battery</span>
              <span>{car.battery}</span>
            </div>
          )}
          {car.range && (
            <div className="pick-description__table__col">
              <span>Range</span>
              <span>{car.range}</span>
            </div>
          )}
          {car.instrument && (
            <div className="pick-description__table__col">
              <span>INSTRUMENT</span>
              <span>{car.instrument}</span>
            </div>
          )}
          {car.tyre && (
            <div className="pick-description__table__col">
              <span>TYRE</span>
              <span>{car.tyre}</span>
            </div>
          )}
          {car.additional && (
            <div className="pick-description__table__col">
              <span>ADDITIONAL</span>
              <span>{car.additional}</span>
            </div>
          )}
        </div>
        <a className="cta-btn" href="#booking-section">
          Book Now
        </a>
      </div>
    </div>
  )
}

export default CarBox


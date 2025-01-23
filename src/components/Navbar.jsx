import { Link } from "react-router-dom";
import Logo from "../images/logo/abibas.jpg";
import { useEffect, useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleZip = (e) => setZipCode(e.target.value);

  const openNav = () => setNav(!nav);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(false);
    alert("Booking confirmed!");
  };

  return (
    <>
      <div
        onClick={closeModal}
        className={`modal-overlay ${modal ? "active-modal" : ""}`}
      ></div>

      <nav>
        {/* Mobile Navbar */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Join Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Navbar */}
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/models">Vehicle Models</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/team">Join Our Team</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            {/* <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div> */}
            <Link
              onClick={openModal}
              className="navbar__buttons__sign-in "
              to="/"
            >
              Dealership
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={closeModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <form className="info-form" onSubmit={confirmBooking}>
          <div className="info-form__2col">
            <span>
              <label>
                First Name <b>*</b>
              </label>
              <input
                value={name}
                onChange={handleName}
                type="text"
                placeholder="Enter your first name"
                required
              />
            </span>
            <span>
              <label>
                Last Name <b>*</b>
              </label>
              <input
                value={lastName}
                onChange={handleLastName}
                type="text"
                placeholder="Enter your last name"
                required
              />
            </span>
          </div>
          <div className="info-form__2col">
            <span>
              <label>
                Phone Number <b>*</b>
              </label>
              <input
                value={phone}
                onChange={handlePhone}
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </span>
            <span>
              <label>
                Age <b>*</b>
              </label>
              <input
                value={age}
                onChange={handleAge}
                type="number"
                placeholder="18"
                required
              />
            </span>
          </div>
          <div className="info-form__1col">
            <span>
              <label>
                Email <b>*</b>
              </label>
              <input
                value={email}
                onChange={handleEmail}
                type="email"
                placeholder="Enter your email address"
                required
              />
            </span>
          </div>
          <div className="info-form__1col">
            <span>
              <label>
                Address <b>*</b>
              </label>
              <input
                value={address}
                onChange={handleAddress}
                type="text"
                placeholder="Enter your street address"
                required
              />
            </span>
          </div>
          <div className="info-form__2col">
            <span>
              <label>
                City <b>*</b>
              </label>
              <input
                value={city}
                onChange={handleCity}
                type="text"
                placeholder="Enter your city"
                required
              />
            </span>
            <span>
              <label>
                Zip Code <b>*</b>
              </label>
              <input
                value={zipcode}
                onChange={handleZip}
                type="text"
                placeholder="Enter your zip code"
                required
              />
            </span>
          </div>
          <div className="reserve-button">
            <button type="submit">Reserve Now</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Navbar;

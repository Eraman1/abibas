import { Link } from "react-router-dom";
import Logo from "../images/logo/abibas.jpg";
import { useEffect, useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false); // For mobile nav
  const [modal, setModal] = useState(false); // For modal
  const [dropdown, setDropdown] = useState(false); // For dropdown menu

  // Form states
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleNav = () => setNav(!nav);
  const toggleModal = () => setModal(!modal);
  const toggleDropdown = () => setDropdown(!dropdown);

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
      {/* Modal Overlay */}
      <div
        onClick={toggleModal}
        className={`modal-overlay ${modal ? "active-modal" : ""}`}
      ></div>

      <nav>
        {/* Mobile Navbar */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={toggleNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={toggleNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} to="/about">
                About
              </Link>
            </li>
            {/* Dropdown */}
            <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <span className="dropdown-title">Vehicle Models</span>
              {dropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link onClick={toggleNav} to="/models/scooter1">
                      V-PASEO
                    </Link>
                  </li>
                  <li>
                    <Link onClick={toggleNav} to="/models/scooter2">
                      RIXEN
                    </Link>
                  </li>
                  <li>
                    <Link onClick={toggleNav} to="/models/scooter3">
                      RORSHIP
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* <li>
              <Link onClick={toggleNav} to="/testimonials">
                Testimonials
              </Link>
            </li> */}
            {/* <li>
              <Link onClick={toggleNav} to="/team">
                Join Our Team
              </Link>
            </li> */}
            <li>
              <Link onClick={toggleNav} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} to="/contact">
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
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <span className="dropdown-title">Vehicle Models</span>
              {dropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/models">V-PASEO</Link>
                  </li>
                  <li>
                    <Link to="/models">RIXEN</Link>
                  </li>
                  <li>
                    <Link to="/models">RORSHIP</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* <li>
              <Link to="/testimonials">Testimonials</Link>
            </li> */}
            {/* <li>
              <Link to="/team">Join Our Team</Link>
            </li> */}
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link
              onClick={toggleModal}
              className="navbar__buttons__sign-in"
              to="/"
            >
              Dealership
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="mobile-hamb" onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={toggleModal} className="fa-solid fa-xmark"></i>
        </div>
        <form className="info-form" onSubmit={confirmBooking}>
          <div className="info-form__2col">
            <span>
              <label>
                Name of the applicant <b>*</b>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your full name"
                required
              />
            </span>
            <span>
              <label>
                Email ID of the applicant <b>*</b>
              </label>
              <input
                name="email"
                value={form.lastName}
                onChange={handleInputChange}
                type="email"
                placeholder="Enter your email"
                required
              />
            </span>
          </div>
          <div className="info-form__2col">
            <span>
              <label>
                Applicant's Contact Number <b>*</b>
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </span>
            <span>
              <label>
                Applicant's age <b>*</b>
              </label>
              <input
                name="age"
                value={form.age}
                onChange={handleInputChange}
                type="number"
                placeholder="18"
                required
              />
            </span>
          </div>
          <div className="info-form__2col">
            <span>
              <label>
                Applicant's Educational Qualification <b>*</b>
              </label>
              <input
                name="qualification"
                value={form.email}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your Qualification"
                required
              />
            </span>
            <span>
              <label>
                Present Business <b>*</b>
              </label>
              <input
                name="business"
                value={form.email}
                onChange={handleInputChange}
                type="email"
                placeholder="Enter your present business"
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
                name="address"
                value={form.address}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your street address"
                required
              />
            </span>
          </div>
          <div className="info-form__3col">
            <span>
              <label>
                No. of Years in Business <b>*</b>
              </label>
              <input
                name="years"
                value={form.city}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter years"
                required
              />
            </span>
            <span>
              <label>Your Turnover</label>
              <input
                name="turnover"
                value={form.zipcode}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your turnover"
                required
              />
            </span>
            <span>
              <label>
                Investment Capacity <b>*</b>
              </label>
              <input
                name="investment"
                value={form.zipcode}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter investment capacity"
                required
              />
            </span>
          </div>
          <div className="info-form__1col">
            <span>
              <label>
                Please leave any comments or suggestions below.<b>*</b>
              </label>
              <input
                name="answer"
                value={form.address}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your street address"
                required
              />
            </span>
          </div>
          <div className="reserve-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Navbar;

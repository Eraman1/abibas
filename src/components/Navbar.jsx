import { Link } from "react-router-dom"
import Logo from "../images/logo/abibas.jpg"
import { useEffect, useState } from "react"
import axiosInstance from "../api/axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Navbar() {
  const [nav, setNav] = useState(false)
  const [modal, setModal] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    age: "",
    educationalQualification: "",
    presentBusiness: "",
    address: "",
    yearsInBusiness: "",
    turnover: "",
    investmentCapacity: "",
    comments: "",
    termsAccepted: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const toggleNav = () => setNav(!nav)
  const toggleModal = () => setModal(!modal)
  const toggleDropdown = () => setDropdown(!dropdown)

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto"
  }, [modal])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axiosInstance.post("/applicant/create", form)
      setModal(false)
      toast.success("Application submitted successfully!")
    } catch (error) {
      console.error("Error submitting application:", error)
      toast.error("Error submitting application. Please try again.")
    }
  }

  return (
    <>

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
          <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span className="dropdown-title">Vehicle Models</span>
            {dropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link onClick={toggleNav} to="/models">
                    V-PASEO
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to="/models">
                    RIXEN
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to="/models">
                    RORSHIP
                  </Link>
                </li>
              </ul>
            )}
          </li>
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
        <div className="navbar__buttons">
          <Link onClick={toggleModal} className="navbar__buttons__sign-in" to="/">
            Dealership
          </Link>
          <Link className="navbar__buttons__register" to="/">
            Book Now
          </Link>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav>
        <div className="navbar" style={{ position: "fixed" }}>
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo || "/placeholder.svg"} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
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
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link onClick={toggleModal} className="navbar__buttons__sign-in" to="/">
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
          <h2>Dealership Application</h2>
          <i onClick={toggleModal} className="fa-solid fa-xmark"></i>
        </div>
        <form className="info-form" onSubmit={handleSubmit}>
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
                value={form.email}
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
                name="contactNumber"
                value={form.contactNumber}
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
                min="18"
              />
            </span>
          </div>
          <div className="info-form__2col">
            <span>
              <label>
                Applicant's Educational Qualification <b>*</b>
              </label>
              <input
                name="educationalQualification"
                value={form.educationalQualification}
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
                name="presentBusiness"
                value={form.presentBusiness}
                onChange={handleInputChange}
                type="text"
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
                name="yearsInBusiness"
                value={form.yearsInBusiness}
                onChange={handleInputChange}
                type="number"
                placeholder="Enter years"
                required
              />
            </span>
            <span>
              <label>
                Your Turnover <b>*</b>
              </label>
              <input
                name="turnover"
                value={form.turnover}
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
                name="investmentCapacity"
                value={form.investmentCapacity}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter investment capacity"
                required
              />
            </span>
          </div>
          <div className="info-form__1col">
            <span>
              <label>Comments or suggestions</label>
              <textarea
                name="comments"
                value={form.comments}
                onChange={handleInputChange}
                placeholder="Enter any comments or suggestions"
                rows="4"
              />
            </span>
          </div>
          <div className="info-form__checkbox">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleInputChange}
              required
            />
            <label>
              I accept the terms and conditions <b>*</b>
            </label>
          </div>
          <div className="reserve-button">
            <button type="submit" disabled={!form.termsAccepted}>
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Navbar


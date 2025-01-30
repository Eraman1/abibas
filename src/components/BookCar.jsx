import { useState } from "react";
import axiosInstance from "../api/axios";
import { toast } from "react-toastify";
const initialFormData = {
  scooterModel: "",
  color: "",
  name: "",
  email: "",
  contactNumber: "",
  state: "",
  city: "",
  address: "",
  landmark: "",
  pincode: "",
  bookingAmount: "",
};

function BookCar() {
  const [formData, setFormData] = useState({
    scooterModel: "",
    color: "",
    name: "",
    email: "",
    contactNumber: "",
    state: "",
    city: "",
    address: "",
    landmark: "",
    pincode: "",
    bookingAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Ensure only the correct field is updated
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/booking/create", formData);
      if (response.status === 201) {
        toast.success("Booking created successfully! We contact you soon");
        setFormData(initialFormData);  // Reset form data
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      toast.error("There was an error creating your booking.");
    }
  };


  return (
    <section id="booking-section" className="book-section">
      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>PRE BOOK YOUR DREAM SCOOTER</h2>
            <form className="box-form" onSubmit={handleSubmit}>
              <div className="box-form__car-type">
                <label htmlFor="scooterModel">
                  <i className="fa-solid fa-motorcycle"></i> &nbsp; Select Your Scooter Model <b>*</b>
                </label>
                <select
                  id="scooterModel"
                  name="scooterModel"
                  value={formData.scooterModel}
                  onChange={handleChange}
                >
                  <option value="">Select Model</option>
                  <option value="RIXEN">RIXEN</option>
                  <option value="RIXEN-ES">RIXEN-ES</option>
                  <option value="VPASEO">VPASEO</option>
                  <option value="VPASEO-PRO">VPASEO-PRO</option>
                  <option value="RORSHIP">RORSHIP</option>
                  <option value="RORSHIP-PRO">RORSHIP-PRO</option>
                </select>
              </div>

              <div className="box-form__car-type">
                <label htmlFor="color">
                  <i className="fa-solid fa-palette"></i> &nbsp; Choose your colour <b>*</b>
                </label>
                <select
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                >
                  <option value="">Select colour</option>
                  <option value="Red">Red</option>
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Grey">Grey</option>
                  <option value="Green">Green</option>
                </select>
              </div>

              <div className="box-form__car-type">
                <label htmlFor="name">
                  <i className="fa-solid fa-person"></i> &nbsp; Name <b>*</b>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="box-form__car-type">
                <label htmlFor="email">
                  <i className="fa-solid fa-envelope"></i> &nbsp; Email <b>*</b>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="box-form__car-type">
                <label htmlFor="contactNumber">
                  <i className="fa-solid fa-phone"></i> &nbsp; Contact Number <b>*</b>
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="box-form__car-type">
                <label htmlFor="state">
                  <i className="fa-solid fa-location-crosshairs"></i> &nbsp; State <b>*</b>
                </label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter your state"
                />
              </div>

              <div className="box-form__car-type">
                <label htmlFor="city">
                  <i className="fa-solid fa-city"></i> &nbsp; City <b>*</b>
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
              </div>

              <div className="box-form__car-type">
                <label htmlFor="address">
                  <i className="fa-solid fa-house"></i> &nbsp; Address <b>*</b>
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
              </div>

              <div className="box-form__car-type">
                <label htmlFor="landmark">
                  <i className="fa-solid fa-road"></i> &nbsp; Landmark <b>*</b>
                </label>
                <input
                  id="landmark"
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Enter your landmark"
                />
              </div>

              <div className="box-form__car-type">
                <label htmlFor="pincode">
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Pincode <b>*</b>
                </label>
                <input
                  id="pincode"
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter your pincode"
                />
              </div>

              <div className="box-form__car-type">
                <label htmlFor="bookingAmount">
                  <i className="fa-solid fa-rupee-sign"></i> &nbsp; Booking Amount <b>*</b>
                </label>
                <input
                  id="bookingAmount"
                  type="number"
                  name="bookingAmount"
                  value={formData.bookingAmount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCar;

import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SpecificationsTabs from "../components/Specification";
import PerformanceSection from "../components/Performance";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axios";
import Banner from "../components/Banner";
import { FaChargingStation } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa6";
import { TbWheel } from "react-icons/tb";
import { GiTyre } from "react-icons/gi";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar1 from "../images/cars-big/rorship.png";
import HeroCar2 from "../images/cars-big/rixen2.png";
import HeroCar3 from "../images/cars-big/rixen3.png";
import { Link } from "react-router-dom";

export default function Model() {
 const { id } = useParams();
 console.log(id);

 const [vehicles, setVehicles] = useState();
 const [currentIndex, setCurrentIndex] = useState(0);

 const tabs = [
   "Engine and Transmission",
   "Dimensions and Capacity",
   "Electricals",
   "Tyres and Brakes",
 ];

 const [activeTab, setActiveTab] = useState(tabs[0]); // Moved this above any returns

 const images = [HeroCar1, HeroCar2, HeroCar3];

 useEffect(() => {
   if (id) fetchVehicle();

   // Auto-slide for hero section
   const autoSlide = setInterval(() => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   }, 3000);

   return () => clearInterval(autoSlide);
 }, [id]);

 const fetchVehicle = async () => {
   try {
     const response = await axiosInstance.get(`/vehicles/${id}`);
     setVehicles(response.data);
   } catch (error) {
     console.error("Error fetching vehicle:", error);
   }
 };

 console.log(vehicles);

 if (!vehicles) return <p>Loading...</p>;

 const nextSlide = () => {
   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
 };

 const prevSlide = () => {
   setCurrentIndex(
     (prevIndex) => (prevIndex - 1 + images.length) % images.length
   );
 };

 const bookBtn = () => {
   document
     .querySelector("#booking-section")
     .scrollIntoView({ behavior: "smooth" });
 };

 // Specifications object remains unchanged
 const specifications = {
   "Engine and Transmission": [
     { label: "Motor Type", value: "Brushless DC Hub Motor" },
     { label: "Motor Power", value: "2300W*" },
     { label: "Range", value: "UP TO 100 Kms" },
     { label: "Start", value: "Self Start only" },
     { label: "Transmission", value: "Automatic" },
     { label: "Reverse Gear", value: "Yes" },
   ],
   "Dimensions and Capacity": [
     { label: "Length", value: "1820 mm" },
     { label: "Width", value: "680 mm" },
     { label: "Height", value: "1120 mm" },
     { label: "Seat Height", value: "760 mm" },
   ],
   Electricals: [
     { label: "Battery Type", value: "Lithium-Ion" },
     { label: "Charging Time", value: "4-5 Hours" },
     { label: "Headlight", value: "LED" },
   ],
   "Tyres and Brakes": [
     { label: "Front Brake", value: "Disc" },
     { label: "Rear Brake", value: "Drum" },
     { label: "Tyre Type", value: "Tubeless" },
   ],
 };

  return (
    <>
      {/* hero section */}
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h1>V-Parso</h1>
              <h4>
                ₹1,59,000/-{" "}
                <span>
                  <p>Starting Price</p>
                </span>
              </h4>
              <p>
                <span>
                  <i className="fa-solid fa-gauge-simple-high"></i> Speed{" "}
                </span>
                <span>80km/h</span>
              </p>
              <p>
                <span>
                  <i className="fa-solid fa-road"></i> Range{" "}
                </span>
                <span>150-170km</span>
              </p>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
            </div>

            <div className="carousel">
              <button className="carousel-btn prev" onClick={prevSlide}>
                &#10094;
              </button>
              <img
                src={images[currentIndex]}
                alt="car-img"
                className="carousel-img"
              />
              <button className="carousel-btn next" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="spec-container">
        {/* Tabs */}
        <div className="spec-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`spec-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="spec-content">
          <table className="spec-table">
            <tbody>
              {specifications[activeTab]?.map((item, index) => (
                <tr key={index} className="spec-row">
                  <td className="spec-label">{item.label}</td>
                  <td className="spec-value">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* performance */}
      <div className="performance-container">
        {/* Performance Metrics */}
        <h2 className="performance-title">Performance</h2>
        <div className="performance-metrics">
          <div className="metric">
            <span className="metric-value">
              <i>30,000</i> <small>Kms</small>
            </span>
            <p>Motor Warranty</p>
          </div>
          <div className="divider"></div>
          <div className="metric">
            <span className="metric-value">
              <i>3</i> <small>Years</small>
            </span>
            <p>Battery Warranty</p>
          </div>
          <div className="divider"></div>
          <div className="metric">
            <span className="metric-value">
              <i>4-5</i> <small>Hr</small>
            </span>
            <p>Charging Time</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="performance-features">
          <div className="feature">
            <TbWheel className="feature-icon" />
            <span>Alloy Wheels</span>
          </div>
          <div className="feature">
            <FaCompactDisc className="feature-icon" />
            <span>Disc Brakes</span>
          </div>
          <div className="feature">
            <FaChargingStation className="feature-icon" />
            <span>Quick Charge</span>
          </div>
          <div className="feature">
            <GiTyre className="feature-icon" />
            <span>Tubeless Tyre</span>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a Ev Scooter by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>+91-8123254305</h3>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

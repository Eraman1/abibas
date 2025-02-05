import React from "react";
import { FaChargingStation } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa6";
import { TbWheel } from "react-icons/tb";
import { GiTyre } from "react-icons/gi";
// import "./PerformanceSection.css";

const PerformanceSection = () => {
  return (
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
  );
};

export default PerformanceSection;

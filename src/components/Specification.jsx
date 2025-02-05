import React, { useState } from "react";
// import "./SpecificationsTabs.css";

const SpecificationsTabs = () => {
  const tabs = [
    "Engine and Transmission",
    "Dimensions and Capacity",
    "Electricals",
    "Tyres and Brakes",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

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
  );
};

export default SpecificationsTabs;

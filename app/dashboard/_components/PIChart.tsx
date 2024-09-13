"use client";

import { Icons } from "@/components/common/Icons";
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const seaData = [
  { title: "NHAVA SHEVA, INDIA", value: 40, color: "#5D2E2E" },
  { title: "HONG KONG, HONG KONG", value: 30, color: "#F58C83" },
  { title: "YANTIAN, CHINA", value: 15, color: "#F4BC84" },
  { title: "DALIAN, CHINA", value: 10, color: "#7ED0AE" },
  { title: "LONDON GATEWAY PORT, UK", value: 5, color: "#3C71E2" },
  { title: "OTHER", value: 10, color: "#755858" },
];

const airData = [
  { title: "JFK, USA", value: 50, color: "#4E79A7" },
  { title: "LAX, USA", value: 20, color: "#F28E2B" },
  { title: "LHR, UK", value: 15, color: "#76B7B2" },
  { title: "DXB, UAE", value: 10, color: "#E15759" },
  { title: "OTHER", value: 5, color: "#FF9DA7" },
];

const landData = [
  { title: "Berlin, Germany", value: 60, color: "#59A14F" },
  { title: "Warsaw, Poland", value: 20, color: "#EDC948" },
  { title: "Paris, France", value: 10, color: "#B07AA1" },
  { title: "Rome, Italy", value: 5, color: "#FF9D76" },
  { title: "OTHER", value: 5, color: "#9C755F" },
];

const PORTS = [
  "Origin Port",
  "Destination Port",
  "Carrier",
  "Consignee or Shipper",
  "Milestones",
];

const PiChartComponent = () => {
  const [activeTab, setActiveTab] = useState("Sea");

  // Determine the data based on the selected tab
  const getDataByTab = () => {
    switch (activeTab) {
      case "Sea":
        return seaData;
      case "Air":
        return airData;
      case "Land":
        return landData;
      default:
        return seaData;
    }
  };

  const renderTabs = () => {
    return (
      <div className="flex justify-center space-x-6 mb-4">
        <button
          onClick={() => setActiveTab("Sea")}
          className={`flex flex-row items-center gap-2 ${
            activeTab === "Sea"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-500"
          }`}
        >
          <Icons.shipIcons fill={activeTab === "Sea" ? "#EB5D50" : "#969596"} />
          Sea
        </button>

        <button
          onClick={() => setActiveTab("Air")}
          className={`flex flex-row items-center gap-2 ${
            activeTab === "Air"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-500"
          }`}
        >
          <Icons.planeIcons
            fill={activeTab === "Air" ? "#EB5D50" : "#969596"}
          />
          Air
        </button>

        <button
          onClick={() => setActiveTab("Land")}
          className={`flex flex-row items-center gap-2 ${
            activeTab === "Land"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-500"
          }`}
        >
          <Icons.truckIcon
            fill={activeTab === "Land" ? "#EB5D50" : "#969596"}
          />
          Land
        </button>
      </div>
    );
  };

  return (
    <div className="border rounded-lg shadow-md p-4 mb-6 mt-10 bg-white">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-left">Pie Chart Analysis</h1>
        <div className="flex-1">{renderTabs()}</div>
      </div>

      <div className="grid grid-cols-5 justify-items-center">
        {PORTS.map((port, index) => (
          <div key={index}>
            <div className="flex justify-center gap-10">
              <PieChart
                data={getDataByTab()}
                style={{ height: "150px" }}
                lineWidth={50}
              />
            </div>

            <h3 className="text-sm font-medium mt-2 text-center">{port}</h3>

            <ul className="text-sm mt-4 space-y-1">
              {getDataByTab().map((entry, index) => (
                <li
                  key={index}
                  className="flex items-center text-[12px] font-[400]"
                >
                  <span
                    className="inline-block w-3 h-3 mr-2 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  ></span>
                  {entry.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PiChartComponent;

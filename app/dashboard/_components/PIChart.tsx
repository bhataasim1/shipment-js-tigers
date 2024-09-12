"use client";

import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const originPortData = [
  { title: "NHAVA SHEVA, INDIA", value: 40, color: "#5D2E2E" },
  { title: "HONG KONG, HONG KONG", value: 30, color: "#F58C83" },
  { title: "YANTIAN, CHINA", value: 15, color: "#F4BC84" },
  { title: "DALIAN, CHINA", value: 10, color: "#7ED0AE" },
  { title: "LONDON GATEWAY PORT, UK", value: 5, color: "#3C71E2" },
  { title: "OTHER", value: 10, color: "#755858" },
];

const PORTS = [
  "Origin Port",
  "Destination Port",
  "Carrier",
  "Consignee or Shipper",
  "Milrstones",
];

const PiChartComponent = () => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-6 mt-10 bg-white">
      <div className="mb-5 flex">
        <h1 className="font-bold">Pie Chart Analysis</h1>
        {/* Tabs in center */}
      </div>
      <div className="grid grid-cols-5 justify-items-center">
        {PORTS.map((port, index) => (
          <div key={index}>
            <div className="flex justify-center gap-10">
              <PieChart
                data={originPortData}
                style={{ height: "150px" }}
                lineWidth={50}
              />
            </div>

            <h3 className="text-sm font-medium mt-2 text-center">{port}</h3>

            <ul className="text-sm mt-4 space-y-1">
              {originPortData.map((entry, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-light"
                >
                  <span
                    className="inline-block w-3 h-3 mr-2"
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

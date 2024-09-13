"use client";

import { useState } from "react";
import { Icons } from "@/components/common/Icons";

export default function TransportNavComponent() {
  const [transportMode, setTransportMode] = useState("Sea");
  const [viewMode, setViewMode] = useState("Shipments");

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center  items-center mb-4 gap-8">
        <button
          onClick={() => setTransportMode("Sea")}
          className={`flex flex-row items-center gap-2 ${
            transportMode === "Sea"
              ? "text-[#EB5D50] border-b-2 border-[#EB5D50] font-semibold"
              : "text-gray-500"
          }`}
        >
          <Icons.shipIcons
            fill={transportMode === "Sea" ? "#EB5D50" : "#969596"}
          />
          <span>Sea</span>
        </button>
        <button
          onClick={() => setTransportMode("Air")}
          className={`flex flex-row items-center gap-2 ${
            transportMode === "Air"
              ? "text-[#EB5D50] border-b-2 border-[#EB5D50] font-semibold"
              : "text-gray-500"
          }`}
        >
          <Icons.planeIcons
            fill={transportMode === "Air" ? "#EB5D50" : "#969596"}
          />
          <span>Air</span>
        </button>
        <button
          onClick={() => setTransportMode("Land")}
          className={`flex flex-row items-center gap-2 ${
            transportMode === "Land"
              ? "text-[#EB5D50] border-b-2 border-[#EB5D50] font-semibold"
              : "text-gray-500"
          }`}
        >
          <Icons.truckIcon
            fill={transportMode === "Land" ? "#EB5D50" : "#969596"}
          />
          <span>Land</span>
        </button>
      </div>
      <div className="bg-white p-3 rounded-lg flex items-center justify-center gap-2">
        <button
          onClick={() => setViewMode("Shipments")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
            viewMode === "Shipments"
              ? "bg-[#85656233] text-[#856562] shadow"
              : "text-gray-500 hover:bg-[#85656233]"
          }`}
        >
          Shipments
        </button>
        <button
          onClick={() => setViewMode("Containers")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
            viewMode === "Containers"
              ? "bg-[#85656233] text-[#856562] shadow"
              : "text-gray-500 hover:bg-[#85656233]"
          }`}
        >
          Containers
        </button>
      </div>
    </div>
  );
}

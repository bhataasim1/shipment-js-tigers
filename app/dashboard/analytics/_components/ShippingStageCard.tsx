import React from "react";

interface LocationData {
  name: string;
  count: number;
}

interface ShippingStageCardProps {
  title: string;
  locations: LocationData[];
}

export default function ShippingStageCard({
  title,
  locations,
}: ShippingStageCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-2 pr-2 max-h-64 overflow-y-auto">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0"
          >
            <span className="text-[14px] text-gray-600">{location.name}</span>
            <span className="text-[14px] font-medium">{location.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { IShipment } from "./DataTable";
import LoadingEffect from "@/components/common/LoadingEffect";

interface ShippingStageCardProps {
  title: string;
  field: keyof IShipment;
  shipments: IShipment[];
  loading: boolean;
}

export default function ShippingStageCard({
  title,
  field,
  shipments,
  loading,
}: ShippingStageCardProps) {
  const [countedData, setCountedData] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (shipments.length > 0) {
      const counts: { [key: string]: number } = {};
      shipments.forEach((shipment) => {
        const value = shipment[field] as string;
        if (value) {
          counts[value] = (counts[value] || 0) + 1;
        }
      });
      setCountedData(counts);
    }
  }, [shipments, field]);

  console.log("Data counted", countedData);

  if (loading) {
    return (
      <LoadingEffect totalNumber={1} loadingLines={7} />
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-2 pr-2 max-h-64 overflow-y-auto">
        {countedData ? (Object.entries(countedData).map(([key, count], index) => (
          <div
            key={index}
            className="flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0"
          >
            <span className="text-[14px] text-gray-600">{key}</span>
            <span className="text-[14px] font-medium">{count}</span>
          </div>
        ))) : (
          <LoadingEffect totalNumber={1} loadingLines={7} />
        )}
      </div>
    </div>
  );
}

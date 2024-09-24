"use client";

import React, { useEffect, useState } from "react";
import TransportNavComponent from "./_components/TransportNavComponent";
import FilterComponent from "./_components/FilterComponent";
import MilestonesCard from "./_components/MileStoneCard";
import TimeLineCard from "./_components/TimeLineCard";
import ShippingStageCard from "./_components/ShippingStageCard";
import DataTable, { IShipment } from "./_components/DataTable";

const stages = [
  { title: "Loading", field: "loading" },
  { title: "Discharge", field: "discharge" },
  { title: "Delivery", field: "delivery" },
  { title: "Shipper", field: "shipper" },
  { title: "Consignee", field: "consignee" },
  { title: "Carrier", field: "carrier" },
];

const AnalyticsPage = () => {
  const [shipments, setShipments] = useState<IShipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getAllShipments = async () => {
    try {
      const response = await fetch("/api/shipments");
      const data = await response.json();
      setShipments(data.shipment);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllShipments();
  }, []);

  return (
    <div className="space-y-3">
      <TransportNavComponent />
      <FilterComponent />
      <div className="grid grid-cols-2 gap-6">
        <MilestonesCard />
        <TimeLineCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stages.map((stage, index) => (
          <ShippingStageCard
            key={index}
            title={stage.title}
            field={stage.field as keyof IShipment}
            shipments={shipments}
            loading={loading}
          />
        ))}
      </div>
      <DataTable shipments={shipments} loading={loading} />
    </div>
  );
};

export default AnalyticsPage;

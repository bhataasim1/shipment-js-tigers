import React from "react";
import TransportNavComponent from "./_components/TransportNavComponent";
import FilterComponent from "./_components/FilterComponent";
import MilestonesCard from "./_components/MileStoneCard";
import TimeLineCard from "./_components/TimeLineCard";
import { stages } from "./constant/shippingData";
import ShippingStageCard from "./_components/ShippingStageCard";
import DataTable from "./_components/DataTable";

const AnalyticsPage = () => {
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
            locations={stage.locations}
          />
        ))}
      </div>
      <DataTable />
    </div>
  );
};

export default AnalyticsPage;

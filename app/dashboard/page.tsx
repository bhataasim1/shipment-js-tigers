import React from "react";
import BookingCard from "./_components/BookingCard";
import MapComponent from "./_components/MapComponent";
import PIChart from "./_components/PIChart";
import LatestDocuments from "./_components/LatestDocuments";
import Announcement from "./_components/Announcement";

const page = () => {
  return (
    <div>
      <BookingCard />
      <MapComponent />
      <PIChart />
      <div className="grid grid-cols-2 gap-4">
        <LatestDocuments />
        <Announcement />
      </div>
    </div>
  );
};

export default page;

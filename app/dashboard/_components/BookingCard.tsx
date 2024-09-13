"use client";

import { Icons } from "@/components/common/Icons";
import { useEffect, useState } from "react";
import { IShipment } from "../analytics/_components/DataTable";

interface StatType {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

interface IBooking extends IShipment {
  bookingStatus: string;
}

export default function BookingCard() {
  const [shipments, setShipments] = useState<IBooking[]>([]);
  const [totalBookings, setTotalBookings] = useState(0);
  const [utilizedBookings, setUtilizedBookings] = useState(0);
  const [cancelledBookings, setCancelledBookings] = useState(0);
  const [utilization, setUtilization] = useState("0%");

  const getAllShipments = async () => {
    try {
      const response = await fetch("/api/shipments");
      const data = await response.json();
      setShipments(data.shipment);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllShipments();
  }, []);

  useEffect(() => {
    const total = shipments.length;
    const utilized = shipments.filter(
      (shipment) => shipment.bookingStatus === "UTILIZED"
    ).length;
    const cancelled = shipments.filter(
      (shipment) => shipment.bookingStatus === "CANCELLED"
    ).length;

    const utilizationPercentage =
      total > 0 ? ((utilized / total) * 100).toFixed(2) : "0";

    setTotalBookings(total);
    setUtilizedBookings(utilized);
    setCancelledBookings(cancelled);
    setUtilization(`${utilizationPercentage}%`);
  }, [shipments]);

  const stats: StatType[] = [
    {
      title: "Total Bookings",
      value: `${totalBookings} Bookings`,
      icon: <Icons.bookingsIcon className="w-6 h-6" />,
      color: "bg-red-900",
    },
    {
      title: "Bookings Utilized",
      value: `${utilizedBookings} Bookings`,
      icon: <Icons.bookingsIcon2 className="w-6 h-6" />,
      color: "bg-orange-400",
    },
    {
      title: "Booking Cancelled",
      value: `${cancelledBookings} Bookings`,
      icon: <Icons.blockIcon className="w-6 h-6" />,
      color: "bg-red-500",
    },
    {
      title: "Utilization",
      value: utilization,
      icon: <Icons.clockLoaderIcon className="w-6 h-6" />,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-sm mb-4">{stat.title}</p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
          <div className={`${stat.color} text-white p-3 rounded-lg mr-4`}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

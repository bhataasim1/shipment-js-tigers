"use client";

import { PieChart } from "react-minimal-pie-chart";
import { IShipment } from "./DataTable";
import { useEffect, useState } from "react";

interface TimeLineShipment extends IShipment {
  estimatedTimeOfArrival: string;
  actualTimeOfArrival: string;
}

export default function TimeLineCard() {
  const [, setShipments] = useState<TimeLineShipment[]>([]);
  const [chartData, setChartData] = useState<
    { name: string; value: number; color: string }[]
  >([]);

  const getAllShipments = async () => {
    try {
      const response = await fetch("/api/shipments");
      const data = await response.json();
      setShipments(data.shipment);
      processShipments(data.shipment);
    } catch (error) {
      console.error(error);
    }
  };

  const processShipments = (shipments: TimeLineShipment[]) => {
    const onTime = shipments.filter((shipment) => {
      return (
        new Date(shipment.actualTimeOfArrival) <=
        new Date(shipment.estimatedTimeOfArrival)
      );
    }).length;

    const late = shipments.length - onTime;

    setChartData([
      { name: "ON TIME", value: onTime, color: "#34D399" },
      { name: "LATE", value: late, color: "#F97316" },
    ]);
  };

  useEffect(() => {
    getAllShipments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Timelines</h2>

      <div className="flex h-64 justify-center gap-5">
        <div className="flex justify-center items-center">
          <PieChart data={chartData} style={{ height: "200px" }} />
        </div>

        <div className="flex justify-center items-center">
          <ul className="text-sm space-y-2 text-center">
            {chartData.map((entry, index) => (
              <li
                key={index}
                className="flex items-center text-[12px] font-[400]"
              >
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></span>
                {`${entry.name} (${entry.value})`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

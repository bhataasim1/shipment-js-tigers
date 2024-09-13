"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { IShipment } from "./DataTable";

export default function MilestonesCard() {
  const [shipments, setShipments] = useState<IShipment[]>([]);
  const [chartData, setChartData] = useState<
    { name: string; value: number; color: string }[]
  >([]);

  const getAllShipments = async () => {
    try {
      const response = await fetch("/api/shipments");
      const data = await response.json();
      setShipments(data.shipment);
      aggregateMilestones(data.shipment);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(shipments);

  const aggregateMilestones = (shipments: IShipment[]) => {
    const milestoneCounts: Record<string, number> = {};

    shipments.forEach((shipment) => {
      const milestone = shipment.milestone;
      if (milestone) {
        milestoneCounts[milestone] = (milestoneCounts[milestone] || 0) + 1;
      }
    });

    const formattedData = Object.entries(milestoneCounts).map(
      ([name, value]) => ({
        name,
        value,
        color: getColorByMilestone(name),
      })
    );

    setChartData(formattedData);
  };

  const getColorByMilestone = (milestone: string) => {
    const colors: Record<string, string> = {
      BOOKED: "#6D1D1D",
      DISCHARGED: "#D97706",
      ARRIVED: "#FBBF24",
      DELIVERED: "#34D399",
      RETURNED: "#3B82F6",
    };
    return colors[milestone] || "#CCCCCC";
  };

  useEffect(() => {
    getAllShipments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Milestones</h2>
        <Button variant={"outline"} disabled className="rounded-xl">
          IN-TRANSIT ({shipments.length})
        </Button>
      </div>

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

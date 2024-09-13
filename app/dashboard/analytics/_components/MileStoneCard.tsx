"use client";

import { Button } from "@/components/ui/button";
import { PieChart } from "react-minimal-pie-chart";

const data = [
  { name: "BOOKED", value: 393, color: "#6D1D1D" },
  { name: "DISCHARGED", value: 29, color: "#D97706" },
  { name: "ARRIVED", value: 22, color: "#FBBF24" },
  { name: "DELIVERED", value: 19, color: "#34D399" },
  { name: "RETURNED", value: 149, color: "#3B82F6" },
];

export default function MilestonesCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Milestones</h2>
        <Button variant={"outline"} disabled className="rounded-xl">
          IN-TRANSIT (463)
        </Button>
      </div>

      <div className="flex h-64 justify-center gap-5">
        <div className=" flex justify-center items-center">
          <PieChart data={data} style={{ height: "200px" }} />
        </div>

        <div className=" flex justify-center items-center">
          <ul className="text-sm space-y-2 text-center">
            {data.map((entry, index) => (
              <li
                key={index}
                className="flex items-center  text-[12px] font-[400]"
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

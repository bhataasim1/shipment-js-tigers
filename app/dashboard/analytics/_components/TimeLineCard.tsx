"use client";

import { PieChart } from "react-minimal-pie-chart";

const data = [
  { name: "ON TIME", value: 681, color: "#34D399" },
  { name: "LATE", value: 1, color: "#F97316" },
];

export default function TimeLineCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Timelines</h2>

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

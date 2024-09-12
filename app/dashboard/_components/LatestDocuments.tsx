import Image from "next/image";
import React from "react";

const documents = [
  {
    type: "Packing List",
    jobNumber: "IM159075",
    date: "Nov 29, 2023",
    time: "10:27 AM",
  },
  {
    type: "Commercial Invoice",
    jobNumber: "IM159075",
    date: "Nov 29, 2023",
    time: "10:26 AM",
  },
  {
    type: "Bill of Lading",
    jobNumber: "IM159075",
    date: "Nov 29, 2023",
    time: "10:12 AM",
  },
  {
    type: "Packing List",
    jobNumber: "IM156930",
    date: "Nov 29, 2023",
    time: "10:11 AM",
  },
  {
    type: "Commercial Invoice",
    jobNumber: "IM156930",
    date: "Nov 29, 2023",
    time: "10:10 AM",
  },
  {
    type: "Bill of Lading",
    jobNumber: "IM156930",
    date: "Nov 29, 2023",
    time: "10:09 AM",
  },
];

const LatestDocuments = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Latest Documents</h2>

      <ul className="space-y-3 h-64 overflow-y-auto">
        {documents.map((doc, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 pb-3 border-b border-gray-200"
          >
            <div className="flex-shrink-0">
              <Image
                src="/pdfIcon.png"
                alt="pdf-icon"
                width={25}
                height={25}
                priority
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {doc.type}
              </p>
              <p className="text-sm text-gray-500 truncate">
                Sea job document ({doc.jobNumber})
              </p>
            </div>

            <div className="flex-shrink-0 text-sm text-gray-500">
              <p>{doc.date}</p>
              <p>{doc.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestDocuments;

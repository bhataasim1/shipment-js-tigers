"use client";

import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IDocument {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const LatestDocuments = () => {
  const [documents, setDocuments] = useState<IDocument[]>([]);

  const getAllDocuments = async () => {
    try {
      const response = await fetch("/api/documents");
      const data = await response.json();
      setDocuments(data.documents);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllDocuments();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Latest Documents</h2>

      <ul className="space-y-3 h-64 overflow-y-auto">
        {documents.map((doc) => {
          const { date, time } = formatDate(doc.updatedAt);
          return (
            <li
              key={doc.id}
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
                  {doc.title}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Sea job document ({doc.description})
                </p>
              </div>

              <div className="flex-shrink-0 text-sm text-gray-500">
                <p>{date}</p>
                <p>{time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LatestDocuments;

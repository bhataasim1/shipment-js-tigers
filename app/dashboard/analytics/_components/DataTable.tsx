"use client";

import { Icons } from "@/components/common/Icons";
import LoadingEffect from "@/components/common/LoadingEffect";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";
import {  useState } from "react";
import { CSVLink } from "react-csv";

export interface IShipment {
  hblNo: string;
  mblNo: string;
  poRefNo: string;
  recipt: string;
  loading: string;
  discharge: string;
  delivery: string;
  bookingNo: string;
  sizeType: string;
  carrier: string;
  commodity: string;
  milestone: string;
  milestoneGroup: string;
}

const shipmentHeading = [
  { label: "HBL#", key: "hblNo" },
  { label: "MBL#", key: "mblNo" },
  { label: "POF / REF#", key: "poRefNo" },
  { label: "Recipt", key: "recipt" },
  { label: "Loading", key: "loading" },
  { label: "Discharge", key: "discharge" },
  { label: "Delivery", key: "delivery" },
  { label: "Booking#", key: "bookingNo" },
  { label: "Size/Type", key: "sizeType" },
  { label: "Carrier", key: "carrier" },
  { label: "Commodity", key: "commodity" },
  { label: "Milestone", key: "milestone" },
  { label: "Milestone Group", key: "milestoneGroup" },
];

type DataTableProps = {
  shipments: IShipment[];
  loading: boolean;
};

const DataTable = ({shipments, loading}: DataTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShipments = shipments.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(shipments.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(parseInt(value, 10));
    setCurrentPage(1);
  };

  if(loading) {
    return (
      <LoadingEffect totalNumber={1} loadingLines={7} />
    )};

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex m-2 justify-end">
        <CSVLink
          data={shipments}
          headers={shipmentHeading}
          filename={"shipments_data.csv"}
          className="text-white text-sm font-medium flex gap-2 bg-[#EB5D50] hover:bg-[#842d25] p-2 rounded-xl"
        >
          <Download size={20} />
          Download
        </CSVLink>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {shipmentHeading.map((header) => (
                <th
                  key={header.label}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentShipments.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.hblNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.mblNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.poRefNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.recipt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.loading}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.discharge}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.delivery}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.bookingNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.sizeType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.carrier}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.commodity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.milestone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.milestoneGroup}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <Select onValueChange={handleItemsPerPageChange}>
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder={itemsPerPage.toString()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="ml-2 text-gray-400">
            {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, shipments.length)}{" "}
            of {shipments.length}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Icons.backIcon fill={!indexOfFirstItem ? "#D9D9D9" : "#616C76"} />
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <Icons.forwardIcon
              fill={!indexOfLastItem ? "#D9D9D9" : "#616C76"}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

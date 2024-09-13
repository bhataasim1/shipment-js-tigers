import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  {
    hbl: "EOGZK23090310",
    mbl: "ZIMU3H31548831",
    pof: "POF MT506214",
    recipt: "YANTIAN, CHINA Jun 10, 2023",
    loading: "YANTIAN, CHINA Jun 10, 2023",
    discharge: "YANTIAN, CHINA Jun 15, 2023",
    delivery: "HOUSTON, TX, USA Jul 11, 2023",
    booking: "BROWNSVILLE, TX, USA Jul 11, 2023",
    sizeType: "40HC",
    carrier: "ZIM",
    commodity: "FURNITURE",
    milestone: "BOOKED",
    milestoneGroup: "BOOKED",
  },
];

const DataTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "HBL#",
                "MBL#",
                "POF / REF#",
                "Recipt",
                "Loading",
                "Discharge",
                "Delivery",
                "Booking#",
                "Size/Type",
                "Carrier",
                "Commodity",
                "Milestone",
                "Milestone Group",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.hbl}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.mbl}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.pof}
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
                  {row.booking}
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
          <Select>
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder={"10"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="ml-2 text-gray-400">1-10 of 100</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button size={"icon"} variant={"outline"}>
            &lt;
          </Button>
          <span>1-10 of 100</span>
          <Button size={"icon"} variant={"outline"}>
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

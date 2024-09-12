import {
  HomeIcon,
  BarChartIcon,
  FileTextIcon,
  TruckIcon,
  UsersIcon,
  ArchiveIcon,
  HistoryIcon,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed w-64 bg-[#6D1D1D] text-white h-[70%] rounded-r-3xl">
      <div className="p-4">
        <nav>
          <ul className="space-y-2 mt-20">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 p-2 rounded-lg bg-[#8B2525]"
              >
                <HomeIcon className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/analytics"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#8B2525]"
              >
                <BarChartIcon className="w-5 h-5" />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#8B2525]"
              >
                <FileTextIcon className="w-5 h-5" />
                <span>Rate Request</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#8B2525]"
              >
                <FileTextIcon className="w-5 h-5" />
                <span>Quote</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#8B2525]"
              >
                <TruckIcon className="w-5 h-5" />
                <span>Shipments</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#8B2525]"
              >
                <UsersIcon className="w-5 h-5" />
                <span>User List</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#8B2525]"
              >
                <ArchiveIcon className="w-5 h-5" />
                <span>Archive</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#8B2525]"
              >
                <HistoryIcon className="w-5 h-5" />
                <span>History</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

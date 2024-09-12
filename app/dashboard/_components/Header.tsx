import { BellIcon } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-gray-200 shadow-sm p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="p-2 rounded-full relative">
              <BellIcon className="w-5 h-5 text-gray-600" />
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-600" />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Image
              src={"/image.png"}
              alt="User avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              width={32}
              height={32}
              priority
            />
            <div>
              <p className="text-sm font-medium">Edward William</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

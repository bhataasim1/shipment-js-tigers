import { Icons } from "@/components/common/Icons";

interface StatType {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

export default function BookingCard() {
  const stats: StatType[] = [
    {
      title: "Total Bookings",
      value: "501 Bookings",
      icon: <Icons.bookingsIcon className="w-6 h-6" />,
      color: "bg-red-900",
    },
    {
      title: "Bookings Utilized",
      value: "501 Bookings",
      icon: <Icons.bookingsIcon2 className="w-6 h-6" />,
      color: "bg-orange-400",
    },
    {
      title: "Booking Cancelled",
      value: "0 Bookings",
      icon: <Icons.blockIcon className="w-6 h-6" />,
      color: "bg-red-500",
    },
    {
      title: "Utilization",
      value: "100%",
      icon: <Icons.clockLoaderIcon className="w-6 h-6" />,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-sm mb-4">{stat.title}</p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
          <div className={`${stat.color} text-white p-3 rounded-lg mr-4`}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

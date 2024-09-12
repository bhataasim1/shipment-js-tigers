import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to Shipment JS-Tigers
      </h1>
      <p className="text-center mt-4">
        Get started by Visiting{" "}
        <code className="bg-gray-100 p-1 rounded">/dashboard</code>
      </p>
      <div className="flex justify-center mt-10">
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

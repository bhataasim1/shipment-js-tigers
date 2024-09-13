"use client";

import { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/Icons";

type LocationType = {
  id: number;
  lat: number;
  long: number;
  transportType: "ship" | "plane" | "truck";
};

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [locations, setLocations] = useState<LocationType[]>([]);
  const [selectedTransport, setSelectedTransport] = useState<
    "ship" | "plane" | "truck"
  >("ship");

  const center = useMemo(() => ({ lat: 22.5590503, lng: 114.2324407 }), []);

  const getAllLocations = async () => {
    try {
      const response = await fetch("/api/locations");
      const data = await response.json();
      setLocations(data.location);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("locations", locations);

  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg bg-white">
      {isLoaded && (
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={center}
          zoom={10}
        >
          {locations && locations?.map((location) => (
            <Marker
              key={location.id}
              position={{ lat: location.lat, lng: location.long }}
              icon={'/marker.png'}
            />
          ))}
        </GoogleMap>
      )}

      <div className="absolute top-4 left-4 z-[1000]">
        <div className="relative inline-block text-left">
          <div>
            <Button variant={"outline"}>
              Last Milestones
              <ChevronDown className="-mr-1 ml-2 h-5 w-5 text-[#EB5D50]" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-[1000]">
        <div className="flex flex-col p-2 space-y-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            className={`${
              selectedTransport === "ship" ? "bg-orange-600" : "bg-white"
            } hover:bg-orange-700`}
            onClick={() =>
              setSelectedTransport(
                selectedTransport === "ship" ? "ship" : "ship"
              )
            }
          >
            <Icons.shipIcons
              fill={selectedTransport === "ship" ? "#ffff" : "#969596"}
            />
          </Button>

          <Button
            variant={"ghost"}
            size={"icon"}
            className={`${
              selectedTransport === "plane" ? "bg-orange-600" : "bg-white"
            } hover:bg-orange-700`}
            onClick={() =>
              setSelectedTransport(
                selectedTransport === "plane" ? "ship" : "plane"
              )
            }
          >
            <Icons.planeIcons
              fill={selectedTransport === "plane" ? "#ffff" : "#969596"}
            />
          </Button>

          <Button
            variant={"ghost"}
            size={"icon"}
            className={`${
              selectedTransport === "truck" ? "bg-orange-600" : "bg-white"
            } hover:bg-orange-700`}
            onClick={() =>
              setSelectedTransport(
                selectedTransport === "truck" ? "ship" : "truck"
              )
            }
          >
            <Icons.truckIcon
              fill={selectedTransport === "truck" ? "#ffff" : "#969596"}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

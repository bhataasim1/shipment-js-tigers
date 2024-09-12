import React from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-200">
      <div className="md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Header />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};

export default layout;

import React from "react";
import { MdLaptopChromebook } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { PiGraphicsCard } from "react-icons/pi";
import { RiRam2Line } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { PiMonitorBold } from "react-icons/pi";
import { TbHeartRateMonitor } from "react-icons/tb";

const Comparison = () => {
  return (
    <div className="min-h-screen px-4 py-3 flex flex-col items-center text-white">
      {/* Header Section */}
      <div className="w-full max-w-5xl mb-6">
        <div className="flex items-center relative">
          <div className="absolute -left-20">
            <button className="text-accent hover:text-yellow-300 underline">
              Back
            </button>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-semibold">Comparison</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-stretch max-w-4xl w-full">
        {/* Left Laptop */}
        <div className="w-80 p-4 text-center">
          <div className="h-56 flex items-center justify-center mb-4">
            <span className="text-gray-400">Laptop Image</span>
          </div>
          <div className="bg-accent text-primary py-2 rounded mb-4 font-bold">
            Rp. 39,745,873
          </div>
          <div className="text-base space-y-3">
            <div className="flex items-center gap-2">
              <MdLaptopChromebook className="text-xl text-accent" />
              <span>HP</span>
            </div>
            <div className="flex items-center gap-2">
              <GiProcessor className="text-xl text-accent" />
              <span>AMD Ryzen 7 5800H</span>
            </div>
            <div className="flex items-center gap-2">
              <PiGraphicsCard className="text-xl text-accent" />
              <span>NVIDIA GeForce RTX 3050 Ti</span>
            </div>
            <div className="flex items-center gap-2">
              <RiRam2Line className="text-xl text-accent" />
              <span>16GB DDR4</span>
            </div>
            <div className="flex items-center gap-2">
              <FaDatabase className="text-xl text-accent" />
              <span>512GB SSD</span>
            </div>
            <div className="flex items-center gap-2">
              <PiMonitorBold className="text-xl text-accent" />
              <span>16.1 inch</span>
            </div>
            <div className="flex items-center gap-2">
              <TbHeartRateMonitor className="text-xl text-accent" />
              <span>144Hz Refresh Rate</span>
            </div>
          </div>
        </div>

        {/* Center VS Section */}
        <div className="w-12 flex items-center justify-center self-center">
          <img src="/assets/versus.png" alt="VS" className="w-10" />
        </div>

        {/* Right Laptop */}
        <div className="w-80 p-4 text-center">
          <div className="h-56 flex items-center justify-center mb-4">
            <span className="text-white">Laptop Image</span>
          </div>
          <div className="bg-accent text-primary text-center py-2 rounded mb-4 font-bold">
            Rp. 39,745,873
          </div>
          <div className="text-base space-y-3">
            <div className="flex items-center justify-end gap-2">
              <span>HP</span>
              <MdLaptopChromebook className="text-xl text-accent" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>AMD Ryzen 7 5800H</span>
              <GiProcessor className="text-xl text-accent" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>NVIDIA GeForce RTX 3050 Ti</span>
              <PiGraphicsCard className="text-xl text-accent" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>16GB DDR4</span>
              <RiRam2Line className="text-xl text-accent" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>512GB SSD</span>
              <FaDatabase className="text-xl text-accent" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>16.1 inch</span>
              <PiMonitorBold className="text-xl text-accent" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>144Hz Refresh Rate</span>
              <TbHeartRateMonitor className="text-xl text-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;

import React from "react";
import { MdLaptopChromebook } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { PiGraphicsCard } from "react-icons/pi";
import { RiRam2Line } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { PiMonitorBold } from "react-icons/pi";
import { TbHeartRateMonitor } from "react-icons/tb";

const Comparison = ({ onBack, comparisons }) => {
  const laptop1 = comparisons[0];
  const laptop2 = comparisons[1];

  return (
    <div className="min-h-[calc(100vh-30vh-4rem)] px-4 py-3 flex flex-col items-center text-white">
      {/* Header Section */}
      <div className="w-full max-w-5xl mb-6 mt-5">
        <div className="flex items-center relative">
          <div className="absolute -left-20">
            <button 
              onClick={onBack} 
              className="text-accent hover:text-yellow-300 underline"
            >
              Back To List
            </button>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-semibold">Comparison</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:flex justify-between items-stretch max-w-4xl w-full">
        {/* Left Laptop */}
        <div className="w-fit p-4 text-center">
          <h2 className="text-2xl font-medium mb-6 text-white text-nowrap">
            {laptop1?.name}
          </h2>
          <div className="h-56 flex items-center justify-center mb-4">
            <img 
              src={laptop1?.image || '/placeholder.png'} 
              alt={laptop1?.name || 'Laptop'} 
              className="max-h-full object-contain"
            />
          </div>
          <div className="bg-accent text-primary py-2 rounded mb-4 font-bold">
            Rp. {laptop1?.price?.toLocaleString() || '0'}
          </div>
          <div className="text-base space-y-3">
            <ComparisonItem icon={MdLaptopChromebook} value={laptop1?.brand?.toUpperCase()} align="left" />
            <ComparisonItem icon={GiProcessor} value={laptop1?.processor} align="left" />
            <ComparisonItem icon={PiGraphicsCard} value={laptop1?.gpu} align="left" />
            <ComparisonItem icon={RiRam2Line} value={laptop1?.ram} align="left" />
            <ComparisonItem icon={FaDatabase} value={laptop1?.memory} align="left" />
            <ComparisonItem icon={PiMonitorBold} value={laptop1?.display} align="left" />
            <ComparisonItem icon={TbHeartRateMonitor} value={laptop1?.refresh_rate} align="left" />
          </div>
        </div>

        {/* Center VS Section */}
        <div className="w-12 rotate-90 md:rotate-0 mx-auto flex items-center justify-center self-center">
          <img src="/assets/versus.png" alt="VS" className="w-10" />
        </div>

        {/* Right Laptop */}
        <div className="w-fit p-4 text-center">
          <h2 className="text-2xl font-medium mb-6 text-white">
            {laptop2?.name || 'N/A'}
          </h2>
          <div className="h-56 flex items-center justify-center mb-4">
            <img 
              src={laptop2?.image || '/placeholder.png'} 
              alt={laptop2?.name || 'Laptop'} 
              className="max-h-full object-contain"
            />
          </div>
          <div className="bg-accent text-primary py-2 rounded mb-4 font-bold">
            Rp. {laptop2?.price?.toLocaleString() || '0'}
          </div>
          <div className="text-base space-y-3">
            <ComparisonItem icon={MdLaptopChromebook} value={laptop2?.brand?.toUpperCase()} align="right" />
            <ComparisonItem icon={GiProcessor} value={laptop2?.processor} align="right" />
            <ComparisonItem icon={PiGraphicsCard} value={laptop2?.gpu} align="right" />
            <ComparisonItem icon={RiRam2Line} value={laptop2?.ram} align="right" />
            <ComparisonItem icon={FaDatabase} value={laptop2?.memory} align="right" />
            <ComparisonItem icon={PiMonitorBold} value={laptop2?.display} align="right" />
            <ComparisonItem icon={TbHeartRateMonitor} value={laptop2?.refresh_rate} align="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ComparisonItem = ({ icon: Icon, value, align }) => {
  const containerClass = `flex items-center gap-2 ${
    align === "right" ? "justify-end" : "justify-start"
  }`;
  
  return (
    <div className={containerClass}>
      {align === "left" && <Icon className="text-xl text-accent" />}
      <span>{value || "N/A"}</span>
      {align === "right" && <Icon className="text-xl text-accent" />}
    </div>
  );
};

export default Comparison;
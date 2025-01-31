import React, { useState } from "react";
import { FiMonitor, FiX } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";

const ComponentCard = ({ title, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Temporary specifications for all components
  const specs = [
    { icon: MdDateRange, value: "2020" },
    { label: "Resolution", value: "1920x1080 FHD" },
    { label: "Refresh Rate", value: "120Hz" },
    { label: "Size", value: "16'inch" },
  ];

  return (
    <div className="bg-accent bg-opacity-10 rounded-lg overflow-hidden">
      <div
        className="p-4 flex items-center justify-between cursor-pointer transition-colors duration-200 hover:bg-accent hover:bg-opacity-20"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="text-accent" size={20} />}
          <h3 className="text-white text-sm">{title}</h3>
        </div>
        <button className="flex items-center gap-1 text-accent hover:text-yellow-500">
          <BiLink size={25} />
        </button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-4 pt-0">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-2">
                {spec.icon && <spec.icon className="text-gray-400" />}
                {spec.label && (
                  <span className="text-gray-400">{spec.label}:</span>
                )}
                <span className="text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PackageDetailModal = ({ isOpen, onClose, packageData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-primary rounded-lg w-full max-w-3xl relative border border-accent">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-white"
        >
          <FiX size={20} />
        </button>

        <div className="flex max-h-[80vh]">
          {/* Left Section */}
          <div className="w-72 p-6 flex-shrink-0">
            <div className="w-full aspect-video bg-accent rounded-lg mb-4" />
            <h2 className="text-3xl font-bold text-center text-white mb-2">
              {packageData.tier}
            </h2>
            <p className="text-white font-light text-center text-sm mb-5">
              {packageData.description}
            </p>
            <div className="mt-20">
              <p className="text-black font-semibold text-center rounded-md mb-2 p-2 bg-accent text-sm">
                {packageData.priceRange}
              </p>
              <p className="text-gray-400 text-center text-xs mb-1">
                *Price May Fluctuate
              </p>
            </div>
          </div>

          {/* Right Section */}
<div className="flex-1 p-6 overflow-y-auto max-h-[60vh] custom-scrollbar space-y-6">
  <div className="space-y-4 px-2">
    <ComponentCard title="Monitor A" icon={FiMonitor} />
    <ComponentCard title="Mouse" icon={BiLink} />
    <ComponentCard title="Keyboard" icon={BiLink} />
    <ComponentCard title="Mousepad" icon={BiLink} />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default PackageDetailModal;

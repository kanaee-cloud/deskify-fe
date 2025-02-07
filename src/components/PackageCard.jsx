import React, { useState } from "react";
import { FaRegKeyboard } from "react-icons/fa";
import { truncateText } from "../utilities/TruncateText";
import { FiMonitor } from "react-icons/fi";
import { FiMousePointer } from "react-icons/fi";
import PackageDetailModal from "./PackageDetailModal";

const PackageCard = ({ id, tier, description, priceRange, components }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-primary border-solid border-accent border rounded-lg p-4 lg:p-6 relative h-full flex flex-col">
        {/* Image placeholder */}
        <div className="aspect-video bg-accent rounded-lg mb-4"></div>

        {/* Title */}
        <h2 className="text-white text-xl font-semibold mb-4 text-center">
          {tier}
        </h2>

        {/* Components List */}
        <div className="space-y-4 mb-20">
          <div className="flex items-center text-gray-300 gap-x-4">
            <FiMonitor size={30} className="text-accent text-xl" />
            <div className="flex flex-col">
              <span className="md:text-lg">Monitor</span>
              {components.monitor.monitor_1 ? (
                <p className="text-xs font-normal text-gray-400">
                  {truncateText(components.monitor.monitor_1.model_name)}
                </p>
              ) : (
                <p className="text-xs font-normal text-gray-400">
                  No Monitor Available
                </p>
              )}
            </div>
          </div>
          {components.mouse ? (
            <div className="flex items-center text-gray-300 gap-x-4">
              <FiMousePointer size={30} className="text-accent text-2xl" />
              <div className="flex flex-col">
                <span className="md:text-lg">Mouse</span>
                <p className="text-xs font-normal text-gray-400">
                  {truncateText(components.mouse.model_name)}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-xs font-normal text-gray-400">No Mouse Available</p>
          )}
          <div className="flex items-center text-gray-300 gap-x-4">
            <FaRegKeyboard size={30} className="text-accent text-xl" />
            <div className="flex flex-col">
              <span className="md:text-lg">Keyboard</span>
              {components.keyboard ? (
                <p className="text-xs font-normal text-gray-400">
                  {truncateText(components.keyboard.model_name)}
                </p>
              ) : (
                <p className="text-xs font-normal text-gray-400">
                  No Keyboard Available
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="bg-accent w-fit text-black text-xs rounded-md font-medium px-2 py-2 whitespace-nowrap">
              {priceRange}
            </span>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-white text-sm font-normal hover:underline text-wrap"
            >
              More Detail
            </button>
          </div>
        </div>
      </div>

      <PackageDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageData={{
          tier,
          description,
          priceRange,
          components
        }}
      />
    </>
  );
};

export default PackageCard;
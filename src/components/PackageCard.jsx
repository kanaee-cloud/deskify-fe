import React from "react";
import { IoHeadsetOutline } from "react-icons/io5";
import { FaRegKeyboard } from "react-icons/fa";
import { BiMouseAlt } from "react-icons/bi";
import { CiLaptop } from "react-icons/ci";

const PackageCard = ({ tier, description, priceRange, components }) => {
  return (
    <div className="bg-primary border-solid border-accent border rounded-lg p-4 lg:p-6 relative h-full flex flex-col">
      {/* Image placeholder */}
      <div className="aspect-video bg-yellow-500 rounded-lg mb-4"></div>

      {/* Title */}
      <h2 className="text-white text-xl font-semibold mb-4 text-center">
        {tier}
      </h2>

      {/* Components List */}
      <div className="space-y-3 mb-20">
        {" "}
        {/* Added mb-20 for space at bottom */}
        {components?.laptop && (
          <div className="flex items-center text-gray-300 gap-x-2">
            <CiLaptop className="text-accent text-2xl" />
            <div>
              <h1 className="text-white">Laptop</h1>
              <span className="text-xs font-normal text-gray-400">{components.laptop.model_name}</span>
            </div>
          </div>
        )}
        {components?.laptop && (
          <div className="flex items-center text-gray-300 gap-x-2">
            <IoHeadsetOutline className="text-accent text-xl" />
            <span>Headset</span>
          </div>
        )}
        {components?.laptop && (
          <div className="flex items-center text-gray-300 gap-x-2">
            <FaRegKeyboard className="text-accent text-xl" />
            <span>Keyboard</span>
          </div>
        )}
        {components?.laptop && (
          <div className="flex items-center text-gray-300 gap-x-2">
            <BiMouseAlt className="text-accent text-xl" />
            <span>Mouse</span>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="bg-accent text-black text-xs rounded-md font-medium px-2 py-2 whitespace-nowrap">
            {priceRange}
          </span>
          <button className="text-white text-sm font-normal hover:underline">
            More Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

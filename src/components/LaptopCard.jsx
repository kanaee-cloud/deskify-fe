import React from "react";
// import { truncateText } from "../utilities/TruncateText";
import { CgSmartphoneRam } from "react-icons/cg";
import { extractText } from "../utilities/ExtractText";
import { FaDatabase } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { TwoChar } from "../utilities/TwoChar";


const LaptopCard = ({ id, name, image, ram, memory, display }) => {
  return (
    <div className="border border-gray-300 border-opacity-60 rounded-md">
      <div className="flex items-center gap-x-2  w-full px-4 py-4">
        <div>
          <img
            src={image}
            alt={name}
            className="w-auto h-[15vh] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-sm font-light">{name}</h1>
          <div className="flex w-full justify-center gap-x-4 opacity-70 items-center">
            <p className="flex items-center  text-xs gap-x-1">
              <CgSmartphoneRam size={15} className="text-accent" />
              {extractText(ram)}
            </p>

            <p className="flex items-center text-xs gap-x-1">
              <FiMonitor size={15} className="text-accent" />
              {TwoChar(display)}
            </p>

            <p className="flex items-center text-xs gap-x-1">
              <FaDatabase size={15} className="text-accent" />
              {extractText(memory)}
            </p>
          </div>
        </div>
      </div>
      <button className="bg-accent hover:bg-yellow-500 transition-all w-full py-1 text-sm rounded-b-md text-primary">
        Add Comparison
      </button>
    </div>
  );
};

export default LaptopCard;

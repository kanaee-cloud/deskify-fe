import React, { useState } from "react";
import { FiMonitor, FiX } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";
import { FiMousePointer } from "react-icons/fi";

const ComponentCard = ({ title, icon: Icon, specs }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!title) return null;

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
                {spec.label && <p className="text-gray-400">{spec.label}:</p>}
                <p className="text-white text-xs">{spec.value}</p>
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

  const { monitor, keyboard, mouse, mouse_pad } = packageData.components;

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
              <ComponentCard
                title={monitor?.monitor_1?.model_name || "No Monitor Available"}
                icon={FiMonitor}
                specs={
                  monitor
                    ? [
                        {
                          label: "Resolution",
                          value: monitor?.monitor_1?.specification?.resolution,
                        },
                      ]
                    : []
                }
              />
              <ComponentCard
                title={mouse?.model_name || "No Mouse Available"}
                icon={FiMousePointer}
                specs={
                  mouse
                    ? [
                        { label: "DPI", value: mouse?.specifications?.dpi },
                        { label: "Type", value: mouse?.specifications?.type },
                        { label: "Connectivity", value: mouse?.specifications?.connectivity },
                      ]
                    : []
                }
              />
              <ComponentCard
                title={keyboard?.model_name || "No Keyboard Available"}
                icon={FaRegKeyboard}
                specs={
                  keyboard ? [{ label: "Switch", value: "Mechanical" }] : []
                }
              />
              <ComponentCard
                title={mouse_pad?.model_name || "No Mousepad Available"}
                icon={BiLink}
                specs={mouse_pad ? [{ label: "Material", value: "Cloth" }] : []}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailModal;

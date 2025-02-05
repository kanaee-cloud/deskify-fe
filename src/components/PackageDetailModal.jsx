import React, { useState } from "react";
import { FiMonitor, FiX } from "react-icons/fi";
import { MdGraphicEq } from "react-icons/md";
import { IoIosResize, IoMdLink } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import { CiDesktopMouse1, CiDollar, CiKeyboard, CiMoneyBill } from "react-icons/ci";
import { AiOutlineUsb } from "react-icons/ai";
import { BsUsb } from "react-icons/bs";

const ComponentCard = ({ title, specs, link, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!title) return null;

  return (
    <div className="bg-accent bg-opacity-10 rounded-lg overflow-hidden">
      <div
        className="p-4 flex items-center justify-between cursor-pointer transition-colors duration-200 hover:bg-accent hover:bg-opacity-20"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex w-full justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <img src={image} alt="" className="w-10 h-10 rounded-md"/>
            <h3 className="text-white text-sm">{title}</h3>
          </div>

          <div className="p-2 hover:bg-yellow-400 bg-accent rounded-lg">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <IoMdLink className="text-primary" size={20} />
            </a>
          </div>
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
                {spec.label && <p className="text-accent">{spec.label}</p>}
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

  const { monitor, keyboard, mouse, mouse_pad, others } = packageData.components;

    const { game_pad, bracket, streamdeck, armrest, desk_lamp, monitor_lamp } = packageData.components.others;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-primary rounded-lg w-full max-w-3xl relative border border-accent">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-white"
        >
          <FiX size={20} />
        </button>

        <div className="md:flex max-h-[80vh]">
          {/* Left Section */}
          <div className="mx-auto w-72 p-6 flex-shrink-0">
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
                title={
                  monitor?.monitor_1?.model_name
                }
                image={monitor?.monitor_1?.image_url}
                specs={
                  monitor
                    ? [
                        {
                          label: <MdOutlineDateRange size={20}/>,
                          value: monitor?.monitor_1?.year,
                        },
                        {
                          label: <FiMonitor size={20}/>,
                          value: monitor?.monitor_1?.specification?.resolution,
                        },
                        {
                          label: <MdGraphicEq size={20}/>,
                          value:
                            monitor?.monitor_1?.specification?.refresh_rate,
                        },
                        {
                          label: <RiToolsLine size={20}/>,
                          value: monitor?.monitor_1?.specification?.feature,
                        },
                      ]
                    : []
                }
                link={monitor?.monitor_1?.link_tokopedia}
              />
              <ComponentCard
                title={
                  monitor?.monitor_2?.model_name 
                }
                image={monitor?.monitor_2?.image_url}
                specs={
                  monitor
                    ? [
                        {
                          label: <MdOutlineDateRange size={20}/>,
                          value: monitor?.monitor_2?.year,
                        },
                        {
                          label: <FiMonitor size={20}/>,
                          value: monitor?.monitor_2?.specification?.resolution,
                        },
                        {
                          label: <MdGraphicEq size={20}/>,
                          value:
                            monitor?.monitor_2?.specification?.refresh_rate,
                        },
                        {
                          label: <RiToolsLine size={20}/>,
                          value: monitor?.monitor_2?.specification?.feature,
                        },
                      ]
                    : null
                }
                link={monitor?.monitor_2?.link_tokopedia}
              />
              <ComponentCard
                title={mouse?.model_name}
                image={mouse?.image_url}
                specs={
                  mouse
                    ? [
                        { label: <CiDesktopMouse1 size={20}/>, value: mouse?.specifications?.dpi },
                        {
                          label: <BsUsb size={20} />,
                          value: mouse?.specifications?.type,
                        },
                        {
                          label: <AiOutlineUsb size={20} />,
                          value: mouse?.specifications?.connectivity,
                        },
                        {
                          label: <RiToolsLine size={20}/>,
                          value: mouse?.specifications?.features || "-",
                        },
                      ]
                    : []
                }
              />
              <ComponentCard
                title={keyboard?.model_name}
                image={keyboard?.image_url}
                specs={
                  keyboard
                    ? [
                        {
                          label: <BsUsb size={20} />,
                          value: keyboard?.specifications?.type,
                        },
                        {
                          label: <AiOutlineUsb size={20} />,
                          value: keyboard?.specifications?.connectivity,
                        },
                        {
                          label: <CiKeyboard size={20} />,
                          value: keyboard?.specifications?.layout,
                        },
                        {
                          label: <RiToolsLine size={20}/>,
                          value: keyboard?.specifications?.features,
                        },
                      ]
                    : []
                }
              />
              <ComponentCard
                title={mouse_pad?.model_name }
                image={mouse_pad?.image_url}
                specs={
                  mouse_pad ? [{ label: <IoIosResize size={20}/>, value: mouse_pad?.size }] : []
                }
              />
              {others.is_others ? (
                <>
                <ComponentCard
                  title={others?.bracket?.model_name}
                  image={others?.bracket?.image_url}
                  specs={
                    bracket ? [
                      { label: "Price", value: bracket?.price },
                      { label: "Size", value: bracket?.size }
                    ] : []
                  }
                />
                <ComponentCard
                  title={others?.game_pad?.model_name}
                  image={others?.game_pad?.image_url}
                  specs={
                    bracket ? [
                      { label: <CiDollar size={20} />, value: game_pad?.price },
                      { label: <AiOutlineUsb size={20} />, value: game_pad?.specification?.connection }
                    ] : []
                  }
                />
                <ComponentCard
                  title={others?.streamdeck?.model_name}
                  image={others?.streamdeck?.image_url}
                  specs={
                    bracket ? [
                      { label: "Price", value: streamdeck?.price },
                      { label: "Size", value: streamdeck?.size }
                    ] : []
                  }
                />
                <ComponentCard
                  title={others?.armrest?.model_name}
                  image={others?.armrest?.image_url}
                  specs={
                    bracket ? [
                      { label: "Price", value: bracket?.price },
                      { label: "Size", value: bracket?.size }
                    ] : []
                  }
                />
                <ComponentCard
                  title={others?.desk_lamp?.model_name}
                  image={others?.desk_lamp?.image_url}
                  specs={
                    bracket ? [
                      { label: "Price", value: bracket?.price },
                      { label: "Size", value: bracket?.size }
                    ] : []
                  }
                />
                <ComponentCard
                  title={others?.monitor_lamp?.model_name}
                  image={others?.monitor_lamp?.image_url}
                  specs={
                    bracket ? [
                      { label: "Price", value: bracket?.price },
                      { label: "Size", value: bracket?.size }
                    ] : []
                  }
                />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailModal;

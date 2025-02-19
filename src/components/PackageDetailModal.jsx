/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FiMonitor, FiX } from "react-icons/fi";
import { MdGraphicEq } from "react-icons/md";
import { IoIosResize, IoMdLink } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { CiDesktopMouse1, CiDollar, CiKeyboard } from "react-icons/ci";
import { AiOutlineUsb } from "react-icons/ai";
import { BsUsb } from "react-icons/bs";

// Animation variants for the backdrop
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

// Animation variants for the modal
const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

// Animation variants for component cards
const cardVariants = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2
    }
  }),
  exit: (i) => ({
    opacity: 0,
    x: -20,
    transition: {
      delay: i * 0.05,
      duration: 0.2
    }
  })
};

const ComponentCard = ({ title, specs, link, image, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!title) return null;

  const specVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      layout
      className="bg-accent bg-opacity-10 rounded-lg overflow-hidden"
    >
      <div
        className="p-4 flex items-center justify-between cursor-pointer transition-colors duration-200 hover:bg-accent hover:bg-opacity-20"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex w-full justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <img src={image} alt="" className="w-10 h-10 rounded-md" />
            <h3 className="text-white text-sm">{title}</h3>
          </div>

          {link && (
            <motion.div 
              className="p-2 hover:bg-yellow-400 bg-accent rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <IoMdLink className="text-primary" size={20} />
              </a>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            variants={specVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {specs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        delay: index * 0.05,
                        duration: 0.2
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: -20,
                      transition: {
                        delay: index * 0.05,
                        duration: 0.2
                      }
                    }}
                    className="flex items-center gap-2"
                  >
                    {spec.icon && <spec.icon className="text-gray-400" />}
                    {spec.label && <p className="text-accent">{spec.label}</p>}
                    <p className="text-white text-xs">{spec.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PackageDetailModal = ({ isOpen, onClose, packageData }) => {
  const [isClosing, setIsClosing] = useState(false);

  if (!isOpen || !packageData) return null;

  const { monitor, keyboard, mouse, mouse_pad, others } = packageData.components;

  const handleClose = () => {
    setIsClosing(true);
    // Add a small delay before actually closing the modal
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200); // Match this with your exit animation duration
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  React.useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const getComponentSpecs = (component, type) => {
    if (!component) return [];

    const specMap = {
      monitor: [
        { icon: MdOutlineDateRange, value: component.year },
        { icon: FiMonitor, value: component.specification?.resolution },
        { icon: MdGraphicEq, value: component.specification?.refresh_rate },
        { icon: RiToolsLine, value: component.specification?.feature }
      ],
      mouse: [
        { icon: CiDesktopMouse1, value: component.specifications?.dpi },
        { icon: BsUsb, value: component.specifications?.type },
        { icon: AiOutlineUsb, value: component.specifications?.connectivity },
        { icon: RiToolsLine, value: component.specifications?.features || "-" }
      ],
      keyboard: [
        { icon: BsUsb, value: component.specifications?.type },
        { icon: AiOutlineUsb, value: component.specifications?.connectivity },
        { icon: CiKeyboard, value: component.specifications?.layout },
        { icon: RiToolsLine, value: component.specifications?.features }
      ],
      mousePad: [
        { icon: IoIosResize, value: component.size }
      ],
      other: [
        { icon: CiDollar, value: component.price },
        { icon: RiToolsLine, value: component.feature || component.size || component.specification?.feature }
      ]
    };

    return specMap[type] || [];
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            key="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-primary rounded-lg w-full max-w-3xl relative border border-accent"
          >
            <motion.button
              onClick={handleClose}
              className="absolute -right-5 -top-4 rounded-sm text-white bg-red-600 hover:bg-red-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiX size={30} />
            </motion.button>

            <div className="md:flex max-h-[80vh]">
              {/* Left Section */}
              <motion.div
                variants={cardVariants}
                custom={0}
                className="mx-auto w-72 p-6 flex-shrink-0"
              >
                <motion.div 
                  variants={cardVariants}
                  custom={1}
                  className="w-full aspect-video bg-accent rounded-lg mb-4"
                />
                <motion.h2
                  variants={cardVariants}
                  custom={2}
                  className="text-3xl font-bold text-center text-white mb-2"
                >
                  {packageData.tier}
                </motion.h2>
                <motion.p
                  variants={cardVariants}
                  custom={3}
                  className="text-white font-light text-center text-sm mb-5"
                >
                  {packageData.description}
                </motion.p>
                <motion.div variants={cardVariants} custom={4} className="mt-20">
                  <motion.p
                    whileHover={{ scale: 1.05 }}
                    className="text-black font-semibold text-center rounded-md mb-2 p-2 bg-accent text-sm"
                  >
                    {packageData.priceRange}
                  </motion.p>
                  <p className="text-gray-400 text-center text-xs mb-1">
                    *Price May Fluctuate
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Section */}
              <motion.div
                variants={cardVariants}
                custom={5}
                className="flex-1 p-6 overflow-y-auto max-h-[60vh] custom-scrollbar"
              >
                <motion.div className="space-y-4 px-2">
                  {[
                    { data: monitor?.monitor_1, type: "monitor" },
                    { data: monitor?.monitor_2, type: "monitor" },
                    { data: mouse, type: "mouse" },
                    { data: keyboard, type: "keyboard" },
                    { data: mouse_pad, type: "mousePad" },
                    ...(others?.is_others
                      ? Object.entries(others)
                          .filter(([key]) => key !== "is_others")
                          .map(([key, data]) => ({ data, type: "other" }))
                      : [])
                  ].map((item, index) => (
                    item.data && (
                      <ComponentCard
                        key={`${item.type}-${index}`}
                        index={index}
                        title={item.data.model_name}
                        image={item.data.image_url}
                        specs={getComponentSpecs(item.data, item.type)}
                        link={item.data.link_tokopedia}
                      />
                    )
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PackageDetailModal;
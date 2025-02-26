import React, { useEffect, useState } from "react";
import { FaRegKeyboard } from "react-icons/fa";
import { truncateText } from "../utilities/TruncateText";
import { FiMonitor } from "react-icons/fi";
import { FiMousePointer } from "react-icons/fi";
import PackageDetailModal from "./PackageDetailModal";  
import useLocalPackage from "../hooks/useLocalPackage";
import { IoBookmarks, IoBookmarksOutline } from "react-icons/io5";
import { ImSpinner2 } from "react-icons/im";
import { CiCircleInfo } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

const PackageCard = ({ id, tier, description, priceRange, components }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { addPackages, packages } = useLocalPackage();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedPackages = JSON.parse(localStorage.getItem("packages")) || [];
    setIsBookmarked(savedPackages.some((item) => String(item.id) === String(id)));
  }, [packages, id]);

  const handleBookmarkClick = () => {
    setIsLoading(true); 
    setTimeout(() => {
      addPackages({ id, tier, description, components, priceRange });
      setIsLoading(false); 
    }, 1000); 
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div 
        className="bg-primary border-solid border-accent border rounded-lg p-4 lg:p-6 relative h-full flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        {/* Image placeholder */}
        <div className="aspect-video bg-accent rounded-lg mb-4"></div>

        {/* Title */}
        <h2 className="text-white text-xl font-semibold mb-4 text-center">
          {tier}
        </h2>

        {/* Components List */}
        <div className="flex items-start justify-between">
          <div className="space-y-3 mb-20">
            <div className="flex items-center text-gray-300 gap-x-2">
              <FiMonitor className="text-accent text-xl" />
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
                )}a
              </div>
            </div>
            {components.mouse ? (
              <div className="flex items-center text-gray-300 gap-x-2">
                <FiMousePointer className="text-accent text-2xl" />
                <div className="flex flex-col">
                  <span className="md:text-lg">Mouse</span>
                  <p className="text-xs font-normal text-gray-400">
                    {truncateText(components.mouse.model_name)}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-xs font-normal text-gray-400">
                No Mouse Available
              </p>
            )}
            <div className="flex items-center text-gray-300 gap-x-2">
              <FaRegKeyboard className="text-accent text-xl" />
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
          <motion.button
            onClick={handleBookmarkClick}
            className="bg-accent text-primary text-xs rounded-full font-medium px-2 py-2 whitespace-nowrap"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isLoading ? (
              <ImSpinner2 className="animate-spin text-xl" />
            ) : isBookmarked ? (
              <IoBookmarks size={20} />
            ) : (
              <IoBookmarksOutline size={20} />
            )}
          </motion.button>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
          <div className="flex justify-between items-center space-x-2">
            <motion.span 
              className="bg-accent w-fit text-black text-xs rounded-md font-medium px-2 py-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
            >
              {priceRange}
            </motion.span>
            <motion.button
              onClick={handleOpenModal}
              initial={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="text-accent text-sm font-normal hover:underline text-wrap"
            >
              <CiCircleInfo size={30}/>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <PackageDetailModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            packageData={{
              tier,
              description,
              priceRange,
              components,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PackageCard;
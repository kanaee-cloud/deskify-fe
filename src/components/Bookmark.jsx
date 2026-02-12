import React, { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaFileImage } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { motion } from "framer-motion";
import useLocalPackage from "../hooks/useLocalPackage";
import { truncateText } from "../utilities/TruncateText";
import useLocalLaptop from "../hooks/useLocalLaptop";
import { FormatMoney } from "../utilities/FormatMoney";
import LaptopDetailModal from "./LaptopDetailModal";
import PackageDetailModal from "./PackageDetailModal";

const Bookmark = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { packages, removePackages } = useLocalPackage();
  const { laptop, removeLaptop } = useLocalLaptop();
  const [isLaptopModalOpen, setIsLaptopModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleOpenLaptopModal = (laptop) => {
    setSelectedLaptop(laptop);
    setIsLaptopModalOpen(true);
  };

  const handleOpenPackageModal = (packageItem) => {
    setSelectedPackage(packageItem);
    setIsPackageModalOpen(true);
  };

  const handleClosePackageModal = () => {
    setIsPackageModalOpen(false);
  };

  const isEmpty =
    (!packages || packages.length === 0) && (!laptop || laptop.length === 0);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 
          ${isVisible ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"}`}
        onClick={handleClose}
      />

      <div
        className={`fixed top-0 right-0 z-50 w-96 h-full border-l border-white/10 
          bg-primary/95 backdrop-blur-xl shadow-2xl text-white p-7 transition-all duration-300 ease-in-out
          ${isVisible ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center gap-6">
          <button onClick={handleClose} className="text-red-500">
            <MdLogout size={28} />
          </button>
          <div className="flex items-center">
            <h2 className="text-3xl font-normal">Bookmark</h2>
            <IoBookmarksOutline size={28} className="ml-2 text-accent" />
          </div>
        </div>

        {isEmpty ? (
          <div className="mt-12 text-center text-gray-400">
            <p className="text-lg">No bookmarked item yet</p>
          </div>
        ) : (
          <>
            {packages && packages.length > 0 && (
              <ul className="mt-12 space-y-3">
                <h1 className="text-xl font-semibold">Packages</h1>
                {packages.map((item, index) => (
                  <li
                    key={item.id}
                    onClick={() => handleOpenPackageModal(item)}
                    style={{
                      opacity: 0,
                      animation: isVisible
                        ? `fadeSlideIn 0.2s ease-out forwards ${index * 0.2}s`
                        : "none",
                    }}
                    className="flex items-center justify-between border border-white/10 bg-white/5 rounded-lg p-3 mb-2 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-full">
                        <FaFileImage size={16} className="text-accent" />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-medium">{item.tier}</p>
                        <p className="text-xs text-gray-400">
                          {truncateText(item.description)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removePackages(item.id);
                        }}
                        className="text-red-500 mr-3"
                      >
                        <IoMdCloseCircle size={20} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {laptop && laptop.length > 0 && (
              <ul className="mt-12 space-y-3">
                <h1 className="text-xl font-semibold">Laptops</h1>
                {laptop.map((item, index) => (
                  <li
                    key={item.id}
                    style={{
                      opacity: 0,
                      animation: isVisible
                        ? `fadeSlideIn 0.2s ease-out forwards ${index * 0.2}s`
                        : "none",
                    }}
                    className="flex items-center justify-between border border-white/10 bg-white/5 rounded-lg p-3 mb-2 cursor-pointer hover:bg-white/10 transition-colors group"
                    onClick={() => handleOpenLaptopModal(item)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-full">
                        <FaFileImage size={16} className="text-accent" />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-medium">{truncateText(item.name)}</p>
                        <p className="text-xs text-gray-400">
                          {FormatMoney(item.price)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeLaptop(item.id);
                      }}
                      className="text-red-500 mr-3"
                    >
                      <IoMdCloseCircle size={20} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>

      {/* Always render the modals, but control their visibility with isOpen prop */}
      <LaptopDetailModal
        isOpen={isLaptopModalOpen}
        onClose={() => setIsLaptopModalOpen(false)}
        laptopData={selectedLaptop}
      />

      <PackageDetailModal
        isOpen={isPackageModalOpen}
        onClose={handleClosePackageModal}
        packageData={selectedPackage}
      />

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Bookmark;
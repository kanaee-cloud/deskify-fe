import React, { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaFileImage } from "react-icons/fa";
import useLocalPackage from "../hooks/useLocalPackage";
import { truncateText } from "../utilities/TruncateText";

const Bookmark = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { packages, removePackages } = useLocalPackage();

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

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 
          ${isVisible ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"}`}
        onClick={handleClose}
      />

      <div
        className={`fixed top-0 right-0 z-50 w-80 h-full border-l-2 border-accent 
          bg-primary shadow-lg text-white p-7 transition-transform duration-300 ease-in-out
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

        {packages ? (
          <ul className="mt-12 space-y-3">
            {packages.map((item, index) => (
              <li
                key={item.id}
                style={{
                  opacity: 0,
                  animation: isVisible
                    ? `fadeSlideIn 0.2s ease-out forwards ${index * 0.2}s`
                    : "none",
                }}
                className="flex items-center justify-between border-b border-accent pb-2"
              >
                <div className="flex items-center gap-3 ml-3">
                  <FaFileImage size={20} className="text-accent" />
                  <div className="flex flex-col">
                    <p className="font-medium">{item.tier}</p>
                    <p className="text-xs text-gray-400">
                      {truncateText(item.description)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    removePackages(item.id);
                  }}
                  className="text-red-500 mr-3"
                >
                  <IoMdCloseCircle size={20} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Package Yet</p>
        )}
      </div>

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

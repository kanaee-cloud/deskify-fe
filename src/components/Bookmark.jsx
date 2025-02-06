import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";

const Bookmark = ({ onClose }) => {
  const bookmarks = [
    { id: 1, name: "Pre-build 1", description: "Lorem Ipsum Bla Bla...." },
    { id: 2, name: "Laptop 1", description: "Lorem Ipsum Bla Bla...." },
    { id: 3, name: "Custom 1", description: "Lorem Ipsum Bla Bla...." },
  ];

  return (
    <div className="fixed top-0 right-0 z-50 w-72 h-full border-l-2 border-accent bg-primary shadow-lg text-white p-7 transition-transform transform translate-x-0">
      {/* Header */}
      <div className="flex items-center gap-6">
        <button onClick={onClose} className="text-red-500">
          <MdLogout size={24} />
        </button>
        <div className="flex items-center">
          <h2 className="text-2xl font-normal">Bookmark</h2>
          <IoBookmarksOutline size={24} className="ml-2 text-accent" />
        </div>
      </div>

      {/* List Bookmark */}
      <ul className="mt-12 space-y-3">
        {bookmarks.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b border-accent pb-2"
          >
            <div className="ml-3">
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
            <button className="text-red-500 mr-3">
              <IoMdCloseCircle size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmark;

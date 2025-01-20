import React from "react";
import { MdMonitor } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import useActiveSection from "../hooks/useActiveSection";

const smoothScrollTo = (id, offset = 0) => {
  const section = document.getElementById(id);
  if (section) {
    const top = section.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  const sectionIds = ["section1", "section2"];
  const activeSection = useActiveSection(sectionIds, 80);

  const getNavLinkClass = (id) => {
    return `text-white ${
      activeSection === id
        ? "border-b-2 border-accent"
        : "border-b-2 border-transparent hover:border-accent transition-all duration-200"
    }`;
  };

  return (
    <header className="bg-primary border rounded-lg m-4 border-accent flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <MdMonitor size={40} className="text-accent" />
        <h1 className="text-2xl ml-2 font-semibold">Deskify</h1>
      </div>
      <nav className="flex gap-x-4">
        <button
          onClick={() => smoothScrollTo("section1", 80)}
          className={getNavLinkClass("section1")}
        >
          Home
        </button>
        <button
          onClick={() => smoothScrollTo("section2", 80)}
          className={getNavLinkClass("section2")}
        >
          Desk
        </button>
      </nav>
      <IoBookmarksOutline size={30} className="text-accent" />
    </header>
  );
};

export default Navbar;

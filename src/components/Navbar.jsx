import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdMonitor } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import Bookmark from "./Bookmark";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight > 0;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavLinkClass = (href) => {
    return `text-white ${
      location.pathname === href
        ? "border-b-2 border-accent"
        : "border-b-2 border-transparent hover:border-accent transition-all ease-in-out duration-200"
    }`;
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out
          ${isScrolled 
            ? "bg-primary/70 backdrop-blur-lg border border-accent rounded-lg m-3" 
            : "bg-transparent border-transparent mt-2 "}
          flex items-center justify-between py-3 px-5
        `}
      >
        <div className="flex items-center">
          <MdMonitor size={24} className="text-accent" />
          <h1 className="md:text-lg ml-1 font-medium">Deskify</h1>
        </div>
        <nav className="flex gap-x-4 absolute inset-x-0 mx-auto justify-center">
          <NavLink to="/desk" className={getNavLinkClass("/desk")}>
            Desk
          </NavLink>
          <NavLink to="/" className={getNavLinkClass("/")}>
            Home
          </NavLink>
          <NavLink to="/laptops" className={getNavLinkClass("/laptops")}>
            Laptop
          </NavLink>
        </nav>
        <button onClick={() => setIsBookmarkOpen(true)} className="cursor-pointer z-50">
          <IoBookmarksOutline size={24} className="text-accent" />
        </button>
      </header>

      <Bookmark isOpen={isBookmarkOpen} onClose={() => setIsBookmarkOpen(false)} />
    </>
  );
};

export default Navbar;
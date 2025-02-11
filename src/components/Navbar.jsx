import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdMonitor } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import Bookmark from "./Bookmark";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
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
        : "border-b-2 border-transparent hover:border-accent transition-all duration-200"
    }`;
  };

  return (
    <>
      <header
        className={`${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-primary shadow-lg"
            : "relative bg-transparent"
        } border rounded-lg m-4 border-accent flex items-center justify-between py-3 px-5 z-50 transition-all duration-300`}
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
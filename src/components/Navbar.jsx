import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdMonitor } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();

  const getNavLinkClass = (href) => {
    return `text-white ${
      location.pathname === href
        ? "border-b-2 border-accent"
        : "border-b-2 border-transparent hover:border-accent transition-all duration-200"
    }`;
  };

  return (
    <header className="bg-primary border rounded-lg m-4 border-accent flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <MdMonitor size={30} className="text-accent" />
        <h1 className="md:text-2xl ml-2 font-semibold">Deskify</h1>
      </div>
      <nav className="flex gap-x-4">
        <NavLink to="/" className={getNavLinkClass("/")}>
          Home
        </NavLink>
        <NavLink to="/desk" className={getNavLinkClass("/desk")}>
          Desk
        </NavLink>
      </nav>
      <IoBookmarksOutline size={30} className="text-accent" />
    </header>
  );
};

export default Navbar;

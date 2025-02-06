import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdMonitor } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Function to toggle sticky state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // Sticky hanya jika scroll > 0
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
    <header
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-primary shadow-lg"
          : "relative bg-transparent"
      } border rounded-lg m-4 border-accent flex items-center justify-between p-4 z-50 transition-all duration-300`}
    >
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
        <NavLink to="/laptops" className={getNavLinkClass("/laptops")}>
          Laptop
        </NavLink>
      </nav>
      <IoBookmarksOutline size={30} className="text-accent" />
    </header>
  );
};

export default Navbar;

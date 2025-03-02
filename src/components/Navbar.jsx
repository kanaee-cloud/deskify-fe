import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdMonitor } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Bookmark from "./Bookmark";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Get current route name
  const getCurrentRouteName = () => {
    switch (location.pathname) {
      case '/desk':
        return 'Desk';
      case '/':
        return 'Home';
      case '/laptops':
        return 'Laptop';
      default:
        return '';
    }
  };

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
    const baseClasses = "text-white w-full md:w-auto text-center";
    const activeClasses = location.pathname === href
      ? "border-b-2 border-accent"
      : "border-b-2 border-transparent hover:border-accent transition-all duration-200";
    
    return `${baseClasses} ${activeClasses}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`
          transition-all duration-300
          ${isSticky 
            ? "fixed top-0 left-0 right-0 bg-primary shadow-lg m-2 rounded-lg border border-accent" 
            : "fixed top-0 left-0 right-0 bg-primary border-b border-accent"
          } 
          flex items-center justify-between py-3 px-5 z-50
        `}
      >
        <div className="flex items-center">
          <MdMonitor size={24} className="text-accent" />
          <h1 className="md:text-lg ml-1 font-medium">Deskify</h1>
        </div>

        {/* Mobile Menu Section */}
        <div className="md:hidden flex items-center gap-3">
          <span className="text-white text-sm">{getCurrentRouteName()}</span>
          <button 
            onClick={toggleMenu}
            className="z-50"
          >
            {isMenuOpen ? (
              <FaChevronUp className="h-6 w-6 text-accent" size={10}/>
            ) : (
              <FaChevronDown className="h-6 w-6 text-accent" size={10}/>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-x-4 absolute inset-x-0 mx-auto justify-center">
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

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-primary border border-accent rounded-lg shadow-lg transform transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen 
              ? 'opacity-100 scale-y-100' 
              : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col py-2">
            <NavLink 
              to="/desk" 
              className={`${getNavLinkClass("/desk")} py-2 transform transition-all duration-200 hover:bg-accent/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              Desk
            </NavLink>
            <NavLink 
              to="/" 
              className={`${getNavLinkClass("/")} py-2 transform transition-all duration-200 hover:bg-accent/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/laptops" 
              className={`${getNavLinkClass("/laptops")} py-2 transform transition-all duration-200 hover:bg-accent/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              Laptop
            </NavLink>
          </nav>
        </div>

        <button 
          onClick={() => setIsBookmarkOpen(true)} 
          className="cursor-pointer z-50"
        >
          <IoBookmarksOutline size={24} className="text-accent" />
        </button>
      </header>

      <Bookmark isOpen={isBookmarkOpen} onClose={() => setIsBookmarkOpen(false)} />
    </>
  );
};

export default Navbar;
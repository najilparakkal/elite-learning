"use client";

import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Our Team", href: "#team", isSection: true },
    { name: "Reviews", href: "/reviews" },
  ];

  const handleNavigation = (e, link) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    if (link.isSection) {
      // If we're not on the homepage, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          scrollToSection(link.href);
        }, 100);
      } else {
        // Already on homepage, just scroll to section
        scrollToSection(link.href);
      }
    } else {
      // Regular navigation
      navigate(link.href);
    }
  };

  const scrollToSection = (sectionId) => {
    // Remove the # from the id
    const id = sectionId.replace("#", "");

    // Find the element
    const element = document.getElementById(id);

    if (element) {
      // Scroll to the element smoothly
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If we're not on the homepage, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection("#contact");
      }, 100);
    } else {
      // Already on homepage, just scroll to section
      scrollToSection("#contact");
    }
  };

  return (
    <>
      <header className="w-full md:px-16 px-4 py-4 fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto">
          <nav
            className={`bg-gradient-to-r from-[#001333] to-[#0e4fb5] rounded-2xl px-6 md:py-4 py-3 flex items-center justify-between relative transform transition-all duration-700 ease-out  ${
              isMobileMenuOpen
                ? "md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto"
                : "opacity-100"
            } transition-opacity duration-500`}
          >
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-white font-bold text-xl cursor-pointer">
                <img
                  onClick={() => navigate("/")}
                  src="/WhatsApp_Image_2025-08-23_at_15.34.15_9ac235af-removebg-preview.png"
                  alt=""
                  className="md:w-auto  md:h-6 h-5"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  className="text-white hover:text-blue-200 transition-colors md:text-sm text-xs duration-200 font-sans cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex justify-center items-center gap-0.5">
              <div className="flex bg-white rounded-full py-2 text-xs px-2 justify-center items-center">
                <FaArrowRightLong className="text-[#0e4fb5]" />
              </div>

              <button
                onClick={handleContactClick}
                className="text-xs text-white bg-[#001333] rounded-2xl px-2 py-2 font-medium flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <BiX className="w-6 h-6" />
              ) : (
                <BiMenu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-50 z-40 transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#001333] to-[#0e4fb5] z-50 flex flex-col md:hidden transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="p-6 flex-grow overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-white font-bold text-xl p-2 cursor-pointer">
              <img
                onClick={() => {
                  navigate("/");
                  setIsMobileMenuOpen(false);
                }}
                src="/WhatsApp_Image_2025-08-23_at_15.34.15_9ac235af-removebg-preview.png"
                alt=""
                className="w-auto h-6"
              />{" "}
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <BiX className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item)}
                className="block text-white hover:text-blue-200 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Contact Button - Fixed at bottom */}
        <div className="p-6 border-t flex border-blue-400/30 mt-auto gap-1">
          <div className="flex bg-white rounded-full px-4 py-3 text-sm justify-center items-center">
            <FaArrowRightLong className="text-[#0e4fb5]" />
          </div>
          <button
            onClick={handleContactClick}
            className="w-full text-white bg-[#001333] rounded-full px-6 py-3 font-medium flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

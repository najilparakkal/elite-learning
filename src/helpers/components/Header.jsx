"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setHasScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { name: "Reviews", href: "#reviews", isSection: true },
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // ✅ detect if mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="w-full fixed top-0 left-0 z-50 md:mt-6 mt-4"
      >
        <motion.div
          animate={{
            paddingLeft: isMobile
              ? hasScrolled
                ? "2rem"
                : "1rem"
              : hasScrolled
              ? "8rem"
              : "2rem",
            paddingRight: isMobile
              ? hasScrolled
                ? "2rem"
                : "1rem"
              : hasScrolled
              ? "8rem"
              : "2rem",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-full max-w-7xl mx-auto"
        >
          <motion.nav
            layout
            initial={{ borderRadius: 16 }}
            animate={{
              borderRadius: 16,
              padding: "0.8rem 1.5rem",
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className={`bg-white flex items-center justify-between relative 
    ${
      isMobileMenuOpen
        ? "md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto"
        : "opacity-100"
    } 
    ${hasScrolled ? "shadow-lg" : ""}`} // ✅ shadow when scrolled
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <div className="text-[#115ACE] font-bold text-xl cursor-pointer">
                <motion.img
                  onClick={() => navigate("/")}
                  // whileHover={{ rotate: 5 }}
                  src="/Asset 1.png"
                  alt=""
                  className="md:w-auto md:h-5 h-5"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center space-x-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={itemVariants}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  whileHover={{
                    y: -2,
                    color: "#0e4fb5",
                  }}
                  whileTap={{ y: 0 }}
                  className="text-[#001333] font-semibold transition-colors md:text-[19px] text-[14px] duration-200 font-sans cursor-pointer relative"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              whileHover="hover"
              initial="rest"
              className="hidden md:flex  w-[132px]  justify-center items-center gap-0.5 group relative"
            >
              <motion.div
                variants={{
                  rest: { width: 135 },
                  hover: { width: 145 },
                }}
                className="flex items-center relative h-[40px]"
              >
                <div className="flex items-center relative w-[132px] h-[40px]">
                  {/* Arrow that moves to right and rotates on hover */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-600 ease-in-out group-hover:left-full group-hover:-translate-x-full group-hover:rotate-360 z-0">
                    <div className="flex bg-white rounded-full w-8 h-8 justify-center items-center shadow-md">
                      <FaArrowRightLong className="text-[#0e4fb5] text-xs" />
                    </div>
                  </div>

                  {/* Button that moves to left on hover */}
                  <button
                    onClick={handleContactClick}
                    className="text-xs text-white bg-[#115ACE] rounded-2xl px-4 py-2 font-medium flex items-center gap-2 transition-all duration-500 ease-in-out absolute right-0 top-1/2 transform -translate-y-1/2 group-hover:right-full group-hover:translate-x-full z-10 cursor-pointer whitespace-nowrap"
                  >
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile Hamburger Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="md:hidden text-[#115ACE] p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.nav>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-60 bg-gradient-to-b from-[#001333] to-[#0e4fb5] z-50 flex flex-col md:hidden"
          >
            <div className="p-6 flex-grow overflow-y-auto">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white font-bold text-xl p-2 cursor-pointer"
                >
                  <img
                    onClick={() => {
                      navigate("/");
                      setIsMobileMenuOpen(false);
                    }}
                    src="public/Asset 1.png"
                    alt=""
                    className="w-auto h-6"
                  />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMobileMenu}
                  className="text-white p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                  aria-label="Close mobile menu"
                >
                  <BiX className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Mobile Navigation Items */}
              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    variants={itemVariants}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item)}
                    whileHover={{ x: 5 }}
                    className="block text-white hover:text-blue-200 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-blue-700 cursor-pointer"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.nav>
            </div>

            {/* Mobile Contact Button - Fixed at bottom */}
            <div className="p-6 border-t flex border-blue-400/30 mt-auto gap-1">
              <motion.div
                variants={{
                  rest: { width: 135 },
                  hover: { width: 145 },
                }}
                className="flex items-center relative h-[40px]"
              >
                <div className="flex items-center relative w-[132px] h-[40px]">
                  {/* Arrow that moves to right and rotates on hover */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-600 ease-in-out group-hover:left-full group-hover:-translate-x-full group-hover:rotate-360 z-0">
                    <div className="flex bg-white rounded-full w-8 h-8 justify-center items-center shadow-md">
                      <FaArrowRightLong className="text-[#0e4fb5] text-xs" />
                    </div>
                  </div>

                  {/* Button that moves to left on hover */}
                  <button
                    onClick={handleContactClick}
                    className="text-xs text-white bg-[#001333] rounded-2xl px-4 py-2 font-medium flex items-center gap-2 transition-all duration-500 ease-in-out absolute right-0 top-1/2 transform -translate-y-1/2 group-hover:right-full group-hover:translate-x-full z-10 cursor-pointer whitespace-nowrap"
                  >
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

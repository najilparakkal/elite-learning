import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../../helpers/components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Courses from "./Courses";
import Team from "./Team";
import Contact from "../../helpers/components/Contact";
import Footer from "../../helpers/components/Footer";

export default function Home() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  let sliderRef = useRef(null);

  const slides = [
    {
      title: "What we do best",
      subtitle: "We Make the future",
      text: `At Ealit Learning, we equip aspiring professionals with the right skills, guidance, 
             and resources to achieve global accounting success. Our focus is on delivering 
             expert-led CPA training that shapes confident and career-ready accountants.`,
    },
    {
      title: "Learn from Experts",
      subtitle: "Guided by Professionals",
      text: `Our instructors are industry-leading CPAs who bring practical insights and 
             mentorship to ensure your success in exams and beyond.`,
    },
    {
      title: "Career Ready",
      subtitle: "Success that Lasts",
      text: `With our structured programs, resources, and continuous support, we ensure 
             every learner is confident and ready for global opportunities.`,
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 }
  };

  const buttonTap = {
    scale: 0.98
  };

  return (
    <motion.div 
      className="min-h-screen bg-white sora"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Header />

      <main className="relative overflow-hidden px-4 md:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-10 md:py-16 lg:py-24">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-6 md:space-y-8 lg:pr-10"
              variants={staggerContainer}
            >
              <motion.div className="space-y-3 md:space-y-4" variants={fadeIn}>
                <motion.h1 
                  className="text-3xl md:text-[64px] font-bold text-gray-900 leading-tight"
                  variants={fadeIn}
                >
                  Kerala's First{" "}
                </motion.h1>
                <motion.span 
                  className="text-[#3B77D6] font-bold text-3xl md:text-[64px] block"
                  variants={fadeIn}
                >
                  Exclusive CPA Provider
                </motion.span>
                <motion.p 
                  className="text-sm md:text-base font-semibold text-gray-600 leading-6 max-w-lg"
                  variants={fadeIn}
                >
                  Join Kerala's pioneering{" "}
                  <span className="text-[#115ACE] font-medium">
                    CPA training academy
                  </span>
                  . Get expert mentorship, global-standard resources, and the
                  right guidance to achieve your CPA dream.
                </motion.p>
              </motion.div>

              {/* CTA Button */}
              <motion.button 
                className="bg-[#115ACE] text-sm md:text-base text-white px-5 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_2px_15px_rgba(0,0,0,0.5)] hover:bg-[#0d4699]"
                variants={fadeIn}
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <motion.img
                  src="/icons/STACK[2].png"
                  alt=""
                  className="h-4 w-4 md:h-5 md:w-5"
                  whileHover={{ rotate: 10 }}
                />
                Explore our Courses
              </motion.button>

              {/* Features */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-6 md:pt-8"
                variants={staggerContainer}
              >
                {[
                  "Flexible Learning",
                  "Structured Path",
                  "Strong Community",
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center gap-1"
                    variants={fadeIn}
                    whileHover={{ x: 5 }}
                  >
                    <motion.img
                      src="/icons/Tick[2].png"
                      alt=""
                      className="h-4 w-4 md:h-5 md:w-5"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="text-gray-700 text-xs md:text-sm font-semibold">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div 
              className="relative mt-6 flex justify-center lg:justify-end w-full"
              variants={slideInFromRight}
            >
              {/* Image container */}
              <div className="h-64 md:h-[400px] flex md:justify-end justify-center w-full relative">
                <motion.img
                  src="/banners/Back Drop Graphics[2].png"
                  alt="Backdrop"
                  className="h-full w-auto object-fill flex justify-end"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                />

                {/* Floating Badge */}
                <motion.div 
                  className="absolute top-16 md:top-28 left-0 md:left-16 bg-white rounded-lg px-3 md:px-4 w-28 md:w-32 py-1.5 shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-1 md:gap-2">
                    <motion.img
                      src="/icons/Top[1].png"
                      alt=""
                      className="w-5 h-5 md:w-6 md:h-6 rounded-md"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div>
                      <div className="text-xs font-semibold text-gray-900">
                        Top CPA
                      </div>
                      <div className="text-xs -mt-1 text-gray-600">Course</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom Section with Slider */}
        <motion.section 
          className="flex flex-col md:flex-row items-center md:items-start mt-12 md:mt-16 md:h-20 gap-6 md:gap-0"
          variants={fadeIn}
        >
          {/* Left Text */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left"
            variants={fadeIn}
          >
            <p className="text-sm md:text-base text-[#115ACE]">
              We Make the future
            </p>
            <h6 className="text-xl md:text-2xl font-bold">What we do best</h6>
          </motion.div>

          {/* Slider Section */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row md:text-start text-center items-center gap-4 md:gap-6">
            <Slider
              ref={sliderRef}
              {...sliderSettings}
              className="w-full md:w-[80%]"
            >
              {slides.map((slide, idx) => (
                <motion.div 
                  key={idx} 
                  className=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm md:text-base text-gray-600">
                    {slide.text}
                  </p>
                </motion.div>
              ))}
            </Slider>

            {/* Custom Arrows */}
            <motion.div 
              className="flex items-center gap-4 md:gap-6 md:w-[10%] justify-center md:justify-between"
              variants={fadeIn}
            >
              <motion.img
                src="/icons/ARROW LEFT SIDE[1].png"
                alt="prev"
                className="h-5 w-5 md:h-6 md:w-6 cursor-pointer"
                onClick={() => sliderRef?.slickPrev()}
                whileHover={{ scale: 1.2, x: -2 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.img
                src="/icons/ARROW IRGHT SIDE[2].png"
                alt="next"
                className="h-5 w-5 md:h-6 md:w-6 cursor-pointer"
                onClick={() => sliderRef?.slickNext()}
                whileHover={{ scale: 1.2, x: 2 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.div>
          </div>
        </motion.section>

        <Courses />
        <Team />
      </main>

      <Contact />
    </motion.div>
  );
}
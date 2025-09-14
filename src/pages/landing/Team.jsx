"use client";

import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { motion, useInView, useAnimation } from "framer-motion";

const Team = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const teamMembers = [
    {
      name: "Muhammad Shabeer",
      position: "Founder & CEO",
      image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    },
    {
      name: "Muhammad Shabeer",
      position: "CTO",
      image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    },
    // {
    //   name: "Muhammad Shabeer",
    //   position: "Sales Head",
    //   image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    // },
    // {
    //   name: "Muhammad Shabeer",
    //   position: "Marketing Head",
    //   image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    // },
    // {
    //   name: "Team Member 5",
    //   position: "Finance Director",
    //   image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    // },
    // {
    //   name: "Team Member 6",
    //   position: "Operations Manager",
    //   image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    // },
  ];

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSlidesToShow(2);
      } else if (width <= 640) {
        setSlidesToShow(2);
      } else if (width <= 768) {
        setSlidesToShow(3);
      } else if (width <= 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlides(); // run on mount
    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  // Animation control
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const slideUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="team" className="py-12" ref={ref}>
      <div className="w-full mx-auto">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="lg:w-1/2 mb-6 lg:mb-0" variants={itemVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-2"
              variants={slideUpVariants}
            >
              Our Team
            </motion.h2>
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#115ACE]"
              variants={slideUpVariants}
            >
              Our Bright Minds at Work
            </motion.h3>
          </motion.div>

          <motion.div className="lg:w-1/2 md:mt-4 flex" variants={itemVariants}>
            <div className="md:w-1/3"></div>
            <motion.p
              className="text-gray-600 text-sm sm:text-base md:w-2/3 items-end leading-relaxed"
              variants={fadeInVariants}
            >
              <span className="font-semibold text-gray-900">Our team</span> is
              made up of passionate educators, innovators, and industry experts
              who bring years of experience and dedication to make learning
              engaging and impactful.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Team Members Slider */}
        <motion.div
          className="relative mb-8 flex justify-center gap-6 flex-wrap"
          variants={fadeInVariants}
          initial="hidden"
          animate={controls}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="px-2 sm:px-3 md:pb-10 pb-6 focus:outline-none"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              custom={index}
            >
              <div className="text-start border p-3 md:h-[380px] h-[350px] sm:p-4 rounded-xl border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-[280px] sm:w-[300px]">
                {/* Profile Image */}
                <motion.div
                  className="relative mb-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-full h-fit sm:h-56 mx-auto rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full md:object-cover object-fill"
                    />
                  </div>
                </motion.div>

                {/* Member Info */}
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  {member.position}
                </p>

                {/* Social Icons fixed at bottom */}
                <motion.div
                  className="flex justify-start space-x-2 mt-auto"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <motion.div
                    className="w-6 h-6 sm:w-7 sm:h-7 p-1 rounded-full flex justify-center items-center bg-gray-800 transition-colors hover:bg-blue-700 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                  >
                    <FaFacebookF className="text-white text-xs" />
                  </motion.div>
                  <motion.div
                    className="w-6 h-6 sm:w-7 sm:h-7 p-1 rounded-full flex justify-center items-center bg-gray-800 transition-colors hover:bg-pink-600 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                  >
                    <FaInstagram className="text-white text-xs" />
                  </motion.div>
                  <motion.div
                    className="w-6 h-6 sm:w-7 sm:h-7 p-1 rounded-full flex justify-center items-center bg-gray-800 transition-colors hover:bg-green-500 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                  >
                    <FaWhatsapp className="text-white text-xs" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        {/* <motion.div
          className="flex justify-center items-center space-x-4"
          variants={fadeInVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.button
            onClick={() => sliderRef?.slickPrev()}
            className="p-2 rounded-full transition-colors duration-200"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/icons/ARROW LEFT SIDE[1].png"
              alt="Previous"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </motion.button>

          <motion.button
            onClick={() => sliderRef?.slickNext()}
            className="p-2 rounded-full transition-colors duration-200"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/icons/ARROW IRGHT SIDE[2].png"
              alt="Next"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Team;

"use client";

import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaInstagram, FaStar, FaWhatsapp } from "react-icons/fa6";
import { motion, useInView, useAnimation } from "framer-motion";

const Reviews = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const teamMembers = [
    {
      name: "Muhammed Shabeer",
      role: "CPA Student",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      rating: 5,
    },
    {
      name: "Muhammed Shabeer",
      role: "CPA Student",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      rating: 5,
    },
    {
      name: "Muhammed Shabeer",
      role: "CPA Student",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      rating: 5,
    },
    {
      name: "Muhammed Shabeer",
      role: "CPA Student",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      rating: 5,
    },
    {
      name: "Muhammed Shabeer",
      role: "CPA Student",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      rating: 5,
    },
    {
      name: "Muhammed Shabeer",
      role: "CPA Student",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      rating: 5,
    },
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
    <section id="reviews" className="py-12" ref={ref}>
      <div className="w-full mx-auto">
        {/* Header Section */}

        {/* Team Members Slider */}
        <motion.div
          className="relative mb-8 "
          variants={fadeInVariants}
          initial="hidden"
          animate={controls}
        >
          <Slider ref={setSliderRef} {...sliderSettings} className=" md:py-10">
            {teamMembers.map((review, index) => (
              <motion.article
                key={index}
                className="relative rounded-xl bg-white p-6  gap-2  mt-7  mx-3 "
                variants={itemVariants}
              >
                {/* Overlapping avatar in the top-left with white ring */}
                <motion.div
                  className="absolute  -top-6 left-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <img
                    src={"/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png"}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full ring-1 ring-white shadow-xl"
                  />
                </motion.div>

                {/* Body */}
                <div className="mt-4">
                  <motion.p
                    className="mt-4 md:text-sm text-xs md:leading-6 leading-5 text-gray-800 font-semibold text-pretty"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {review.text}
                  </motion.p>

                  <div className="mt-6 md:flex md:space-y-0 space-y-1 items-center justify-between">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    >
                      <div className="font-bold md:text-base text-sm text-gray-900">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-800 -mt-1">
                        {review.role}
                      </div>
                    </motion.div>

                    {/* Stars */}
                    <motion.div
                      className="translate-y-1 flex"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    >
                      {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar className="text-[#e0b43f]" key={i} />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </Slider>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;

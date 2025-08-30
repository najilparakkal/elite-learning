"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Team = () => {
  const [sliderRef, setSliderRef] = useState(null);

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
    {
      name: "Muhammad Shabeer",
      position: "Sales Head",
      image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    },
    {
      name: "Muhammad Shabeer",
      position: "Marketing Head",
      image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    },
    {
      name: "Team Member 5",
      position: "Finance Director",
      image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    },
    {
      name: "Team Member 6",
      position: "Operations Manager",
      image: "/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png",
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSlidesToShow(1);
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="team" className="py-12 ">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-12">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-2">
              Our Team
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#115ACE]">
              Our Bright Minds at Work
            </h3>
          </div>

          <div className="lg:w-1/2 md:mt-4 flex ">
            <div className="md:w-1/3"></div>
            <p className="text-gray-600 text-sm sm:text-base md:w-2/3 items-end  leading-relaxed">
              <span className="font-semibold text-gray-900">Our team</span> is
              made up of passionate educators, innovators, and industry experts
              who bring years of experience and dedication to make learning
              engaging and impactful.
            </p>
          </div>
        </div>

        {/* Team Members Slider */}
        <div className="relative mb-8 ">
          <Slider ref={setSliderRef} {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="px-2 sm:px-3 md:pb-10 pb-6 focus:outline-none"
              >
                <div className="text-start border p-3 sm:p-4 rounded-xl border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Profile Image */}
                  <div className="relative mb-3">
                    <div className="w-full h-68 sm:h-56 mx-auto rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    {member.position}
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-start space-x-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 p-1 rounded-full flex justify-center items-center bg-gray-800 transition-colors hover:bg-blue-700 cursor-pointer">
                      <FaFacebookF className="text-white text-xs" />
                    </div>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 p-1 rounded-full flex justify-center items-center bg-gray-800 transition-colors hover:bg-pink-600 cursor-pointer">
                      <FaInstagram className="text-white text-xs" />
                    </div>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 p-1 rounded-full flex justify-center items-center bg-gray-800 transition-colors hover:bg-green-500 cursor-pointer">
                      <FaWhatsapp className="text-white text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="p-2 rounded-full transition-colors duration-200"
            aria-label="Previous slide"
          >
            <img
              src="/icons/ARROW LEFT SIDE[1].png"
              alt="Previous"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </button>

          <button
            onClick={() => sliderRef?.slickNext()}
            className="p-2 rounded-full transition-colors duration-200"
            aria-label="Next slide"
          >
            <img
              src="/icons/ARROW IRGHT SIDE[2].png"
              alt="Next"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;

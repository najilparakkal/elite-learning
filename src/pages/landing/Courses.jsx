"use client";

import { BiAward, BiBookOpen, BiTargetLock } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";

const Courses = () => {
  // 🔹 Course Data
  const courseCards = [
    {
      title: "CPA (USA) Program",
      subtitle: "US CPA",
      tagline: "EXPERT MENTORSHIP",
      description:
        "Comprehensive courses designed to guide you toward CPA success.",
      button: "View More Details",
    },
    {
      title: "CMA (USA) Program",
      subtitle: "US CMA",
      tagline: "GLOBAL OPPORTUNITIES",
      description:
        "Master management accounting with globally recognized certification.",
      button: "View More Details",
    },
    {
      title: "ACCA (UK) Program",
      subtitle: "ACCA",
      tagline: "INTERNATIONAL RECOGNITION",
      description:
        "Get equipped with skills for a successful global finance career.",
      button: "View More Details",
    },
  ];

  // 🔹 Feature Boxes Data
  const features = [
    {
      icon: <FaGraduationCap className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Expert Mentorship",
      text: "Learn directly from seasoned CPA professionals who guide you with proven strategies for exam success.",
    },
    {
      icon: <BiTargetLock className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Structured Learning Path",
      text: "A clear, step-by-step roadmap designed to help you succeed without confusion.",
    },
    {
      icon: <BiAward className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Globally Recognized",
      text: "Prepare for one of the world's most respected accounting certifications and boost your career prospects.",
    },
    {
      icon: <BiBookOpen className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Flexible Learning",
      text: "Access classes and study resources anytime, anywhere—designed to fit your schedule.",
    },
  ];

  return (
    <div className="py-12 md:py-20  bg-white">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Discover Our Courses
          </h2>
          <p className="text-sm sm:text-base text-gray-800 max-w-2xl mx-auto px-2">
            Comprehensive courses designed to guide you toward CPA success.
          </p>
        </div>

        {/* 🔹 Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 md:mb-16">
          {courseCards.map((course, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-2.5 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Card Header with Gradient */}
              <div className="relative md:rounded-2xl rounded-lg h-40 sm:h-36 md:h-auto flex items-center justify-center">
                <img
                  src="/banners/Artboard-5[1].webp"
                  alt="Banner"
                  className="w-full h-full object-center rounded-xl"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 pt-4 sm:pt-5 md:pt-6">
                <h3 className="text-sm sm:text-base border w-fit px-2 py-2 sm:py-2 rounded-md border-[#115ACE] font-bold text-[#115ACE] mb-2 sm:mb-3">
                  {course.title}
                </h3>

                {/* description grows */}
                <p className="text-gray-900 font-semibold mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed flex-grow">
                  {course.description}
                </p>

                {/* button stays bottom */}
                <button className="mt-auto w-full text-xs sm:text-sm bg-[#001333] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-slate-700 transition-colors duration-200">
                  {course.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 pt-8 md:pt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-start justify-center items-center flex flex-col border pt-6 sm:pt-8 md:pt-10 px-3 sm:px-4 pb-6 sm:pb-7 md:pb-9 rounded-xl border-gray-200"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#4183df] text-blue-200 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#115ACE] mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-900 text-center font-semibold text-xs sm:text-sm leading-5">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

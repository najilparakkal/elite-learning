import React, { useState, useRef } from "react";
import Header from "../../helpers/components/Header";
import EnquiryModal from "./Enquary";
import { BiAward, BiGlobe, BiTrendingUp } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import Contact from "../../helpers/components/Contact";
import { motion, useInView } from "framer-motion";

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
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Main Course Component
const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen sora bg-white" ref={ref}>
      <Header />

      <div className="w-full max-w-7xl mx-auto md:px-12 lg:px-16 px-4 pt-20 md:pt-16  lg:pt-24 py-5 md:py-16 lg:py-24">
        {/* Course Header */}
        <motion.div 
          className="mt-6 md:mt-10 py-6 md:py-10 mb-4 md:mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-8 gap-4">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-800"
              variants={fadeIn}
            >
              CPA (USA) – Course Details
            </motion.h1>
            <motion.button
              onClick={openModal}
              className="bg-[#115ACE] text-white text-sm shadow-[0_2px_15px_rgba(0,0,0,0.5)] px-5 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-medium w-full md:w-auto"
              variants={scaleUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enquire Now
            </motion.button>
          </div>

          <motion.div 
            className="pb-6 md:pb-10 border-gray-400 border-b"
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-[#3B77D6] mb-3">
              What is CPA (USA)?
            </h2>
            <p className="text-gray-600 font-semibold text-sm md:text-base leading-relaxed">
              The Certified Public Accountant (CPA) is the highest professional
              accounting qualification in the United States, recognized
              worldwide. It is considered the "gold standard" for accountants
              and finance professionals aiming for an international career.
            </p>
          </motion.div>
        </motion.div>

        {/* Key Details Section */}
        <motion.div 
          className="mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-gray-800 text-center mb-6 md:mb-8"
            variants={fadeIn}
          >
            Key Details
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column */}
            <motion.div 
              className="space-y-6 md:space-y-8 w-full md:w-[90%] lg:w-[80%]"
              variants={staggerContainer}
            >
              {/* Eligibility */}
              <motion.div variants={fadeIn}>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  1. Eligibility
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Bachelor's degree (Commerce / Accounting / Finance
                    preferred)
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />
                    Most states require 150 credit hours of education
                    (equivalent to a Master's or CA background in India)
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md-w-6 mr-2 mt-0.5"
                    />{" "}
                    Non-accounting graduates can also qualify through bridge
                    courses
                  </motion.li>
                </ul>
              </motion.div>

              {/* Passing Criteria */}
              <motion.div variants={fadeIn}>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  3. Passing Criteria
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Minimum 75 marks out of 99 required in each section.
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Exams can be taken in India (test centers available in
                    Kochi, Chennai, Bangalore, Mumbai, etc.)
                  </motion.li>
                </ul>
              </motion.div>

              {/* Career Opportunities */}
              <motion.div variants={fadeIn}>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  5. Career Opportunities
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li 
                    className="flex items-start text-black font-bold ml-0 md:ml-8"
                    variants={fadeIn}
                  >
                    CPA professionals are in high demand across industries:
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Big 4 firms: Deloitte, PwC, EY, KPMG
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    MNCs, financial institutions, consulting firms
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Career roles : Auditor, Financial Analyst, Tax Consultant,
                    CFO Exec, and more
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              className="space-y-6 md:space-y-8 w-full md:w-[90%] lg:w-[80%]"
              variants={staggerContainer}
            >
              {/* Exam Structure */}
              <motion.div 
                className="mb-6 md:mb-10"
                variants={slideInFromRight}
              >
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-4 md:mb-9">
                  2. Exam Structure (by AICPA – American Institute of CPAs)
                </h3>

                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li 
                    className="flex items-start text-black font-bold ml-0 md:ml-8"
                    variants={fadeIn}
                  >
                    The CPA USA exam has 4 sections:
                  </motion.li>

                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Auditing & Attestation (AUD)
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Financial Accounting & Reporting (FAR)
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Regulation (REG)
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Business Analysis & Reporting (BAR) or other discipline
                    choices (under CPA Evolution model)
                  </motion.li>
                  <motion.li 
                    className="items-start ml-0 md:ml-8 text-gray-700 mt-3 font-bold text-sm md:text-base"
                    variants={fadeIn}
                  >
                    Each section is{" "}
                    <span className="text-[#3B77D6] font-bold">
                      4 hours long
                    </span>{" "}
                    – Total exam duration 16 hours.
                  </motion.li>
                </ul>
              </motion.div>

              {/* Duration */}
              <motion.div variants={slideInFromRight}>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  4. Duration
                </h3>

                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li 
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    The CPA can typically be completed in 12–18 months,
                    depending on preparation and exam scheduling.{" "}
                  </motion.li>
                </ul>
              </motion.div>

              {/* Why CPA USA */}
              <motion.div 
                className="bg-gradient-to-b from-[#0e4fb5] to-[#000c20] rounded-lg py-6 md:py-8 px-4 md:px-6 text-white"
                variants={scaleUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  Why CPA (USA)?
                </h3>
                <div className="space-y-5 md:space-y-3">
                  <motion.div 
                    className="flex items-center"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Blue and White Illustration Build a Business Team Presentation (2) 1.png"
                      alt=""
                      className="h-5 w-8 md:h-6 md:w-10"
                    />
                    <span className="text-xs md:text-sm ml-2">
                      Globally recognized qualification
                    </span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Blue and White Illustration Build a Business Team Presentation (2) 1.png"
                      alt=""
                      className="h-5 w-8 md:h-6 md:w-10"
                    />{" "}
                    <span className="text-xs md:text-sm ml-2">
                      High salary packages (₹8-20 LPA in India; higher abroad)
                    </span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Blue and White Illustration Build a Business Team Presentation (2) 1.png"
                      alt=""
                      className="h-5 w-8 md:h-6 md:w-10"
                    />{" "}
                    <span className="text-xs md:text-sm ml-2">
                      International career mobility (USA, Canada, Middle East,
                      etc.)
                    </span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    variants={fadeIn}
                  >
                    <img
                      src="/icons/Blue and White Illustration Build a Business Team Presentation (2) 1.png"
                      alt=""
                      className="h-5 w-8 md:h-6 md:w-10"
                    />{" "}
                    <span className="text-xs md:text-sm ml-2">
                      Equivalent to prestige of Indian CA, but with wider global
                      scope
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
      <Contact />
    </div>
  );
};

export default Courses;
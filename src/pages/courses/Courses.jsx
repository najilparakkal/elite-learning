import React, { useState, useRef, useEffect } from "react";
import Header from "../../helpers/components/Header";
import EnquiryModal from "./Enquary";
import { BiAward, BiGlobe, BiTrendingUp } from "react-icons/bi";
import {
  FaBookOpenReader,
  FaCalendarCheck,
  FaDollarSign,
} from "react-icons/fa6";
import Contact from "../../helpers/components/Contact";
import { motion, useInView } from "framer-motion";
import { BsPersonWorkspace, BsRocketTakeoff } from "react-icons/bs";
import { SiGooglemeet } from "react-icons/si";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconHover = {
  scale: 1.2,
  rotate: 5,
  transition: { duration: 0.3 },
};

const features = [
  {
    icon: <FaBookOpenReader className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Just 4 papers to clear",
    text: "Accounting | Auditing | Taxation | Business",
  },
  {
    icon: <FaCalendarCheck className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Finish 12 - 15 months",
    text: "One exam every 30 days perfectly placed",
  },
  {
    icon: <BsRocketTakeoff className="w-5 h-5 md:w-6 md:h-6" />,
    title: "In Depth  & Comprehensive",
    text: " classes focused on conceptual clarity",
  },
  {
    icon: <SiGooglemeet className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Flexible Learning",
    text: "Online & Recorded classes",
  },
];

// Main Course Component
const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          <motion.div className=" " variants={fadeIn}>
            {/* <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-[#3B77D6] mb-3">
              What is CPA (USA)?
            </h2> */}
            <div className="space-y-4 md:space-y-3">
              {[
                "US CPA = India CA",
                "Only 4 exams - Accounting, Auditing, Taxation, Business",
                "Complete in 12 to 15 months - 1 exam every 3 months",
                "Can pursue alongside a full-time job or studies",
                "Avg. salary in India: Up to 12 LPA",
                "Avg. salary globally: Up to 60 LPA",
                "Recognised in 130+ countries",
                "High demand in Big 4, top MNCs, and global accounting firms",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <span className="text-[#2563eb] text-lg leading-5 mt-[2px]">
                    •
                  </span>
                  <span className="text-xs md:text-sm ml-2 text-gray-800">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mb-12"
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-start justify-center items-center flex flex-col shadow-lg pt-6 sm:pt-8 md:pt-10 px-3 sm:px-4 pb-6 sm:pb-7 md:pb-9 rounded-xl "
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            >
              <motion.div
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#4183df] text-white rounded-lg flex items-center justify-center mb-3 sm:mb-4"
                whileHover={iconHover}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-sm sm:text-base font-bold text-[#115ACE] mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-900 text-center font-semibold text-xs sm:text-sm leading-5">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-5 pb-10 ">
          <motion.div
            className="relative bg-gradient-to-b from-[#0e4fb5] to-[#000c20] rounded-xl py-6 md:py-10 px-5 md:px-8 text-white flex-1 flex flex-col justify-center overflow-hidden shadow-lg"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <img
              src="/Hiring logo/H_and_R_Block_logo.svg"
              alt="H&R Block"
              className="absolute top-4 right-4 md:top-6 md:right-8 w-10 md:w-16 opacity-60 animate-float-medium"
            />
            <img
              src="/Hiring logo/Infosys_logo.svg"
              alt="Infosys"
              className="absolute top-20 right-6 md:top-24 md:right-10 w-8 md:w-10 opacity-70 animate-float-slow"
            />
            <img
              src="/Hiring logo/EY_logo_2019.svg"
              alt="EY"
              className="absolute bottom-16 right-20 md:right-28 w-8 md:w-10 opacity-50 animate-float-fast"
            />
            <img
              src="/Hiring logo/grant-thornton-vector-logo.svg"
              alt="Grant Thornton"
              className="absolute bottom-24 right-28 md:right-40 w-10 md:w-12 opacity-60 animate-float-slow"
            />

            <BsPersonWorkspace className="absolute bottom-6 right-28 md:right-36 text-[#2f5490] opacity-50 text-3xl md:text-4xl animate-float-medium" />

            {/* Text Points */}
            <div className="space-y-2 md:space-y-3 z-10">
              {[
                "CPA Jobs in India",
                "Avg salary 10L",
                "Work at Big 4 & top US MNCs",
                "Start your own auditing and tax firm",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start z-10"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <span className="text-sm md:text-base ml-2 text-white">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT CARD --- */}
          <motion.div
            className="relative bg-gradient-to-b from-[#0e4fb5] to-[#000c20] rounded-xl py-6 md:py-10 px-5 md:px-8 text-white flex-1 flex flex-col justify-center overflow-hidden shadow-lg"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            {/* Floating Logos */}
            <img
              src="/Hiring logo/Accenture.svg"
              alt="Accenture"
              className="absolute top-4 right-4 md:top-6 md:right-8 w-8 md:w-10 opacity-70 animate-float-slow"
            />
            <img
              src="/Hiring logo/american-express-logo-19.svg"
              alt="American Express"
              className="absolute top-20 right-10 md:top-24 md:right-14 w-8 md:w-10 opacity-60 animate-float-medium"
            />
            <img
              src="/Hiring logo/Cisco_logo_blue_2016.svg"
              alt="Cisco"
              className="absolute bottom-16 right-20 md:right-24 w-8 md:w-10 opacity-50 animate-float-fast"
            />
            <img
              src="/Hiring logo/deloitte-1.svg"
              alt="Deloitte"
              className="absolute bottom-24 right-28 md:right-40 w-8 md:w-10 opacity-60 animate-float-slow"
            />

            {/* Text Points */}
            <div className="space-y-2 md:space-y-3 z-10">
              {[
                "US CPA License is accepted worldwide",
                "Become a part of 200,000+ global CPA network",
                "Work opportunities in USA, Canada, Middle East and beyond",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start z-10"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <span className="text-sm md:text-base ml-2 text-white">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
            {/* Left Column */}
            <motion.div
              className="space-y-6 md:space-y-8 w-full md:w-[90%] lg:w-[80%]"
              variants={staggerContainer}
            >
              {/* Eligibility */}
              <motion.div variants={fadeIn}>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  Eligibility
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Bachelor's degree (Commerce / Accounting / Finance
                    preferred)
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />
                    Most states require 120 credit hours of education
                    (equivalent to a Master's or CA background in India)
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
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
                  Passing Criteria
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Minimum 75 score out of 99 required in each section.
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Exams centers in India :- thiruvananthapuram , Bangalore,
                    chennai
                  </motion.li>
                </ul>
              </motion.div>

              {/* Career Opportunities */}
              <motion.div variants={fadeIn}>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  Career Opportunities
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li
                    className="flex items-start text-black font-bold ml-0 md:ml-8"
                    variants={fadeIn}
                  >
                    CPA professionals are in high demand across industries:
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Big 4 firms: Deloitte, PwC, EY, KPMG
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    MNCs, financial institutions, consulting firms
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
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
              <motion.div variants={slideInFromRight}>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  Duration
                </h3>

                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li className="flex items-start" variants={fadeIn}>
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
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="space-y-6 md:space-y-8 w-full md:w-[90%] lg:w-[80%]"
              variants={staggerContainer}
            >
              {/* Exam Structure */}
              <motion.div className="mb-6 md:mb-10" variants={slideInFromRight}>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-4 md:mb-9">
                  Exam Structure (by AICPA – American Institute of CPAs)
                </h3>

                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <motion.li
                    className="flex items-start text-black font-bold ml-0 md:ml-8"
                    variants={fadeIn}
                  >
                    The CPA USA exam has 4 sections:
                  </motion.li>

                  <motion.li className="flex items-start" variants={fadeIn}>
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Auditing & Attestation (AUD)
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Financial Accounting & Reporting (FAR)
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Regulation (REG)
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
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
            </motion.div>
            <div className="w-full mx-auto ">
              {/* Header Section */}
              <motion.div
                className="text-center mb-8 md:mb-12"
                variants={fadeInUp}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                  Road Map to become a CPA USA
                </h2>

                {/* Stages Container - Responsive Layout */}
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                  {/* Stage 1 */}
                  <motion.div
                    className="w-full lg:w-1/3 rounded-lg  shadow-lg hover:shadow-md transition-shadow duration-300"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-b rounded-t-lg text-white items-center justify-center text-center flex from-[#0e4fb5] to-[#000c20] h-12 md:h-14 px-4 py-2">
                      <span className="text-sm md:text-base font-semibold whitespace-nowrap">
                        Stage 1 | Exam Prep
                      </span>
                    </div>
                    <div className="p-4 md:p-6 h-32 md:h-36 flex items-center">
                      <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed">
                        Ealit Learning Live & Recorded Classes with Glaim CPA
                        Review software
                      </p>
                    </div>
                  </motion.div>

                  {/* Stage 2 */}
                  <motion.div
                    className="w-full lg:w-1/3 rounded-lg  shadow-lg hover:shadow-md transition-shadow duration-300"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="bg-gradient-to-b rounded-t-lg text-white items-center justify-center text-center flex from-[#0e4fb5] to-[#000c20] h-12 md:h-14 px-4 py-2">
                      <span className="text-sm md:text-base font-semibold whitespace-nowrap">
                        Stage 2 | Evaluation & State Board
                      </span>
                    </div>
                    <div className="p-4 md:p-6 h-32 md:h-36 flex flex-col justify-center space-y-2">
                      {[
                        "Evaluation",
                        "Notice to Schedule",
                        "CPA Exam fees pyt",
                      ].map((point, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-xs sm:text-sm text-start md:text-base text-gray-800">
                            <span className="text-[#3B77D6]">•</span> {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Stage 3 */}
                  <motion.div
                    className="w-full lg:w-1/3 rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-gradient-to-b rounded-t-lg text-white items-center justify-center text-center flex from-[#0e4fb5] to-[#000c20] h-12 md:h-14 px-4 py-2">
                      <span className="text-sm md:text-base font-semibold">
                        Stage 3 | Licensing
                      </span>
                    </div>
                    <div className="p-4 md:p-6 h-32 md:h-36 flex flex-col justify-center space-y-2">
                      {[
                        "Complete all Exams",
                        "Submit 1 year experience certificate",
                        "Apply for CPA License",
                      ].map((point, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-xs sm:text-sm md:text-base text-start text-gray-800">
                            <span className="text-[#3B77D6]">•</span> {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="w-full mx-auto ">
              {/* Header Section */}
              <motion.div
                className="text-center mb-8 md:mb-12"
                variants={fadeInUp}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 ">
                  US CPA Exam Subjects
                </h2>
                <p className="text-gray-600 mb-6 md:mb-8">
                  The international administration process for the India region
                  is now permanently available
                </p>

                {/* Stages Container - Responsive Layout */}
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                  {/* Stage 2 */}
                  <motion.div
                    className="w-full lg:w-1/2 rounded-lg  shadow-lg hover:shadow-md transition-shadow duration-300"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="bg-gradient-to-b rounded-t-lg text-white items-center justify-center text-center flex from-[#0e4fb5] to-[#000c20] h-12 md:h-14 px-4 py-2">
                      <span className="text-sm md:text-base font-semibold whitespace-nowrap">
                        3 Core Exams (Manditory)
                      </span>
                    </div>
                    <div className="p-4 md:p-6 h-32 md:h-36 flex flex-col justify-center space-y-2">
                      {[
                        "AUD - Auditing & Attestation",
                        "FAR - Financial Accounting & Reporting",
                        "REG - Taxation and Regulation",
                      ].map((point, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-xs sm:text-sm text-start md:text-base text-gray-800">
                            <span className="text-[#3B77D6] font-bold">
                              {index + 1}
                            </span>{" "}{"   "}
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Stage 3 */}
                  <motion.div
                    className="w-full lg:w-1/2 rounded-lg  shadow-lg hover:shadow-md transition-shadow duration-300"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-gradient-to-b rounded-t-lg text-white items-center justify-center text-center flex from-[#0e4fb5] to-[#000c20] h-12 md:h-14 px-4 py-2">
                      <span className="text-sm md:text-base font-semibold">
                        Discipline Exam - choose any 1 out of 3
                      </span>
                    </div>
                    <div className="p-4 md:p-6 h-32 md:h-36 flex flex-col justify-center space-y-2">
                      {[
                        "BAR - Business Analysis & Reporting",
                        "ISC - Information Systems Controls",
                        "TCP - Tax Compliance & Planning",
                      ].map((point, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-xs sm:text-sm md:text-base text-start text-gray-800">
                            <span className="text-[#3B77D6] font-bold">
                              {index + 1}
                            </span>{"   "}
                            {" "+point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
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

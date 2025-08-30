import React, { useState } from "react";
import Header from "../../helpers/components/Header";
import EnquiryModal from "./Enquary";
import { BiAward, BiGlobe, BiTrendingUp } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import Contact from "../../helpers/components/Contact";

// Main Course Component
const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen sora bg-white">
      <Header />

      <div className="w-full md:px-12 lg:px-16 px-4 pt-20 md:pt-16  lg:pt-24 py-5 md:py-16 lg:py-24">
        {/* Course Header */}
        <div className=" mt-6 md:mt-10 py-6 md:py-10 mb-4 md:mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-8 gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-800">
              CPA (USA) – Course Details
            </h1>
            <button
              onClick={openModal}
              className="bg-[#115ACE] text-white text-sm shadow-[0_2px_15px_rgba(0,0,0,0.5)] px-5 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-medium w-full md:w-auto"
            >
              Enquire Now
            </button>
          </div>

          <div className="pb-6 md:pb-10 border-gray-400 border-b">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-[#3B77D6] mb-3">
              What is CPA (USA)?
            </h2>
            <p className="text-gray-600 font-semibold text-sm md:text-base leading-relaxed">
              The Certified Public Accountant (CPA) is the highest professional
              accounting qualification in the United States, recognized
              worldwide. It is considered the "gold standard" for accountants
              and finance professionals aiming for an international career.
            </p>
          </div>
        </div>

        {/* Key Details Section */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-gray-800 text-center mb-6 md:mb-8">
            Key Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-8">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8 w-full md:w-[90%] lg:w-[80%]">
              {/* Eligibility */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  1. Eligibility
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Bachelor's degree (Commerce / Accounting / Finance
                    preferred)
                  </li>
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />
                    Most states require 150 credit hours of education
                    (equivalent to a Master's or CA background in India)
                  </li>
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Non-accounting graduates can also qualify through bridge
                    courses
                  </li>
                </ul>
              </div>

              {/* Passing Criteria */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  3. Passing Criteria
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Minimum 75 marks out of 99 required in each section.
                  </li>
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Exams can be taken in India (test centers available in
                    Kochi, Chennai, Bangalore, Mumbai, etc.)
                  </li>
                </ul>
              </div>

              {/* Career Opportunities */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  5. Career Opportunities
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <li className="flex items-start text-black font-bold ml-0 md:ml-8">
                    CPA professionals are in high demand across industries:
                  </li>
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Big 4 firms: Deloitte, PwC, EY, KPMG
                  </li>
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    MNCs, financial institutions, consulting firms
                  </li>
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Career roles : Auditor, Financial Analyst, Tax Consultant,
                    CFO Exec, and more
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:space-y-8 w-full md:w-[90%] lg:w-[80%]">
              {/* Exam Structure */}
              <div className="mb-6 md:mb-10">
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-4 md:mb-9">
                  2. Exam Structure (by AICPA – American Institute of CPAs)
                </h3>

                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <li className="flex items-start text-black font-bold ml-0 md:ml-8">
                    The CPA USA exam has 4 sections:
                  </li>

                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Auditing & Attestation (AUD)
                  </li>
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Financial Accounting & Reporting (FAR)
                  </li>
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Regulation (REG)
                  </li>
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    Business Analysis & Reporting (BAR) or other discipline
                    choices (under CPA Evolution model)
                  </li>
                  <li className="items-start ml-0 md:ml-8 text-gray-700 mt-3 font-bold text-sm md:text-base">
                    Each section is{" "}
                    <span className="text-[#3B77D6] font-bold">
                      4 hours long
                    </span>{" "}
                    – Total exam duration 16 hours.
                  </li>
                </ul>
              </div>

              {/* Duration */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#3B77D6] mb-3 md:mb-5">
                  4. Duration
                </h3>

                <ul className="space-y-4 md:space-y-5 text-gray-500 font-semibold text-sm md:text-base">
                  <li className="flex items-start">
                    <img
                      src="/icons/Palne icon (1080 x 1080 px) (2)[1].png"
                      alt=""
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 mt-0.5"
                    />{" "}
                    The CPA can typically be completed in 12–18 months,
                    depending on preparation and exam scheduling.{" "}
                  </li>
                </ul>
              </div>

              {/* Why CPA USA */}
              <div className="bg-gradient-to-b from-[#0e4fb5] to-[#000c20] rounded-lg py-6 md:py-8 px-4 md:px-6 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  Why CPA (USA)?
                </h3>
                <div className="space-y-5 md:space-y-3">
                  <div className="flex items-center">
                    <img
                      src="/icons/Blue and White Illustration Build a Business Team Presentation (2) 1.png"
                      alt=""
                      className="h-5 w-8 md:h-6 md:w-10"
                    />
                    <span className="text-xs md:text-sm ml-2">
                      Globally recognized qualification
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/icons/Blue and White Illustration Build a Business Team Presentation (2) 1.png"
                      alt=""
                      className="h-5 w-8 md:h-6 md:w-10"
                    />{" "}
                    <span className="text-xs md:text-sm ml-2">
                      High salary packages (₹8-20 LPA in India; higher abroad)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/icons/Blue and White Illustration Build a Business Team Presentation (2) 1.png"
                      alt=""
                      className="h-5 w-8 md:h-6 md:w-10"
                    />{" "}
                    <span className="text-xs md:text-sm ml-2">
                      International career mobility (USA, Canada, Middle East,
                      etc.)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/icons/Blue and White Illustration Build a Business Team Presentation (2) 1.png"
                      alt=""
                      className="h-5 w-8 md:h-6 md:w-10"
                    />{" "}
                    <span className="text-xs md:text-sm ml-2">
                      Equivalent to prestige of Indian CA, but with wider global
                      scope
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
      <Contact />
    </div>
  );
};

export default Courses;

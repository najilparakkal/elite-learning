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

  let sliderRef = null;

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
  return (
    <div className="min-h-screen bg-gray-50 sora">
      <Header />
      <main className="relative overflow-hidden md:px-16 px-4 py-10">
        <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Right Content - Hero Image (appears first on mobile) */}
            <div className="relative md:block hidden w-full lg:order-2">
              <div className="relative z-10">
                <div
                  className="w-full h-64 md:h-[400px] relative bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('/banners/Back Drop Graphics[2].png')",
                  }}
                >
                  <div className="absolute top-20 md:top-28 -left-2 md:left-6 bg-white rounded-lg px-3 md:px-4 w-28 md:w-32 py-1.5 shadow-lg">
                    <div className="flex items-center gap-1 md:gap-2">
                      <img
                        src="/icons/Top[1].png"
                        alt=""
                        className="w-5 h-5 md:w-6 md:h-6 rounded-md"
                      />
                      <div>
                        <div className="text-xs font-semibold text-gray-900">
                          Top CPA
                        </div>
                        <div className="text-xs -mt-1 text-gray-600">
                          Course
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-end h-full pt-16">
                    <div className="relative"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 py-10 lg:order-1">
              <div className="space-y-3 md:space-y-4">
                <div className="-space-y-2 md:-space-y-3">
                  <h1 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight">
                    Kerala's First{" "}
                  </h1>
                  <span className="text-[#3B77D6] font-bold text-3xl md:text-[40px]">
                    Exclusive CPA Provider
                  </span>
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-600 leading-5 max-w-lg">
                  Join Kerala's pioneering{" "}
                  <span className="text-[#115ACE] font-medium">
                    CPA training academy
                  </span>
                  . Get expert mentorship, global-standard resources, and the
                  right guidance to achieve your CPA dream.
                </p>
              </div>

              {/* CTA Button */}
              <button className="bg-[#115ACE] text-sm text-white px-5 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
                <img src="/icons/STACK[2].png" alt="" className="h-4 w-4" />
                Explore our Courses
              </button>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
                <div className="flex items-center gap-1">
                  <img src="/icons/Tick[2].png" alt="" className="h-4 w-4" />
                  <span className="text-gray-700 text-xs md:text-sm font-semibold">
                    Flexible Learning
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <img src="/icons/Tick[2].png" alt="" className="h-4 w-4" />
                  <span className="text-gray-700 text-xs md:text-sm font-semibold">
                    Structured Path
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <img src="/icons/Tick[2].png" alt="" className="h-4 w-4" />
                  <span className="text-gray-700 text-xs md:text-sm font-semibold">
                    Strong Community
                  </span>
                </div>
              </div>
            </div>

            <div className="relative md:hidden w-full lg:order-2 pt-10">
              <div className="relative z-10">
                <div
                  className="w-full h-64 md:h-[400px] relative bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('/banners/Back Drop Graphics[2].png')",
                  }}
                >
                  <div className="absolute top-20 md:top-28 -left-2 md:left-6 bg-white rounded-lg px-3 md:px-4 w-28 md:w-32 py-1.5 shadow-lg">
                    <div className="flex items-center gap-1 md:gap-2">
                      <img
                        src="/icons/Top[1].png"
                        alt=""
                        className="w-5 h-5 md:w-6 md:h-6 rounded-md"
                      />
                      <div>
                        <div className="text-xs font-semibold text-gray-900">
                          Top CPA
                        </div>
                        <div className="text-xs -mt-1 text-gray-600">
                          Course
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-end h-full pt-16">
                    <div className="relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Slider */}
        <div className="flex flex-col md:flex-row mt-12 md:mt-0 md:h-20">
          <div className="w-full md:w-1/3 md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left mb-6 md:mb-0">
            <p className="text-sm md:text-md text-[#115ACE]">
              We Make the future
            </p>
            <h6 className="text-xl md:text-2xl font-bold">What we do best</h6>
          </div>

          {/* Slider Section */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-4 items-center justify-center md:justify-evenly">
            <Slider
              ref={(slider) => (sliderRef = slider)}
              {...sliderSettings}
              className="w-full md:w-[70%]"
            >
              {slides.map((slide, idx) => (
                <div key={idx}>
                  <p className="text-sm text-gray-600 px-4 md:px-0">
                    {slide.text}
                  </p>
                </div>
              ))}
            </Slider>

            {/* Custom Arrows */}
            <div className="flex items-center w-full md:w-[20%] gap-4 justify-center mt-4 md:mt-0">
              <img
                src="/icons/ARROW LEFT SIDE[1].png"
                alt="prev"
                className="h-5 w-5 cursor-pointer"
                onClick={() => sliderRef?.slickPrev()}
              />
              <img
                src="/icons/ARROW IRGHT SIDE[2].png"
                alt="next"
                className="h-5 w-5 cursor-pointer"
                onClick={() => sliderRef?.slickNext()}
              />
            </div>
          </div>
        </div>
        <Courses />
        <Team />
      </main>
        <Contact />
       
    </div>
  );
}

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
    <div className="min-h-screen bg-white sora">
      <Header />

      <main className="relative overflow-hidden px-4 md:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-10 md:py-16 lg:py-24">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 lg:pr-10">
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight">
                  Kerala's First{" "}
                </h1>
                <span className="text-[#3B77D6] font-bold text-3xl md:text-[40px] block">
                  Exclusive CPA Provider
                </span>
                <p className="text-sm md:text-base font-semibold text-gray-600 leading-6 max-w-lg">
                  Join Kerala's pioneering{" "}
                  <span className="text-[#115ACE] font-medium">
                    CPA training academy
                  </span>
                  . Get expert mentorship, global-standard resources, and the
                  right guidance to achieve your CPA dream.
                </p>
              </div>

              {/* CTA Button */}
              <button className="bg-[#115ACE] text-sm md:text-base text-white px-5 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_2px_15px_rgba(0,0,0,0.5)] hover:bg-[#0d4699]">
                <img
                  src="/icons/STACK[2].png"
                  alt=""
                  className="h-4 w-4 md:h-5 md:w-5"
                />
                Explore our Courses
              </button>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-6 md:pt-8">
                {[
                  "Flexible Learning",
                  "Structured Path",
                  "Strong Community",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <img
                      src="/icons/Tick[2].png"
                      alt=""
                      className="h-4 w-4 md:h-5 md:w-5"
                    />
                    <span className="text-gray-700 text-xs md:text-sm font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative mt-6  flex justify-center lg:justify-end w-full">
              {/* Image container */}
              <div className="h-64 md:h-[400px] flex md:justify-end justify-center  w-full relative">
                <img
                  src="/banners/Back Drop Graphics[2].png"
                  alt="Backdrop"
                  className="h-full w-auto object-fill flex justify-end "
                />

                {/* Floating Badge */}
                <div className="absolute top-16 md:top-28 left-0 md:left-16 bg-white rounded-lg px-3 md:px-4 w-28 md:w-32 py-1.5 shadow-lg">
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
                      <div className="text-xs -mt-1 text-gray-600">Course</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section with Slider */}
        <section className="flex flex-col md:flex-row items-center  md:items-start mt-12 md:mt-16 md:h-20 gap-6 md:gap-0">
          {/* Left Text */}
          <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left">
            <p className="text-sm md:text-base text-[#115ACE]">
              We Make the future
            </p>
            <h6 className="text-xl md:text-2xl font-bold">What we do best</h6>
          </div>

          {/* Slider Section */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row md:text-start text-center items-center gap-4 md:gap-6">
            <Slider
              ref={(slider) => (sliderRef = slider)}
              {...sliderSettings}
              className="w-full md:w-[80%]"
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="">
                  <p className="text-sm md:text-base text-gray-600">
                    {slide.text}
                  </p>
                </div>
              ))}
            </Slider>

            {/* Custom Arrows */}
            <div className="flex items-center gap-4 md:gap-6 md:w-[10%] justify-center md:justify-between">
              <img
                src="/icons/ARROW LEFT SIDE[1].png"
                alt="prev"
                className="h-5 w-5 md:h-6 md:w-6 cursor-pointer"
                onClick={() => sliderRef?.slickPrev()}
              />
              <img
                src="/icons/ARROW IRGHT SIDE[2].png"
                alt="next"
                className="h-5 w-5 md:h-6 md:w-6 cursor-pointer"
                onClick={() => sliderRef?.slickNext()}
              />
            </div>
          </div>
        </section>

        <Courses />
        <Team />
      </main>

      <Contact />
    </div>
  );
}

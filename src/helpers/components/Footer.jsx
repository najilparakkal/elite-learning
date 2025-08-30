import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-white pt-10 max-w-7xl mx-auto ">
      <div className="w-full mx-auto">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:mb-6 space-y-2.5  md:w-1/2 mb-14">
            <img
              src="/WhatsApp_Image_2025-08-23_at_15.34.15_9ac235af-removebg-preview.png"
              alt="Logo"
              className="w-[100px] h-auto"
            />
            <p className="text-xs md:text-sm text-gray-500 max-w-xs">
              Driven by passion, powered by knowledge – we're here to help you
              dream, learn, and achieve.
            </p>
          </div>

          {/* Links and contact */}
          <div className="flex flex-row gap-5 md:gap-16">
            {/* Terms */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-2 text-gray-100">Terms</h3>
              <div className="flex flex-col space-y-1">
                <a
                  href="#"
                  className="md:text-sm text-xs text-gray-500 hover:text-white transition"
                >
                  Terms/Conditions
                </a>
                <a
                  href="#"
                  className="md:text-sm text-xs text-gray-500 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Contact info */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-2 text-gray-100">Contact info</h3>
              <div className="flex flex-col space-y-1">
                <a
                  href="mailto:ealitlearning@gmail.com"
                  className="md:text-sm text-xs text-gray-500 hover:text-white transition"
                >
                  ealitlearning@gmail.com
                </a>
                <a
                  href="tel:+919088776655"
                  className="md:text-sm text-xs text-gray-500 hover:text-white transition"
                >
                  +919088776655
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider - visible on all screens */}
        <div className="w-full h-px bg-gray-600 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs  text-gray-700">© 2022 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { useState } from "react";
import { MdAddCall, MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const HelpWidget = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="fixed top-1/2 -right-1 -translate-y-1/2 z-40 flex flex-col items-end gap-3 transition-all duration-500">
      {/* Help Label */}
      <div className="bg-[#115ACE] text-white text-xs font-semibold px-4 py-2 rounded-r-lg rotate-180 [writing-mode:vertical-rl]">
        Need Help?
      </div>

      {/* WhatsApp */}
      <div className="flex items-center">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-l-lg shadow-md flex items-center gap-2 transition-all duration-500 hover:bg-blue-50 z-10"
          style={{ width: hoveredItem === 'whatsapp' ? "172px" : "40px" }}
          onMouseEnter={() => setHoveredItem('whatsapp')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <RiWhatsappFill className="text-[#115ACE] w-5 h-5 flex-shrink-0" />
          {hoveredItem === 'whatsapp' && (
            <span className="whitespace-nowrap text-gray-800 text-xs">
              Chat on WhatsApp
            </span>
          )}
        </a>
      </div>

      {/* Email */}
      <div className="flex items-center">
        <a
          href="mailto:info@example.com"
          className="bg-white p-2 rounded-l-lg shadow-md flex items-center gap-2 transition-all duration-500 hover:bg-blue-50 z-10"
          style={{ width: hoveredItem === 'email' ? "144px" : "40px" }}
          onMouseEnter={() => setHoveredItem('email')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <MdEmail className="text-[#115ACE] w-5 h-5 flex-shrink-0" />
          {hoveredItem === 'email' && (
            <span className="whitespace-nowrap text-gray-800 text-xs">
              Email Us
            </span>
          )}
        </a>
      </div>

      {/* Phone */}
      <div className="flex items-center">
        <a
          href="tel:+1234567890"
          className="bg-white p-2 rounded-l-lg shadow-md flex items-center gap-2 transition-all duration-500 hover:bg-blue-50 z-10"
          style={{ width: hoveredItem === 'phone' ? "144px" : "40px" }}
          onMouseEnter={() => setHoveredItem('phone')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <MdAddCall className="text-[#115ACE] w-5 h-5 flex-shrink-0" />
          {hoveredItem === 'phone' && (
            <span className="whitespace-nowrap text-gray-800 text-xs">
              Call Us
            </span>
          )}
        </a>
      </div>
    </div>
  );
};

export default HelpWidget;
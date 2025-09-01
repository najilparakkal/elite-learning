import { MdAddCall, MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const HelpWidget = () => {
  return (
    <div className="fixed top-1/2 -right-1 -translate-y-1/2 z-40 flex flex-col items-center gap-3">
      {/* Phone */}
      <div className="relative group">
        <a
          href="tel:+1234567890"
          className="bg-white p-2 rounded-l-lg shadow-md hover:scale-105 transition flex items-center justify-center"
        >
          <MdAddCall className="text-[#115ACE] w-5 h-5" />
        </a>
        {/* Tooltip */}
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
          Call Us
        </span>
      </div>

      {/* Email */}
      <div className="relative group">
        <a
          href="mailto:info@example.com"
          className="bg-white p-2 rounded-l-lg shadow-md hover:scale-105 transition flex items-center justify-center"
        >
          <MdEmail className="text-[#115ACE] w-5 h-5" />
        </a>
        {/* Tooltip */}
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
          Email Us
        </span>
      </div>

      {/* WhatsApp */}
      <div className="relative group">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-l-lg shadow-md hover:scale-105 transition flex items-center justify-center"
        >
          <RiWhatsappFill className="text-[#115ACE] w-5 h-5" />
        </a>
        {/* Tooltip */}
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
          Chat on WhatsApp
        </span>
      </div>

      {/* Help Label */}
      <div className="bg-[#115ACE] text-white text-xs font-semibold px-4 py-2 rounded-r-lg rotate-180 [writing-mode:vertical-rl]">
        Need Help?
      </div>
    </div>
  );
};

export default HelpWidget;

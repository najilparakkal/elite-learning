import { FaPhoneAlt } from "react-icons/fa";
import { MdAddCall, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";

const HelpWidget = () => {
  return (
    <div className="fixed top-1/2 -right-1 -translate-y-1/2 z-40 flex flex-col items-center gap-2">
      {/* Phone */}
      <a
        href="tel:+1234567890"
        className="bg-white p-2 rounded-l-lg shadow-md hover:scale-105 transition"
      >
        <MdAddCall  className="text-[#115ACE] w-5 h-5" />
      </a>

      {/* Email */}
      <a
        href="mailto:info@example.com"
        className="bg-white p-2 rounded-l-lg shadow-md hover:scale-105 transition"
      >
        <MdEmail className="text-[#115ACE] w-5 h-5" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-l-lg shadow-md hover:scale-105 transition"
      >
        <RiWhatsappFill   fill="#115ACE" className="text-[#115ACE] w-5 h-5" />
      </a>

      {/* Help Label */}
      <div className="bg-[#115ACE] text-white text-xs font-semibold px-4 py-2 rounded-r-lg rotate-180 [writing-mode:vertical-rl]">
        Need Help?
      </div>
    </div>
  );
};

export default HelpWidget;

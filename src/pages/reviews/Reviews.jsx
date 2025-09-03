import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import Contact from "../../helpers/components/Contact";
import Header from "../../helpers/components/Header";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const REVIEWS = [
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gray-50 sora">
      <Header />
      
      {/* Gradient header bar */}
      <motion.header 
        className="h-32 mt-28 w-full bg-gradient-to-r from-[#001333] to-[#0e4fb5] flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={headerVariants}
      >
        <motion.h1 
          className="text-3xl md:text-[40px] font-bold text-white text-balance"
          variants={headerVariants}
        >
          Reviews
        </motion.h1>
      </motion.header>

      {/* Grid of review cards */}
      <section className="max-w-7xl mx-auto md:px-16 px-4 py-10">
        <motion.div 
          className="py-10 md:py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            {REVIEWS.map((review, index) => (
              <motion.article 
                key={index}
                className="relative rounded-xl bg-white p-6 shadow-xl mt-7"
                variants={itemVariants}
              >
                {/* Overlapping avatar in the top-left with white ring */}
                <motion.div 
                  className="absolute -top-6 left-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <img
                    src={"/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png"}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full ring-1 ring-white shadow-xl"
                  />
                </motion.div>

                {/* Body */}
                <div className="mt-4">
                  <motion.p 
                    className="mt-4 text-sm leading-6 text-gray-800 font-semibold text-pretty"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {review.text}
                  </motion.p>

                  <div className="mt-6 flex items-center justify-between">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    >
                      <div className="font-bold text-gray-900">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-800 -mt-1">{review.role}</div>
                    </motion.div>

                    {/* Stars on the right, slightly lowered */}
                    <motion.div 
                      className="translate-y-1 flex"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    >
                      {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar className="text-[#e0b43f]" key={i} />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <Contact />
    </main>
  );
}
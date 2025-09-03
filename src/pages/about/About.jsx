import React from "react";
import { motion } from "framer-motion";
import Header from "../../helpers/components/Header";
import Contact from "../../helpers/components/Contact";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 sora">
      <Header />

      <motion.div 
        className="px-4 md:px-12 max-w-7xl mx-auto lg:px-16 py-10 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* First Section */}
        <div className="grid md:grid-cols-2 md:gap-12 gap-8 justify-center pt-20 items-center mb-16">
          <motion.div 
            className="md:hidden flex items-center justify-center h-full rounded-2xl"
            variants={imageVariants}
          >
            <img
              src="/team/New 2[1].png"
              alt="About Ealit Learning"
              className="object-fill h-full w-full rounded-2xl"
            />
          </motion.div>
          
          <motion.div className="md:py-10" variants={itemVariants}>
            <motion.h1 
              className="text-3xl md:text-[40px] font-bold text-gray-900 text-start"
              variants={itemVariants}
            >
              About Us
            </motion.h1>
            
            <motion.h2 
              className="text-[#3B77D6] font-bold text-2xl md:text-[30px] md:mb-12 mb-8 text-start"
              variants={itemVariants}
            >
              Kerala's First Exclusive CPA Training Academy
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 font-semibold text-sm leading-relaxed mb-3"
              variants={itemVariants}
            >
              At 5,111,147,117th-we proposed to be Kerala's elementary and early
              in a study of the coming societies. Our mission is working at
              practical and easy-to-use high-performance computers in an
              environment by different languages to address these challenges,
              and providing the best for you with its ultimate desired skills
              across.
            </motion.p>

            <motion.p 
              className="text-gray-600 font-semibold text-sm leading-relaxed"
              variants={itemVariants}
            >
              We strive for extensive leadership training within our own
              high-performance computer and we are also able to provide a safe
              and timely provide a good understanding of the world's needs and
              needs, conclusions, and making all our rights.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center justify-center h-full rounded-2xl"
            variants={imageVariants}
          >
            <img
              src="/team/New 2[1].png"
              alt="About Ealit Learning"
              className="object-fill h-full w-full rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Second Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 justify-center md:py-8 items-center mb-6 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            className="flex items-center justify-center h-full rounded-2xl"
            variants={imageVariants}
          >
            <img
              src="/banners/grow[1].png"
              alt="Our Mission"
              className="object-contain h-auto w-full max-w-md mx-auto md:max-w-full rounded-2xl"
            />
          </motion.div>

          <motion.div className="md:py-8 lg:py-10" variants={itemVariants}>
            <motion.h2 
              className="text-[#3B77D6] font-bold text-2xl md:text-[30px] sm:text-2xl md:text-3xl mb-6 md:mb-8 lg:mb-12 text-start"
              variants={itemVariants}
            >
              Our Mission
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed mb:mb-3"
              variants={itemVariants}
            >
              At Ealit Learning, our mission is to empower aspiring accountants
              and finance professionals by providing world-class CPA training
              with unmatched clarity, guidance, and mentorship. We are committed
              to bridging the gap between local talent and global opportunities
              — helping every learner build the skills, confidence, and
              knowledge required to succeed in the international accounting
              arena.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <Contact />
    </div>
  );
};

export default About;
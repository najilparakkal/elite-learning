import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../../helpers/components/Header";
import Contact from "../../helpers/components/Contact";

const About = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  
  const isFirstSectionInView = useInView(firstSectionRef, { once: true, margin: "-100px" });
  const isSecondSectionInView = useInView(secondSectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simple fade up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // Scale in animation for images
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50 sora">
      <Header />

      <div className="px-4 md:px-12 max-w-7xl mx-auto lg:px-16 py-10 md:py-16 lg:py-20">
        {/* First Section */}
        <div 
          ref={firstSectionRef}
          className="grid md:grid-cols-2 md:gap-12 gap-8 justify-center pt-20 items-center mb-16"
        >
          {/* Mobile Image */}
          <motion.div
            className="md:hidden flex items-center justify-center h-full rounded-2xl"
            initial="hidden"
            animate={isFirstSectionInView ? "visible" : "hidden"}
            variants={scaleIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/team/New 2[1].png"
              alt="About Ealit Learning"
              className="object-fill h-full w-full rounded-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="md:py-10"
            initial="hidden"
            animate={isFirstSectionInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl md:text-[40px] font-bold text-gray-900 text-start mb-4"
              variants={fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              About Us
            </motion.h1>

            <motion.h2
              className="text-[#3B77D6] font-bold text-2xl md:text-[30px] md:mb-8 mb-6 text-start"
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Kerala's First Exclusive CPA Provider
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4">
                At 5,111,147,117th-we proposed to be Kerala's elementary and early
                in a study of the coming societies. Our mission is working at
                practical and easy-to-use high-performance computers in an
                environment by different languages to address these challenges,
                and providing the best for you with its ultimate desired skills
                across.
              </p>

              <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                We strive for extensive leadership training within our own
                high-performance computer and we are also able to provide a safe
                and timely provide a good understanding of the world's needs and
                needs, conclusions, and making all our rights.
              </p>
            </motion.div>
          </motion.div>

          {/* Desktop Image */}
          <motion.div
            className="hidden md:flex items-center justify-center h-full rounded-2xl"
            initial="hidden"
            animate={isFirstSectionInView ? "visible" : "hidden"}
            variants={scaleIn}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/team/New 2[1].png"
              alt="About Ealit Learning"
              className="object-fill h-full w-full rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Second Section */}
        <div 
          ref={secondSectionRef}
          className="grid md:grid-cols-2 gap-8 md:gap-12 justify-center md:py-8 items-center mb-6 md:mb-16"
        >
          {/* Image */}
          <motion.div
            className="flex items-center justify-center h-full rounded-2xl"
            initial="hidden"
            animate={isSecondSectionInView ? "visible" : "hidden"}
            variants={scaleIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/banners/grow[1].png"
              alt="Our Mission"
              className="object-contain h-auto w-full max-w-md mx-auto md:max-w-full rounded-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="md:py-8 lg:py-10"
            initial="hidden"
            animate={isSecondSectionInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-[#3B77D6] font-bold text-2xl md:text-3xl mb-6 md:mb-8 text-start"
              variants={fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Our Mission
            </motion.h2>

            <motion.p
              className="text-gray-600 font-medium text-sm md:text-base leading-relaxed"
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
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
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default About;
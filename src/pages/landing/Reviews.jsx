"use client";

import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaInstagram, FaStar, FaWhatsapp } from "react-icons/fa6";
import { motion, useInView, useAnimation } from "framer-motion";

const Reviews = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const teamMembers = [
    {
      name: "Issac Antony",
      image: "/feedback/20250206_110345 - basith kt.jpg",
      role: "CPA Student",
      text: "I am truly grateful to Shone sir, who has been more than just a teacher to me. His excellent teaching style, clear explanation of concepts, and ability to clarify doubts with patience made learning easier and more effective. The presentation and his clear communication helped me understand and remember topics better. He always encouraged us to ask questions freely, creating a comfortable and supportive classroom environment. His punctuality, discipline, and commitment to covering topics on time showed his dedication to our growth. Beyond academics, he has given me valuable insights, constant motivation, and unwavering support that shaped my career. More than a teacher, he has been a true mentor, guide, and friend whose inspiration will always remain with me.",
      rating: 5,
    },
    {
      name: "NAVEEN",
      role: "CPA Student",
      image: "/feedback/20250206_110345 - basith kt.jpg",
      text: "I was a student of Basith sir. But honestly, I can't even call him just a teacher — he's more like my own brother. He's not only a tutor for me, he's a guide, a friend, and someone with such a good heart.Basith ikka has always been there for me in my ups and downs, supporting me in my struggles, and most importantly, making me believe in myself when I thought I couldn't do it. His way of teaching is something very different from others — because he doesn't just teach from books, he teaches from his heart, with passion and with so much love. That's what makes me connect with him and his lessons on a deeper level",
      rating: 5,
    },
    {
      name: "Mohammed Asif",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "CPA Student",
      text: "Shone sir is an exceptional faculty in finance and accounting. He has a unique ability to simplify even the most complex topics, ensuring that every student grasps the material with ease. What truly sets him apart is his unwavering patience; he is always willing to address doubts, no matter how many times they arise. This combination of deep expertise, crystal-clear explanations, and a genuine passion for teaching makes his classes highly effective and engaging. I highly recommend him to any student seeking to master these subjects.",
      rating: 5,
    },
    {
      name: "Rena Elizabeth Shoji",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "CPA Student",
      text: "Basith Sir is an excellent mentor who makes every session interactive and engaging. His clear explanations ensure we grasp concepts with ease, and he patiently addresses individual doubts. The additional presentations he conducts not only enrich our learning but also boost our confidence in presenting. Overall, his teaching style makes the classes both effective and enjoyable.",
      rating: 5,
    },
    {
      name: "Abhirami S R",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "CPA Student",
      text: "Each and every topics were clearly taught. As a person who requires an additional explanation, Shone sir explained them multiple times with utmost patience and clarity.",
      rating: 5,
    },
    {
      name: "Maneesha Mohan ",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "CPA Student",
      text: "As a former student of Basith Sir, I was extremely satisfied with his classes. His teaching style was simple, clear, and easy to follow, which helped me learn better. I am now a qualified CMA and currently working in UAE as an Accountant. During my studies, Basith Sir provided great support by clearing my doubts and guiding me.I really recommend his classes. Thanks and regards Sir",
      rating: 5,
    },
    {
      name: "Meera A V",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "CPA Student",
      text: "Shone sir's teaching style was extraordinary. He made us think and understand topics logically rather than pushing topics to finish syllabus. He also made sure that each and everyone has got the complete understanding behind every topics discussed. Upon misunderstandings of topics, he clarified them several times with exceptional patience and clearness.",
      rating: 5,
    },
    {
      name: "Anaha S",
      role: "CPA Student",
      image: "/feedback/20250206_110345 - basith kt.jpg",
      text: "I am Anaha currently working as an Accounts payable analyst at Dxc Technology. Basith sir's teaching style is structured, concept-driven, and closely linked to real-world applications, which makes complex topics easier to understand and apply. He explains concepts clearly with practical examples, and his interactive, well-paced sessions makes learning easy and relatable.Overall, his approach strikes a great balance between academic depth and practical relevance, helping me gain both clarity and confidence",
      rating: 5,
    },
    {
      name: "PRANAV ",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "ACCOUNTANT",
      text: "Shone sir has been the most confident teacher in my experience. Confidence comes from experience and in depth knowledge about the subject. There had not been any doubt from his side about any of the minute aspect regarding topics he was handling. He had been instrumental in leading me understanding complex topics with proper plan and ease.",
      rating: 5,
    },
    {
      name: "Muhammed shamil",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "CPA Student",
      text: "Basith sir's teaching style is engaging, clear, and structured, making even complex topics easy to understand. He played a major role in shaping my understanding and ultimately helped me become a professional. I really appreciate the way he emphasises understanding concepts rather than rote learning, and his guidance has greatly boosted my confidence and interest in these subjects.",
      rating: 5,
    },
    {
      name: "Stephin Jery",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "Accountant ",
      text: "If someone asks me how I was able to overcome challenges in my professional career that many others struggle with, my answer is simple – I had Mr. Shone Varghese as my mentor. He is not just a mentor but also a true friend. His exceptional memory power and the way he simplifies even the hardest portions that most people find difficult to understand truly set him apart. His unique teaching style as a faculty and his friendly way of guiding us make him truly exceptional. I sincerely wish him continued success and happiness in all his future endeavors.",
      rating: 5,
    },
    {
      name: "SHAB ",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "CPA Student",
      text: "I am extremely grateful to have had the opportunity to learn under Basith Sir's guidance. He is not just an exceptional faculty member but also a true mentor and a brotherly figure. His teaching style makes complex concepts simple and easy to understand. He has a unique way of connecting real-world examples with theoretical concepts, which has greatly enhanced my learning experience.Thank you so much, Sir, for your unwavering support, encouragement, and for always believing in your students.",
      rating: 5,
    },
    {
      name: "Gautham ",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "CPA Student",
      text: "Shone sir's classes focused deeply on the concepts, which helped to build a foundation for every field of accounting. Every doubt and question was welcomed, discussed, and resolved throughout the learning process.",
      rating: 5,
    },
    {
      name: "Amaldev ",
      image: "/feedback/20250206_110345 - basith kt.jpg",

      role: "CPA Student",
      text: "Shone sir's classes are classes always well structured and easy to follow which makes complex concepts clear and understandable. His use of practical examples keeps the lessons engaging",
      rating: 5,
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSlidesToShow(2);
      } else if (width <= 640) {
        setSlidesToShow(2);
      } else if (width <= 768) {
        setSlidesToShow(3);
      } else if (width <= 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlides(); // run on mount
    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  // Animation control
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
    const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


  return (
    <section id="reviews" className="py-12" ref={ref}>
      <div className="w-full mx-auto">
         <motion.div className="text-center mb-8 md:mb-12" variants={fadeInUp}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                   Feedback about our Faculties

                  </h2>
                  <p className="text-sm sm:text-base text-gray-800 max-w-2xl mx-auto px-2">
                    Hear from our students about their experiences with our expert faculty.
                  </p>
                </motion.div>
        {/* Team Members Slider */}
        <motion.div
          className="relative mb-8"
          variants={fadeInVariants}
          initial="hidden"
          animate={controls}
        >
          <Slider ref={setSliderRef} {...sliderSettings} className="md:py-10">
            {teamMembers.map((review, index) => (
              <motion.article
                key={index}
                className="relative rounded-xl bg-white p-6 gap-2 mt-7 h-60 py-4 custom-scrollbar overflow-y-auto mx-3"
                variants={itemVariants}
                initial="hidden"
                animate={controls}
              >
                {/* Overlapping avatar in the top-left with white ring */}
                <div className="flex justify-start gap-3 w-full">
                  <motion.div
                    variants={itemVariants}
                  >
                    <img
                      src={review.image}
                      alt={review.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full ring-1 ring-white shadow-xl"
                    />
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                  >
                    <div className="font-bold md:text-base text-sm text-gray-900">
                      {review.name}
                    </div>
                    <div className="text-xs text-gray-800 -mt-1">
                      {review.role}
                    </div>
                    <motion.div
                      className="translate-y-1 flex"
                      variants={itemVariants}
                    >
                      {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar className="text-[#e0b43f]" key={i} />
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Body */}
                <div className="mt-4">
                  <motion.p
                    className="mt-4 md:text-sm text-xs md:leading-6 leading-5 text-gray-800 font-semibold text-pretty"
                    variants={itemVariants}
                  >
                    {review.text}
                  </motion.p>
                </div>
              </motion.article>
            ))}
          </Slider>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          className="flex justify-center items-center space-x-4"
          variants={fadeInVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.button
            onClick={() => sliderRef?.slickPrev()}
            className="p-2 rounded-full transition-colors duration-200"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/icons/ARROW LEFT SIDE[1].png"
              alt="Previous"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </motion.button>

          <motion.button
            onClick={() => sliderRef?.slickNext()}
            className="p-2 rounded-full transition-colors duration-200"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/icons/ARROW IRGHT SIDE[2].png"
              alt="Next"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
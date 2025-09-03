import { useEffect } from "react";
import { BiX } from "react-icons/bi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  enquiryInitialValues,
  enquiryValidationSchema,
} from "../../helpers/validations/.validations";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 300,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 }
  }
};

const formItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const EnquiryModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent background scroll
    } else {
      document.body.style.overflow = "auto"; // reset scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [isOpen]);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed p-2 inset-0 bg-[#011434]/60 flex items-center justify-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg p-3 w-full max-w-lg mx-4 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute -top-3 -right-3 bg-black rounded-full p-1 shadow-md text-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoClose size={16} />
            </motion.button>

            <div className="rounded-xl border border-[#115ace]/20 p-6">
              {/* Header */}
              <motion.h2 
                className="text-lg font-semibold text-center text-gray-900 mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Leave us a message
              </motion.h2>

              {/* Formik Form */}
              <Formik
                initialValues={enquiryInitialValues}
                validationSchema={enquiryValidationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <Form className="space-y-4">
                      {/* Name */}
                      <motion.div variants={formItemVariants}>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          className="w-full px-4.5 py-3 text-sm text-gray-500 rounded-sm ring-[0.5px] ring-[#115ace]/40 focus:ring-2 focus:ring-[#115ace]/60 focus:outline-none transition-all"
                        />
                        <ErrorMessage
                          name="name"
                          component="p"
                          className="text-red-500 text-xs mt-1"
                        />
                      </motion.div>

                      {/* Email */}
                      <motion.div variants={formItemVariants}>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="w-full px-4.5 py-3 text-sm text-gray-500 rounded-sm ring-[0.5px] ring-[#115ace]/40 focus:ring-2 focus:ring-[#115ace]/60 focus:outline-none transition-all"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="text-red-500 text-xs mt-1"
                        />
                      </motion.div>

                      {/* Phone */}
                      <motion.div variants={formItemVariants}>
                        <Field
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone number"
                          className="w-full px-4.5 py-3 text-sm text-gray-500 rounded-sm ring-[0.5px] ring-[#115ace]/40 focus:ring-2 focus:ring-[#115ace]/60 focus:outline-none transition-all"
                        />
                        <ErrorMessage
                          name="phone"
                          component="p"
                          className="text-red-500 text-xs mt-1"
                        />
                      </motion.div>

                      {/* Message */}
                      <motion.div variants={formItemVariants}>
                        <Field
                          as="textarea"
                          name="message"
                          placeholder="Enter your message"
                          rows="4"
                          className="w-full px-4.5 py-3 text-sm text-gray-500 rounded-sm ring-[0.5px] ring-[#115ace]/40 focus:ring-2 focus:ring-[#115ace]/60 focus:outline-none transition-all"
                        />
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div variants={formItemVariants}>
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-2 bg-[#115ACE] text-white rounded-sm shadow-xl hover:bg-blue-700 transition"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </motion.button>
                      </motion.div>
                    </Form>
                  </motion.div>
                )}
              </Formik>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
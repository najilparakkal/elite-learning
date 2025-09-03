import React, { useState, useRef } from "react";
import { Formik, Form } from "formik";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import { Email } from "@mui/icons-material";
import PhoneInput from "react-phone-input-2";
import { TfiEmail } from "react-icons/tfi";
import { motion, useInView, useAnimation } from "framer-motion";

import "react-phone-input-2/lib/style.css";
import {
  contactInitialValues,
  contactValidationSchema,
} from "../validations/.validations";
import Footer from "./Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  
  // Refs for animation triggers
  const ref = useRef(null);
  const formRef = useRef(null);
  const newsletterRef = useRef(null);
  
  // Check if elements are in view
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });
  const isNewsletterInView = useInView(newsletterRef, { once: true, amount: 0.3 });
  
  // Animation controls
  const controls = useAnimation();
  const formControls = useAnimation();
  const newsletterControls = useAnimation();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setSubmitted(true);
    console.log("Form submitted with values:", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      message: values.message,
      submittedAt: new Date().toISOString(),
    });

    // Simulate API call
    setTimeout(() => {
      alert("Form submitted successfully! Check console for details.");
      resetForm();
      setSubmitting(false);
      setSubmitted(false);
    }, 1000);
  };

  const shouldShowError = (fieldName, touched, errors) => {
    return submitted || touched[fieldName] ? errors[fieldName] : "";
  };

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

  const slideUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const scaleUpVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Animation control
  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    if (isFormInView) {
      formControls.start("visible");
    }
    if (isNewsletterInView) {
      newsletterControls.start("visible");
    }
  }, [isInView, isFormInView, isNewsletterInView, controls, formControls, newsletterControls]);

  return (
    <div className="h-auto lg:px-16 px-4 pb-8 md:pb-10 pt-12 md:pt-20 w-full rounded-t-2xl bg-gradient-to-b from-[#0e4fb5] to-[#000c20]">
      <div ref={ref} className="flex w-full flex-col md:flex-row max-w-7xl mx-auto">
        <motion.div 
          className="w-full md:w-1/2 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20"
          variants={scaleUpVariants}
          initial="hidden"
          animate={controls}
        >
          <img
            src="/banners/Asset 4[2].png"
            alt="Contact illustration"
            className="h-auto w-full object-center max-w-md mx-auto md:max-w-full"
          />
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2 flex flex-col space-y-3 md:space-y-4 justify-center items-center md:items-start mt-6 md:mt-0 px-2 sm:px-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h6 
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center md:text-left"
            variants={slideUpVariants}
          >
            Just on Build Your Dream.
          </motion.h6>
          <motion.p 
            className="text-xs sm:text-sm text-gray-300 w-full md:w-[80%] lg:w-[65%] text-center md:text-left"
            variants={fadeInVariants}
          >
            Every big achievement starts with a dream. At Just Onn, we empower
            you with the right guidance, skills, and support to turn your vision
            into reality.
          </motion.p>
          <motion.button 
            className="text-xs sm:text-sm w-fit text-white px-7 py-2 sm:px-4 sm:py-2 rounded-md bg-[#001333]"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Us
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        id="contact"
        ref={formRef}
        className="w-full rounded-2xl px-2 sm:px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-[#f6f6f6] h-full flex flex-col md:flex-row mt-10 md:mt-16"
        variants={fadeInVariants}
        initial="hidden"
        animate={formControls}
      >
        <motion.div 
          className="w-full md:w-1/2 p-2 sm:p-4 md:py-6 lg:py-8 xl:pt-10 xl:pb-5 flex flex-col justify-evenly"
          variants={containerVariants}
          initial="hidden"
          animate={formControls}
        >
          <div className="flex flex-col justify-between space-y-4 md:space-y-6 p-2 sm:p-4 h-full rounded-lg">
            {/* First Block */}
            <motion.div 
              className="flex flex-col gap-3 md:gap-5 pt-6 md:pt-10 lg:pt-14 rounded"
              variants={slideUpVariants}
            >
              <h6 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                Contact Us
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 md:w-[90%] lg:w-[80%] w-full">
                Email, call, or complete the form to learn how we can solve your
                messaging problem.
              </p>
            </motion.div>

            {/* Second Block */}
            <motion.div 
              className="flex flex-col p-2 sm:p-4 rounded"
              variants={fadeInVariants}
            >
              <a
                className="text-xs sm:text-sm text-gray-600 underline mb-1"
                href="mailto:ealitlearning@gmail.com"
              >
                ealitlearning@gmail.com
              </a>
              <p className="text-xs sm:text-sm text-gray-600">+91 9088776655</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 py-6 md:py-8 lg:py-10"
          variants={scaleUpVariants}
          initial="hidden"
          animate={formControls}
        >
          <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:px-12 xl:pt-10 xl:pb-5 bg-white rounded-lg shadow-md">
            <Formik
              initialValues={contactInitialValues}
              validationSchema={contactValidationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                setFieldTouched,
                isSubmitting,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                  {/* First Name and Last Name Row */}
                  <motion.div 
                    className="flex flex-col mb-4 md:mb-5 md:flex-row md:space-x-2"
                    variants={itemVariants}
                    initial="hidden"
                    animate={formControls}
                  >
                    <div className="w-full md:w-1/2 mb-2 md:mb-0">
                      <TextField
                        fullWidth
                        size="small"
                        name="firstName"
                        placeholder="First name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          submitted || touched.firstName
                            ? Boolean(errors.firstName)
                            : false
                        }
                        helperText={shouldShowError(
                          "firstName",
                          touched,
                          errors
                        )}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "6px",
                            backgroundColor: "white",
                            "& fieldset": {
                              borderColor: "#115ace",
                            },
                            "&:hover fieldset": {
                              borderColor: "#115ace",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#115ace",
                            },
                          },
                          "& .MuiInputBase-input": {
                            fontSize: { xs: "0.75rem", sm: "0.80rem" },
                            padding: { xs: "10px 12px", sm: "12px 13px" },
                          },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.65rem",
                          },
                        }}
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <TextField
                        fullWidth
                        size="small"
                        name="lastName"
                        placeholder="Last name"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          submitted || touched.lastName
                            ? Boolean(errors.lastName)
                            : false
                        }
                        helperText={shouldShowError(
                          "lastName",
                          touched,
                          errors
                        )}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "6px",
                            backgroundColor: "white",
                            "& fieldset": {
                              borderColor: "#115ace",
                            },
                            "&:hover fieldset": {
                              borderColor: "#115ace",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#115ace",
                            },
                            "& .MuiInputBase-input": {
                              fontSize: { xs: "0.75rem", sm: "0.80rem" },
                              padding: { xs: "10px 12px", sm: "12px 13px" },
                            },
                            "& .MuiFormHelperText-root": {
                              fontSize: "0.65rem",
                            },
                          },
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={formControls}
                  >
                    <TextField
                      fullWidth
                      size="small"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        submitted || touched.email ? Boolean(errors.email) : false
                      }
                      helperText={shouldShowError("email", touched, errors)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <TfiEmail
                              sx={{
                                fontSize: { xs: "18px", sm: "20px" },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        marginBottom: "1rem",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "6px",
                          backgroundColor: "white",
                          "& fieldset": {
                            borderColor: "#115ace",
                          },
                          "&:hover fieldset": {
                            borderColor: "#115ace",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#115ace",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: { xs: "0.75rem", sm: "0.80rem" },
                            padding: { xs: "10px 12px", sm: "12px 13px" },
                          },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.65rem",
                          },
                        },
                      }}
                    />
                  </motion.div>

                  {/* Phone Number Field */}
                  <motion.div 
                    className="mb-4 md:mb-6"
                    variants={itemVariants}
                    initial="hidden"
                    animate={formControls}
                  >
                    <PhoneInput
                      country={"in"}
                      value={values.phoneNumber}
                      onChange={(phone) => {
                        setFieldValue("phoneNumber", phone);
                      }}
                      onBlur={() => setFieldTouched("phoneNumber", true)}
                      inputStyle={{
                        width: "100%",
                        borderRadius: "6px",
                        borderColor: "#115ace",
                        fontSize: "14px",
                        height: { xs: "36px", sm: "40px" },
                      }}
                      buttonStyle={{
                        borderRadius: "6px 0 0 6px",
                        backgroundColor: "white",
                        border: "1px solid #115ACE",
                        borderRight: "none",
                        height: { xs: "36px", sm: "40px" },
                      }}
                      dropdownStyle={{
                        borderRadius: "6px",
                        maxHeight: "200px",
                      }}
                    />
                    {(submitted || touched.phoneNumber) &&
                      errors.phoneNumber && (
                        <Typography
                          variant="caption"
                          color="error"
                          sx={{
                            display: "block",
                            mt: 0.5,
                            ml: 1.5,
                            fontSize: "0.65rem",
                          }}
                        >
                          {errors.phoneNumber}
                        </Typography>
                      )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={formControls}
                  >
                    <TextField
                      fullWidth
                      size="small"
                      multiline
                      rows={3}
                      name="message"
                      placeholder="How can we help?"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        submitted || touched.message
                          ? Boolean(errors.message)
                          : false
                      }
                      helperText={shouldShowError("message", touched, errors)}
                      sx={{
                        marginBottom: "1rem",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "6px",
                          backgroundColor: "white",
                          "& fieldset": {
                            borderColor: "#115ace",
                          },
                          "&:hover fieldset": {
                            borderColor: "#115ace",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#115ace",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: { xs: "0.75rem", sm: "0.80rem" },
                            padding: { xs: "8px 12px", sm: "8px 13px" },
                          },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.65rem",
                          },
                        },
                      }}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={formControls}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{
                        backgroundColor: "#115ACE",
                        color: "white",
                        padding: { xs: "6px 0", sm: "8px 0" },
                        borderRadius: "6px",
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#0d4bb3",
                        },
                        "&:disabled": {
                          backgroundColor: "#9ca3af",
                        },
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </motion.div>
                </Form>
              )}
            </Formik>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        ref={newsletterRef}
        className="w-full flex justify-center items-center py-6 sm:py-8 md:py-10"
        variants={fadeInVariants}
        initial="hidden"
        animate={newsletterControls}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center py-6 rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: "url('/banners/Rectangle 39.png')" }}
          variants={containerVariants}
          initial="hidden"
          animate={newsletterControls}
        >
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2"
            variants={slideUpVariants}
          >
            Never Miss an Update
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-[10px] sm:text-sm mb-4 sm:mb-6 w-full md:w-[80%] lg:w-[70%]"
            variants={fadeInVariants}
          >
            Join our community and get the latest updates, learning tips, and
            exclusive resources delivered straight to your inbox.
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full sm:w-[90%] md:w-[80%] lg:w-[75%]"
            variants={itemVariants}
          >
            <input
              type="email"
              required
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 placeholder:text-xs sm:placeholder:text-sm rounded-md border border-gray-600 bg-transparent text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              type="submit"
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-xs sm:text-sm text-white font-medium rounded-md hover:bg-blue-700 transition whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
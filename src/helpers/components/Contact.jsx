import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import { Email } from "@mui/icons-material";
import PhoneInput from "react-phone-input-2";
import { TfiEmail } from "react-icons/tfi";

import "react-phone-input-2/lib/style.css";
import {
  contactInitialValues,
  contactValidationSchema,
} from "../validations/.validations";
import Footer from "./Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

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

  return (
    <div className="h-auto  lg:px-16 px-4 pb-8 md:pb-10 pt-12 md:pt-20 w-full rounded-t-2xl bg-gradient-to-b from-[#0e4fb5] to-[#000c20]">
      <div className="flex w-full flex-col md:flex-row">
        <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
          <img
            src="/banners/Asset 4[2].png"
            alt="Contact illustration"
            className="h-auto w-full object-center max-w-md mx-auto md:max-w-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-3 md:space-y-4 justify-center items-center md:items-start mt-6 md:mt-0 px-2 sm:px-4">
          <h6 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center md:text-left">
            Just on Build Your Dream.
          </h6>
          <p className="text-xs sm:text-sm text-gray-300 w-full md:w-[80%] lg:w-[65%] text-center md:text-left">
            Every big achievement starts with a dream. At Just Onn, we empower
            you with the right guidance, skills, and support to turn your vision
            into reality.
          </p>
          <button className="text-xs sm:text-sm w-fit text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-[#001333]">
            About Us
          </button>
        </div>
      </div>

      <div
        id="contact"
        className="w-full rounded-2xl px-2 sm:px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-[#f6f6f6] h-full flex flex-col md:flex-row mt-10 md:mt-16"
      >
        <div className="w-full md:w-1/2 p-2 sm:p-4 md:py-6 lg:py-8 xl:pt-10 xl:pb-5 flex flex-col justify-evenly">
          <div className="flex flex-col justify-between space-y-4 md:space-y-6 p-2 sm:p-4 h-full rounded-lg">
            {/* First Block */}
            <div className="flex flex-col gap-3 md:gap-5 pt-6 md:pt-10 lg:pt-14 rounded">
              <h6 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                Contact Us
              </h6>
              <p className="text-xs sm:text-sm text-gray-600 md:w-[90%] lg:w-[80%] w-full">
                Email, call, or complete the form to learn how we can solve your
                messaging problem.
              </p>
            </div>

            {/* Second Block */}
            <div className="flex flex-col p-2 sm:p-4 rounded">
              <a
                className="text-xs sm:text-sm text-gray-600 underline mb-1"
                href="mailto:ealitlearning@gmail.com"
              >
                ealitlearning@gmail.com
              </a>
              <p className="text-xs sm:text-sm text-gray-600">+91 9088776655</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 py-6 md:py-8 lg:py-10  ">
          <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:px-12 xl:pt-10 xl:pb-5  bg-white rounded-lg shadow-md">
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
                  <div className="flex flex-col mb-4 md:mb-5 md:flex-row md:space-x-2">
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
                  </div>

                  {/* Email Field */}
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
                              //   color: "#115ACE",
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

                  {/* Phone Number Field */}
                  <div className="mb-4 md:mb-6">
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
                  </div>

                  {/* Message Field */}
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

                  {/* Submit Button */}
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
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-6 sm:py-8 md:py-10 ">
        <div
          className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center py-6 rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: "url('/banners/Rectangle 39.png')" }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
            Never Miss an Update
          </h2>
          <p className="text-gray-400 text-[10px] sm:text-sm mb-4 sm:mb-6 w-full md:w-[80%] lg:w-[70%]">
            Join our community and get the latest updates, learning tips, and
            exclusive resources delivered straight to your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full sm:w-[90%] md:w-[80%] lg:w-[75%]"
          >
            <input
              type="email"
              required
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 placeholder:text-xs sm:placeholder:text-sm rounded-md border border-gray-600 bg-transparent text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-xs sm:text-sm text-white font-medium rounded-md hover:bg-blue-700 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

import { useEffect } from "react";
import { BiX } from "react-icons/bi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  enquiryInitialValues,
  enquiryValidationSchema,
} from "../../helpers/validations/.validations";
import { IoClose } from "react-icons/io5";

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

  if (!isOpen) return null;

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm();
    onClose();
  };

  return (
    <div className="fixed p-2 inset-0 bg-[#011434]/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-3 w-full max-w-lg mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-black rounded-full p-1 shadow-md text-gray-100"
        >
          <IoClose size={16} />
        </button>

        <div className="rounded-xl border border-[#115ace]/20 p-6">
          {/* Header */}
          <h2 className="text-lg font-semibold text-center text-gray-900 mb-6">
            Leave us a message
          </h2>

          {/* Formik Form */}
          <Formik
            initialValues={enquiryInitialValues}
            validationSchema={enquiryValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Name */}
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4.5 py-3 text-sm text-gray-500 rounded-sm ring-[0.5px] ring-[#115ace]/40"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4.5 py-3 text-sm text-gray-500 rounded-sm ring-[0.5px] ring-[#115ace]/40"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4.5 py-3 text-sm text-gray-500 rounded-sm ring-[0.5px] ring-[#115ace]/40"
                  />
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Message */}
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full px-4.5 py-3 text-sm text-gray-500 rounded-sm ring-[0.5px] ring-[#115ace]/40"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 bg-[#115ACE] text-white rounded-sm shadow-xl hover:bg-blue-700 transition"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;

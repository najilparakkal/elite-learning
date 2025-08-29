import * as Yup from "yup";


export const contactValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});



export const enquiryValidationSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  message: Yup.string().max(300, "Message must be less than 300 characters"),
});


export  const enquiryInitialValues = { name: "", email: "", phone: "", message: "" };


export const contactInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };
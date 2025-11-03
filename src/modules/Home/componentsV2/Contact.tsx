/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { api } from "@/lib/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle, X } from "lucide-react";
import CustomButton from "@/common/CustomButton/CustomButton";
import ShowError from "@/common/showError/showError";
import ShowSuccess from "@/common/showSuccess/showSuccess";

// Validation Schema
const contactValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

// Initial form values
const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  source_company_email: "harshilbhatia.mgb@gmail.com",
  source_company_name: "Harshil Bhatia",
  type: "Contact Request",

};

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (values: typeof initialValues, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
    try {
      const response = await api.post("/leads/upsert-general-lead", values);

      if (response.status === 200) {
        setShowSuccess(true);
        resetForm();
        setSubmitting(false);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setShowError(true);
    }
  };


  return (
    <div id="contact" className="py-12 md:py-16 lg:py-20">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl md:text-6xl font-medium uppercase mb-6 text-center">
          CONTACT ME
        </h2>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
        <div>
          <h3 className="font-bold text-sm md:text-base mb-2 uppercase tracking-wide">ADDRESS:</h3>
          <p className="text-gray-600 text-sm md:text-base">Alwar, Rajasthan, India
          </p>
        </div>
        <div>
          <h3 className="font-bold text-sm md:text-base mb-2 uppercase tracking-wide">PHONE:</h3>
          <Link href="tel:+91 9672974422" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm md:text-base">+91 9672974422</Link>
        </div>
        <div>
          <h3 className="font-bold text-sm md:text-base mb-2 uppercase tracking-wide">EMAIL:</h3>
          <Link href="mailto:harshilbhatia.mgb@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm md:text-base">harshilbhatia.mgb@gmail.com</Link>
        </div>
      </div>

      {/* Contact Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={contactValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-8">
            {/* Name, Email, Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Name Field */}
              <div className="relative">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`w-full px-0 py-3 border-0 border-b-2 ${errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                    } bg-transparent focus:outline-none focus:border-black transition-colors text-sm md:text-base placeholder:text-gray-500`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs mt-1 absolute"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full px-0 py-3 border-0 border-b-2 ${errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                    } bg-transparent focus:outline-none focus:border-black transition-colors text-sm md:text-base placeholder:text-gray-500`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1 absolute"
                />
              </div>

              {/* Subject Field */}
              <div className="relative">
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={`w-full px-0 py-3 border-0 border-b-2 ${errors.subject && touched.subject
                    ? "border-red-500"
                    : "border-gray-300"
                    } bg-transparent focus:outline-none focus:border-black transition-colors text-sm md:text-base placeholder:text-gray-500`}
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-xs mt-1 absolute"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                rows={6}
                className={`w-full px-0 py-3 border-0 border-b-2 ${errors.message && touched.message
                  ? "border-red-500"
                  : "border-gray-300"
                  } bg-transparent focus:outline-none focus:border-black transition-colors resize-none text-sm md:text-base placeholder:text-gray-500`}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-xs mt-1 absolute"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-16 py-4 text-sm md:text-base font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SUBMIT"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ShowSuccess isOpen={showSuccess} handleClose={() => setShowSuccess(false)} />
      <ShowError isOpen={showError} handleClose={() => setShowError(false)} />
    </div>
  );
};

export default Contact;
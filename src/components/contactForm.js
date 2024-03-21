"use client";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiX } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";
const ContactForm = ({ setOpenContact, toast }) => {
  const formik = useFormik({
    initialValues: { user_name: "", user_email: "", message: "" },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(20, "Name is toooo long")
        .required("Name is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: async (values) => {
      setIsSending(true);

      await new Promise((resolve) => setTimeout(resolve, 2500));
      setOpenContact(false);
      setIsSending(false);

      toast("Thank you for your email ✅");
      // emailjs
      //   .sendForm("service_g4zwduw", "template_vj8soi8", form.current, {
      //     publicKey: "tFfAuDGkirv__GBZP",
      //   })
      //   .then(
      //     () => {
      //       console.log("SUCCESS!");
      //       form.current.user_name.value = "";
      //       form.current.user_email.value = "";
      //       form.current.message.value = "";
      //       setOpenContact(false);
      //     },
      //     (error) => {
      //       console.log("FAILED...", error.text);
      //     },
      //   );
    },
  });

  const form = useRef();
  let [isSending, setIsSending] = useState(false);
  return (
    <>
      <motion.form
        ref={form}
        onSubmit={formik.handleSubmit}
        initial={{ y: 800 }}
        animate={{ y: 0 }}
        exit={{ y: 800 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="fixed bottom-0 right-0 z-50 flex h-[80vh] w-full  flex-col gap-4 rounded-t-2xl bg-white p-2 text-xl text-secondary md:bottom-4 md:right-4 md:h-[580px] md:max-w-[417px] md:rounded-2xl"
      >
        <button
          onClick={() => setOpenContact(false)}
          className="rounded-ful absolute right-4 top-4 grid h-6 w-6 place-items-center   "
        >
          <FiX className=" " />
        </button>

        {/* To */}

        <Clipboard />

        {/* Name */}
        <div className="relative">
          <input
            className="peer w-full border-b  border-surface p-5 placeholder-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]  focus:outline-none"
            placeholder="Name"
            name="user_name"
            id="user_name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          <label
            className={`absolute -top-1 left-5 text-xs transition-all ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:-top-1 peer-focus:text-xs ${formik.errors.user_name && formik.touched.user_name ? "text-warning" : ""}`}
            htmlFor="user_name"
          >
            {formik.errors.user_name && formik.touched.user_name
              ? formik.errors.user_name
              : "Name"}
          </label>
        </div>

        {/* Email */}

        <div className="relative">
          <input
            className="peer w-full border-b  border-surface p-5 placeholder-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]  focus:outline-none"
            placeholder="Email"
            name="user_email"
            id="user_email"
            autoComplete="true"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <label
            className={`absolute  -top-1 left-5 origin-center text-xs transition-all  ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:-top-1 peer-focus:text-xs ${formik.errors.user_email && formik.touched.user_email ? "text-warning" : ""}`}
            htmlFor="user_email"
          >
            {formik.errors.user_email && formik.touched.user_email
              ? formik.errors.user_email
              : "Email"}
          </label>
        </div>

        {/* TextArea */}

        <div className="relative flex-1">
          <textarea
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.message}
            type="text"
            id="message"
            minLength="1"
            className="peer h-full  w-full resize-none border-b border-surface p-5 placeholder-transparent    focus:outline-none"
            placeholder="Your Message"
            name="message"
          />
          <label
            className={`absolute  -top-1 left-5 origin-center text-xs transition-all  ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:-top-1 peer-focus:text-xs ${formik.errors.message && formik.touched.message ? "text-warning" : ""}`}
            htmlFor="message"
          >
            {formik.errors.message && formik.touched.message
              ? formik.errors.message
              : "Your Message"}
          </label>
        </div>

        <button
          type="submit"
          className={`flex items-center gap-2 self-end py-2 text-black ${formik.dirty && formik.isValid ? "opacity-100" : "opacity-50"}`}
        >
          Send
          <div className="grid h-9 w-9 place-items-center rounded-full bg-surface ">
            {!isSending ? (
              <FiArrowRight />
            ) : (
              <RotatingLines
                visible={true}
                height="24"
                width="24"
                strokeColor="black"
                strokeWidth="3"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
              />
            )}
          </div>
        </button>
      </motion.form>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpenContact(false)}
        className="fixed inset-0 z-40 bg-black bg-opacity-75"
      ></motion.div>
    </>
  );
};

export default ContactForm;

const Clipboard = () => {
  return (
    <div className=" p-5">
      <div className="flex items-center gap-2">
        To:
        <div className="flex items-center gap-2 rounded-full bg-surfaceSecondary px-3 py-2 leading-none">
          <div className="h-3 w-3 rounded-full bg-secondary" />
          Pelle Adlén
        </div>
      </div>
    </div>
  );
};

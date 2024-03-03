"use client";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup"; // import Yup

const ContactForm = ({ setOpenContact }) => {
  const formik = useFormik({
    initialValues: { user_name: "", user_email: "", message: "" },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(20, "Name is toooo long")
        .required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string().min(10, "Write some more").required("Required"),
    }),

    onSubmit: (values) => {
      console.log("form data", values);
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
  };
  return (
    <>
      <motion.form
        ref={form}
        onSubmit={formik.handleSubmit}
        initial={{ y: 800 }}
        animate={{ y: 0 }}
        exit={{ y: 800 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="fixed bottom-4 right-4 z-50 flex  h-[580px] w-[417px]  flex-col gap-4   rounded-2xl bg-white p-2 text-xl text-secondary"
      >
        <Clipboard />
        <div className="relative">
          <input
            className="peer w-full  border-b border-surface p-5 placeholder-transparent  focus:outline-none"
            placeholder="Name"
            name="user_name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label
            className="absolute -top-1 left-5 text-xs transition-all ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:-top-1 peer-focus:text-xs"
            htmlFor="text"
          >
            {formik.errors.user_name ? formik.errors.user_name : "Name"}
          </label>
        </div>

        <div className="relative">
          <input
            className="peer w-full  border-b border-surface p-5 placeholder-transparent  focus:outline-none"
            placeholder="Email"
            name="user_email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label
            className="absolute -top-1 left-5 origin-center text-xs transition-all  ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:-top-1 peer-focus:text-xs "
            htmlFor="email"
          >
            {formik.errors.user_email ? formik.errors.user_email : "Email"}
          </label>
        </div>

        <div className="relative flex-1">
          <textarea
            onChange={formik.handleChange}
            value={formik.values.message}
            autoFocus
            type="text"
            minLength="1"
            required="required"
            className="h-full  w-full resize-none border-b border-surface p-5 placeholder:text-secondary   focus:outline-none"
            placeholder="Your Message"
            name="message"
          />
          <label
            className="absolute -top-1 left-5 origin-center text-xs transition-all  ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:-top-1 peer-focus:text-xs "
            htmlFor="email"
          >
            {formik.errors.message ? formik.errors.message : "Your Message"}
          </label>
        </div>

        <button
          type="submit"
          className=" flex items-center gap-2 self-end py-2"
        >
          Send
          <div className="rounded-full bg-surface p-2">
            <FiArrowRight />
          </div>
        </button>
      </motion.form>
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
  const [clipboardHovered, setClipboardHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const handleClipBoard = async () => {
    await navigator.clipboard.writeText("pelleadlen@gmail.com");
    setCopied(true);
  };
  return (
    <div
      onClick={handleClipBoard}
      onMouseEnter={() => setClipboardHovered(true)}
      onMouseLeave={() => setClipboardHovered(false)}
      className="cursor-pointer p-5"
    >
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

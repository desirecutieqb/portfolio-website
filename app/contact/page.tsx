"use client";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
interface UserInput {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [userInput, setUserInput] = useState<UserInput>({
    name: "",
    email: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleRecaptchaChange = (token: string | null) => {
    console.log("Token reCAPTCHA:", token);
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error("Proszę potwierdź, że nie jesteś robotem.");
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    const emailParams = {
      from_name: userInput.name,
      from_email: userInput.email,
      message: userInput.message,
      to_name: "Mykyta", 
      "g-recaptcha-response": recaptchaToken,
    };

    console.log("Email parameters:", emailParams);

    try {
      const res = await emailjs.send(serviceID, templateID, emailParams, userID);
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setRecaptchaToken(null);
      }
    } catch (error) {
      console.error("Błąd przy wysyłaniu wiadomości:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.main className="relative">
      <ToastContainer/>
      <div className="relative top-10 z-30">
        <Link
          href="/"
          className="text-5xl text-center top-8 mb-8 hover:text-blue-500 transition-colors block"
        >
          Mykyta Tarakanov
        </Link>
        <motion.form
          className="max-w-md mx-auto p-6 rounded-s-xl border-sky-500 rounded-lg shadow-lg text-white"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Your Name:</label>
            <input
              type="text"
              name="name"
              value={userInput.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Your Email:</label>
            <input
              type="email"
              name="email"
              value={userInput.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Your Message:</label>
            <textarea
              name="message"
              value={userInput.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <ReCAPTCHA
              className="bg-black"
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={handleRecaptchaChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-600 hover:bg-gray-400 rounded font-semibold transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.main>
  );
}

export default ContactForm;
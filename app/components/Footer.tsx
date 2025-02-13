"use client";
import { motion } from "framer-motion";
import React from "react";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 0.5, // matches the Tailwind opacity-50
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hover: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="relative top-7 text-center transition-colors z-30"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <p>© 2025 Mykyta Tarakanov. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
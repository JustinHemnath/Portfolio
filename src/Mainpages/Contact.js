import React from "react";
import "../Styles/Contact.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { themeState } from "../Features/themeSlice";

const Contact = () => {
  const theme = useSelector(themeState);

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", delay: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contactdiv">
        <i className="fa-solid fa-envelope icons"></i>
        <p style={{ color: theme.fontColor }}>justin.hemnath.96@gmail.com</p>
      </div>

      <div className="contactdiv">
        <i className="fa-brands fa-linkedin icons"></i>
        <a
          href="https://www.linkedin.com/in/hemnath-balasubramanian-0a23a5185/"
          target="_blank"
          rel="noreferrer"
          style={{ color: theme.fontColor }}
        >
          Hemnath Balasubramanian
        </a>
      </div>

      <div className="contactdiv">
        <i className="fa-brands fa-github icons"></i>
        <a
          href="https://github.com/Justinhemnath/Portofolio-main"
          target="_blank"
          rel="noreferrer"
          style={{ color: theme.fontColor }}
        >
          Justinhemnath
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;

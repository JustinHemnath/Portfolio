import React from 'react';
import "../Styles/Contact.css";
import { motion } from 'framer-motion';


const Contact = () => {
    return (
    <motion.div
        className="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        
        <div className="contactdiv">
            <i className="fa-solid fa-envelope icons"></i>
            <p>justin.hemnath.96@gmail.com</p>
        </div>

        <div className="contactdiv">
            <i className="fa-brands fa-linkedin icons"></i>
            <a href="https://www.linkedin.com/in/hemnath-balasubramanian-0a23a5185/"
            target="_blank">
                Hemnath Balasubramanian
            </a>
        </div>

        <div className="contactdiv">
            <i className="fa-brands fa-github icons"></i>
        <a href="https://github.com/Justinhemnath/Portofolio-main" target="_blank">
            Justinhemnath
        </a>
        </div>
    </motion.div>
    );
};

export default Contact;
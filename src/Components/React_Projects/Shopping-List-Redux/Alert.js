import React, { useEffect } from 'react'
import './Alert.css'
import { motion } from 'framer-motion'


const Alert = ( { message, type, closemodal} ) => {

  useEffect(() => {

    const timeout = setTimeout(() => {
      closemodal();
    }, 3000);
    
    return () => clearTimeout(timeout);
  });

  return (

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="Alert">

        <h4 className={type}>{message}</h4>
        
    </motion.div>
  )
}

export default Alert

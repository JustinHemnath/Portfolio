import React, { useEffect } from 'react'
import './Alert.css'
import { motion } from 'framer-motion'


const Alert = ( {alert, list, removeAlert} ) => {

  useEffect(() => {

    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, [list]);

  return (

    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="Alert">

        <p className={alert.type}>{alert.message}</p>
    
    </motion.div>
  )
}

export default Alert

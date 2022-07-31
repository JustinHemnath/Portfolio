import React from 'react'
import './Items.css'
import { motion } from 'framer-motion'

const Items = ( {list} ) => {

  return (

    <div 
    
    className="items-container">

        {list.map( item => { 
            const { name, price, desc, image } = item;

                return (<motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="item-card" key={name}>

                    <img src={image} alt="food" height="240px" width="250px" />

                    <p className="name">{name}</p>
                    <p className="price">{price}</p>
                    <p className="desc">{desc}</p>

                </motion.div>)

            }

        )}

    </div>

  )
}

export default Items

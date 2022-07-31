import React from 'react'
import './List.css'
import { motion } from 'framer-motion'

const List = ( {list, removeItem} ) => {

  return (

    <div className='List'>

      {list.map( item => { 
        
        return (

            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={item.id}
            className="listitem">

                <p>{item.title}</p>
                <i className="fa-solid fa-trash" onClick={() => removeItem(item.id)}></i>

            </motion.div>
        )
        } )}

    </div>
  )
}

export default List

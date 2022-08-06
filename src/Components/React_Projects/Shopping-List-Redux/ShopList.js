import React, { useState } from 'react'
import './ShopList.css'
import Alert from './Alert'
import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { ADD_ITEM, DELETE_ITEM, NO_ITEM, CLEAR_LIST, CLOSE_MODAL, shoplistState } from '../../../Features/shoplistSlice'

function ShopList() {

  const shoplist = useSelector(shoplistState)
  const dispatch = useDispatch()
  const [item, setItem ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(item) {

      const newItem = { id: new Date().getTime().toString(), item } 
      dispatch(ADD_ITEM( newItem ))
      setItem('')

    }

    else {

      dispatch(NO_ITEM())

    }
  }

  const closemodal = () => {
    dispatch(CLOSE_MODAL())
  }



  return (

    <div className="ShopList">
      <div className="List-card">
        <h1 className="shoplist-header">SHOPPING LIST USING REDUX</h1>
        <div className="shoplist-underline"></div>

        <div className="alertbox">
          {shoplist.alert && (
            <Alert message={shoplist.message} type={shoplist.type} closemodal={closemodal} />
          )}
        </div>

        <form className="topPart" onSubmit={handleSubmit}>
          <input
            type="text"
            className="shoplist-input"
            placeholder="Enter items"
            value={item}
            onChange={(e) => setItem(e.target.value) }
          />

          <button className="shoplist-submit-btn">
            Submit
          </button>
        </form>
        
        <div className='List'>

          {shoplist.list.map( item => { 
            
            return (

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={item.id}
                  className="listitem">

                    <p>{item.item}</p>
                    <i 
                      className="fa-solid fa-trash" 
                      onClick={() => dispatch(DELETE_ITEM( item.id ))}>
                    </i>

                </motion.div>
            )
            })
          }

        </div>


        <div className="clearlist" onClick={() => dispatch(CLEAR_LIST()) }>
          CLEAR LIST
        </div>
      </div>
    </div>

  )
}

export default ShopList

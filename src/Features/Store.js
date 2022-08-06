import { configureStore } from "@reduxjs/toolkit";
import shoplistReducer from './shoplistSlice.js'

const Store = configureStore({
    reducer: {
        shoplist: shoplistReducer, 
    }
})

export default Store
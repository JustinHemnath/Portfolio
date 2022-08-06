import { configureStore } from "@reduxjs/toolkit";
import shoplistReducer from './shoplistSlice.js'
import themeReducer from './themeSlice.js'

const Store = configureStore({
    reducer: {
        shoplist: shoplistReducer, 
        theme: themeReducer,
    }
})

export default Store
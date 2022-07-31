import { createSlice } from '@reduxjs/toolkit';

const shoplistSlice = createSlice({
    name: 'shoplist',
    initialState: { 
        value: {
            list: [],
            alert: false,
            type: '',
            message: '',
        }
    },
    reducers: {

        ADD_ITEM: (state, action) => {
            state.value = { 
                list: [...state.value.list,  action.payload ], 
                alert: true, 
                type: 'success',
                message: 'ITEM ADDED',
            }
        },

        DELETE_ITEM: (state, action) => {
            const newList = state.value.list.filter(item => item.id !== action.payload )
            state.value = { 
                list: newList, alert: true, type: 'success', message: 'ITEM DELETED' 
            }
        },

        NO_ITEM: (state) => {
            state.value = { 
                ...state.value, alert: true, type: 'danger', message: 'NO ITEM ENTERED' 
            }
        },

        CLEAR_LIST: (state) => {
            state.value = { 
                list: [], alert: true, type: 'success', message: 'LIST CLEARED' 
            }
        },

        CLOSE_MODAL: (state) => {
            state.value = { 
                ...state.value, alert: false, type: '', message: '' 
            }
        }

    }
})

export const { ADD_ITEM, DELETE_ITEM, NO_ITEM, CLEAR_LIST, CLOSE_MODAL } = shoplistSlice.actions

export const shoplistState = (store) => store.shoplist.value

export default shoplistSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  backgroundColor: '#F3F4F6',
  fontColor: 'black',
  sectionColor: '#FFFEFE',
  boxShadow: '0px 0px 10px 5px #c7c7c7',
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    DARK_MODE: () => {
      return {
        backgroundColor: 'black',
        fontColor: 'white',
        sectionColor: '#151A1E',
        boxShadow: 'none',
      };
    },
    LIGHT_MODE: () => {
      return {
        backgroundColor: '#F3F4F6',
        fontColor: 'black',
        sectionColor: '#FFFEFE',
        boxShadow: '0px 0px 10px 5px #c7c7c7',
    };
    },
  },
});

export const { DARK_MODE, LIGHT_MODE } = themeSlice.actions;

export const themeState = (store) => store.theme;

export default themeSlice.reducer;

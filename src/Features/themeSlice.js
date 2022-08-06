import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  backgroundColor: "#F3F4F6",
  fontColor: "#32373c",
  sectionColor: '#FFFEFE',
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    DARK_MODE: (state) => {
      return {
        backgroundColor: "#060A0D",
        fontColor: "#F3F4F6",
        sectionColor: '#141B1E',
      };
    },
    LIGHT_MODE: (state) => {
      return {
        backgroundColor: "#F3F4F6",
        fontColor: "#32373c",
        sectionColor: '#FFFEFE',
    };
    },
  },
});

export const { DARK_MODE, LIGHT_MODE } = themeSlice.actions;

export const themeState = (store) => store.theme;

export default themeSlice.reducer;

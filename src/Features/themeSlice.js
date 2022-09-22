import { createSlice } from '@reduxjs/toolkit';

const getLocalStorage = () => {
  const currentTheme = localStorage.getItem('currentTheme');
  if (currentTheme) {
    return JSON.parse(currentTheme);
  }
  return {
    backgroundColor: '#F3F4F6',
    fontColor: 'black',
    sectionColor: '#FFFEFE',
    boxShadow: '0px 0px 10px 5px #c7c7c7',
  };
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getLocalStorage(),
  reducers: {
    DARK_MODE: () => {
      let darkTheme = {
        backgroundColor: 'black',
        fontColor: 'white',
        sectionColor: '#151A1E',
        boxShadow: 'none',
      };
      localStorage.setItem('currentTheme', JSON.stringify(darkTheme));
      return darkTheme;
    },
    LIGHT_MODE: () => {
      let lightTheme = {
        backgroundColor: '#F3F4F6',
        fontColor: 'black',
        sectionColor: '#FFFEFE',
        boxShadow: '0px 0px 10px 5px #c7c7c7',
      };
      localStorage.setItem('currentTheme', JSON.stringify(lightTheme));
      return lightTheme;
    },
  },
});

export const { DARK_MODE, LIGHT_MODE } = themeSlice.actions;

export const themeState = (store) => store.theme;

export default themeSlice.reducer;

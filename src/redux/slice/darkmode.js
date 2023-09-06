import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode)
    },
    updateDarkmode:(state,action)=>{
      state.darkMode = action.payload
    }
  },
});

export const { toggleDarkMode,updateDarkmode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
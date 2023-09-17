import { configureStore } from '@reduxjs/toolkit';
import darkmode from './slice/darkmode';
import userAuthSlice from './slice/authuser';

const store = configureStore({
  reducer: {
    darkMode: darkmode,
    userAuth: userAuthSlice
  },
});

export default store;
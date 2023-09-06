import { configureStore } from '@reduxjs/toolkit';
import darkmode from './slice/darkmode';
// import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    darkMode: darkmode,
    // user: userReducer, // Agregamos el slice de usuario al store
  },
});

export default store;
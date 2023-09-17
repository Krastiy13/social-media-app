import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userAuth: [],
};

const userAuthSlice = createSlice({
    name: 'authuser',
    initialState,
    reducers: {
        setUserAuth: (state, action) => {
            state.userAuth = action.payload;

            localStorage.setItem('userAuth', JSON.stringify(state.userAuth))
        }
        // , updateUserAuth: (state, action) => {
        //     state.userAuth = action.payload;
        // }

    },
});

export const { setUserAuth } = userAuthSlice.actions;
export default userAuthSlice.reducer;
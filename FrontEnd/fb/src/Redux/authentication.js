import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isLoading: true,
        auth: {
            isLoggedIn: false,
            account: {},
        },
    },
    reducers: {
        login: (state, action) => {
            state.isLoading = false
            state.auth.isLoggedIn = true;
            state.auth.account = action.payload.acount
        },

        logout: (state, payload) => {
            state.auth.isLoggedIn = true;
        },
    },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;

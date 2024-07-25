import {createSlice} from "@reduxjs/toolkit";

const initialState = {user: null, token: null}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const fakeToken = '123456789';
            const fakeUser = { name: action.payload };
        
            state.user = fakeUser;
            state.token = fakeToken;
        },
        logout: (state, action) => {
            return initialState;
        }
    }
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
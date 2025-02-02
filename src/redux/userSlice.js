import { createSlice } from '@reduxjs/toolkit'

const initialState = { user: null, token: null }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      state.user = user
      state.token = token
      //Almacena token en localStorage
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      //Elimina token del localStorage
      localStorage.removeItem('token');
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer

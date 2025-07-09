// client/src/pages/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: ''
  },
  reducers: {
    login(state, action) {
      state.userId = action.payload;
    },

    logout(state) {
      state.userId = null;
    }
  }
});

export const selectLoggedInUser = state => state.users[state.auth.userId];

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
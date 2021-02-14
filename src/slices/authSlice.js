import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const STORAGE_KEY = 'authedUser';

export const login = createAsyncThunk('auth/login', async (userId) => {
  localStorage.setItem(STORAGE_KEY, userId);

  return await new Promise((res) => res(userId));
});

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem(STORAGE_KEY);

  return await new Promise((res) => res(null));
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: localStorage.getItem(STORAGE_KEY) || ''
  },
  reducers:{},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.userId = action.payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.userId = null;
    }
  }
});

export const selectLoggedInUser = state => {
  const userId = state.auth.userId;

  return state.users.items[userId];
};

export default authSlice.reducer;
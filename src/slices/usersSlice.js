import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {_getUsers} from '../api/_DATA';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return await _getUsers();
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
});

export const selectAllUsers = state => Object.values(state.users);

export default usersSlice.reducer;
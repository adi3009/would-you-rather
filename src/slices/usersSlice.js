import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {_getUsers} from '../api/_DATA';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return await _getUsers();
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    pollAdded(state, action) {
      state[action.payload.author].questions.push(action.payload.id);
    }
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
});

export const selectAllUsers = state => state.users;

export const selectUserById = uid => state => state.users[uid];

export const {pollAdded} = usersSlice.actions;

export default usersSlice.reducer;
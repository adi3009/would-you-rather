import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {_getUsers} from '../api/_DATA';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return await _getUsers();
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: {},
    status: 'idle'
  },
  reducers: {
    pollAdded(state, action) {
      state.items[action.payload.author].questions.push(action.payload.id);
    },
    pollAnswered(state, action) {
      state.items[action.payload.authedUser].answers[action.payload.qid] = action.payload.answer;
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'complete';
      state.items = action.payload;
    }
  }
});

export const usersLoaded = state => state.users.status === 'complete';

export const selectAllUsers = state => state.users.items;

export const selectUserById = uid => state => state.users.items[uid];

export const {pollAdded, pollAnswered} = usersSlice.actions;

export default usersSlice.reducer;
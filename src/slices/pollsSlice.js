import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {_getQuestions} from '../api/_DATA';

export const fetchPolls = createAsyncThunk('polls/fetchPolls', async () => {
  return await _getQuestions();
});

export const pollsSlice = createSlice({
  name: 'polls',
  initialState: {
    items: {},
    status: 'idle'
  },
  reducers:{},
  extraReducers: {
    [fetchPolls.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPolls.fulfilled]: (state, action) => {
      state.status = 'complete';
      state.items = action.payload;
    }
  }
});

export const selectAllPolls = state => state.polls.items;

export default pollsSlice.reducer;
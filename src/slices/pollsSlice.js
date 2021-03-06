import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from '../api/_DATA';

export const fetchPolls = createAsyncThunk('polls/fetchPolls', async () => {
  return await _getQuestions();
});

export const addPoll = createAsyncThunk('polls/add', async (poll) => {
  return await _saveQuestion(poll)
});

export const answerPoll = createAsyncThunk('polls/answer', async (pollAnswer) => {
  return await _saveQuestionAnswer(pollAnswer);
});

export const pollsSlice = createSlice({
  name: 'polls',
  initialState: {
    items: {},
    status: 'idle',
    addStatus: 'idle'
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
    },
    [addPoll.pending]: (state) => {
      state.addStatus = 'loading';
    },
    [addPoll.fulfilled]: (state, action) => {
      state.addStatus = 'complete';
      state.items[action.payload.id] = action.payload;
    },
    [answerPoll.pending]: (state) => {
      state.addStatus = 'loading';
    },
    [answerPoll.fulfilled]: (state, action) => {
      state.addStatus = 'complete';
      state.status = 'idle';
    }
  }
});

export const selectAllPolls = state => state.polls.items;

export const selectPollById = pollId => state => state.polls.items[pollId];

export default pollsSlice.reducer;
import {configureStore} from '@reduxjs/toolkit';
import usersReducer from '../slices/usersSlice';
import authReducer from '../slices/authSlice';
import pollsReducer from '../slices/pollsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    polls: pollsReducer
  }
})
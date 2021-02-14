import {configureStore} from '@reduxjs/toolkit';
import usersReducer from '../slices/usersSlice';
import authReducer from '../slices/authSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer
  }
})
import { configureStore } from '@reduxjs/toolkit';
import pollReducer from '../features/poll/pollSlice';

export default configureStore({
  reducer: {
    poll: pollReducer,
  },
});

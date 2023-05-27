import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './slice/counterSlice';

export default combineReducers({
    counter : dataReducer,
});


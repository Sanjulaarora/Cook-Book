import { configureStore } from '@reduxjs/toolkit';
import saveReducer from '../features/saveSlice';

export const store = configureStore({
    reducer:{
        allSave: saveReducer,
    }
});
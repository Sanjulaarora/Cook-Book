import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    save: [],
 };

export const saveSlice = createSlice({
    name: 'save',
    initialState,
    reducers: {
        addToSaved: (state, action) => {
            state.save.push(action.payload)
        },
        removeFromSaved: (state, action) => {
            state.save = state.save.filter((dish) => dish.id !== action.payload.id);
        },
    },
});

export const { addToSaved, removeFromSaved } = saveSlice.actions;

export default saveSlice.reducer;
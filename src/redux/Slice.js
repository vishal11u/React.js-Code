import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        }
    }
});

export const { add, remove } = Slice.actions;
export default Slice.reducer;
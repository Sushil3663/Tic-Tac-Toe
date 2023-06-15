import { createSlice } from '@reduxjs/toolkit';

// Slice
const playerSlice = createSlice({
  name: 'player',
  initialState: {
    marks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    player: 1,
  },
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setMarks: (state, action) => {
      state.marks = action.payload;
    },
    clearMarks: (state, action)=> {
        state.marks = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    }
  },
});
export {playerSlice};
export const { setPlayer, setMarks,  clearMarks } = playerSlice.actions;



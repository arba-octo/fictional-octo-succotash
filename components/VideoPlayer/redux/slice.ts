import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = {
  isLoadedData: false,

};

const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    changeIsLoadedData(state, { payload }) {
      state.isLoadedData = payload;
    },
  }
});

export default playerSlice;

export const { changeIsLoadedData } = playerSlice.actions;

export const selectIsLoadedData = (state: RootState) => state.player.isLoadedData;

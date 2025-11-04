import { createSlice } from '@reduxjs/toolkit';
import { STATUS_PAUSE } from '@/constants/status';
import { RootState } from './store';

const initialState = {
  status: STATUS_PAUSE,
  isLoadedData: false,

};

const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    changeIsLoadedData(state, { payload }) {
      state.isLoadedData = payload;
    },
    changeStatus(state, { payload }) {
      state.status = payload;
    }
  }
});

export default playerSlice;

export const { changeIsLoadedData, changeStatus } = playerSlice.actions;

export const selectIsLoadedData = (state: RootState) => state.player.isLoadedData;
export const selectStatus = (state: RootState) => state.player.status;

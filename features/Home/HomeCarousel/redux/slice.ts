import { createSlice } from '@reduxjs/toolkit';
import { STATUS_INIT, STATUS_LOADING } from '@/constants/status';
import { RootState } from './store';
import { HOME_CAROUSEL_DATA } from '@/features/Home/HomeCarousel/redux/homeCarouseldata';

const initialState = {
  status: STATUS_INIT,
  data: HOME_CAROUSEL_DATA,
  playId: ''
};

const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    onPlay(state, { payload }) {
      state.status = STATUS_LOADING;
      state.playId = payload;
    },
    onPause(state) {
      state.status = STATUS_INIT;
      state.playId = '';
    }
  }
});

export default playerSlice;

export const { onPlay, onPause, changeStatus } = playerSlice.actions;

export const selectStatus = (state: RootState) => state.player.status;
export const selectData = (state: RootState) => state.player.data;
export const selectPlayId = (state: RootState) => state.player.playId;

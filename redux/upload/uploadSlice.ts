import { createSlice } from '@reduxjs/toolkit';
import { STATUS_INIT } from '@/constants/status';
import { RootState } from '@/redux/upload/uploadStore';

const initialState = {
  status: STATUS_INIT,
  promptId: '',
};

const uploadSlice = createSlice({
  name: 'uploadSlice',
  initialState,
  reducers: {
    setPromptId(state, { payload }) {
      state.promptId = payload;
    },
    setStatus(state, { payload }) {
      state.status = payload;
    }
  }
});

export default uploadSlice;

export const { setPromptId, setStatus } = uploadSlice.actions;

export const selectStatus = (state: RootState) => state.upload.status;
export const selectPromptId = (state: RootState) => state.upload.promptId;

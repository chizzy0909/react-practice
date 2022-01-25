import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BarRightState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: BarRightState = {
  loading: true,
  error: null,
  data: { data: [] },
};

export const getBarRight = createAsyncThunk(
  "BarRight/getBarRight",
  async () => {
    const { data } = await axios.get(`http://localhost:8081/carousels`);
    return data;
  }
);

export const BarRightSlice = createSlice({
  name: "BarRight",
  initialState,
  reducers: {},
  extraReducers: {
    [getBarRight.pending.type]: (state) => {
      return { ...state, loading: true };
      // state.loading = true;
    },
    [getBarRight.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getBarRight.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

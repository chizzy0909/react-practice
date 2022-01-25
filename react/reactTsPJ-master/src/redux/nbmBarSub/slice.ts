import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BarSubState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: BarSubState = {
  loading: true,
  error: null,
  data: { data: [] },
};

export const getBarSub = createAsyncThunk("BarSub/getBarSub", async () => {
  const { data } = await axios.get(`http://localhost:8081/hotGoodses`);
  return data;
});

export const BarSubSlice = createSlice({
  name: "BarSub",
  initialState,
  reducers: {},
  extraReducers: {
    [getBarSub.pending.type]: (state) => {
      return { ...state, loading: true };
      // state.loading = true;
    },
    [getBarSub.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getBarSub.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

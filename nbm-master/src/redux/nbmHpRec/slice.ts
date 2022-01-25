import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface HpRecState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: HpRecState = {
  loading: true,
  error: null,
  data: { data: [] },
};

export const getHpRec = createAsyncThunk("HpRec/getHpRec", async () => {
  const { data } = await axios.get(`http://localhost:8081/recommendGoodses`);
  return data;
});

export const HpRecSlice = createSlice({
  name: "HpRecommend",
  initialState,
  reducers: {},
  extraReducers: {
    [getHpRec.pending.type]: (state) => {
      return { ...state, loading: true };
      // state.loading = true;
    },
    [getHpRec.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getHpRec.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

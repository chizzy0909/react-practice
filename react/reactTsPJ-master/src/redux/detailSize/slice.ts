import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailSizeState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: DetailSizeState = {
  loading: true,
  error: null,
  data: { data: [] },
};

export const getDetailSize = createAsyncThunk(
  "DetailSize/getDetailSize",
  async (goodsId: undefined | string) => {
    const { data } = await axios.get(
      `http://localhost:8081/detaiSize?goodsId=${goodsId}`
    );
    return data;
  }
);

export const DetailSizeSlice = createSlice({
  name: "DetailSize",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailSize.pending.type]: (state) => {
      return { ...state, loading: true };
      // state.loading = true;
    },
    [getDetailSize.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getDetailSize.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

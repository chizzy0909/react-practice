import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailIntroState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: DetailIntroState = {
  loading: true,
  error: null,
  data: { data: [] },
};

export const getDetailIntro = createAsyncThunk(
  "DetailIntro/getDetailIntro",
  async (goodsId: number) => {
    const { data } = await axios.get(
      `http://localhost:8081/nbmGoodsInfo?goodsId=${goodsId}`
    );
    return data;
  }
);

export const DetailIntroSlice = createSlice({
  name: "DetailIntro",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailIntro.pending.type]: (state) => {
      return { ...state, loading: true };
      // state.loading = true;
    },
    [getDetailIntro.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getDetailIntro.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

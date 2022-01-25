import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetaiCarousalState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: DetaiCarousalState = {
  loading: true,
  error: null,
  data: { data: [] },
};

export const getDetaiCarousal = createAsyncThunk(
  "DetaiCarousal/getDetaiCarousal",
  async (goodsId: undefined | string) => {
    const { data } = await axios.get(
      `http://localhost:8081/detaiCarousal?goodsId=${goodsId}`
    );
    return data;
  }
);

export const DetaiCarousalSlice = createSlice({
  name: "DetaiCarousal",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetaiCarousal.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [getDetaiCarousal.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getDetaiCarousal.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

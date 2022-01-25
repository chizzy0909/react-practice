import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BarleftState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: BarleftState = {
  loading: true,
  error: null,
  data: { data: [] },
};

export const getBarleft = createAsyncThunk("Barleft/getBarleft", async () => {
  const { data } = await axios.get(`http://localhost:8081/categories`);
  return data;
});

export const BarleftSlice = createSlice({
  name: "Barleft",
  initialState,
  reducers: {},
  extraReducers: {
    [getBarleft.pending.type]: (state) => {
      return { ...state, loading: true };
      // state.loading = true;
    },
    [getBarleft.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getBarleft.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

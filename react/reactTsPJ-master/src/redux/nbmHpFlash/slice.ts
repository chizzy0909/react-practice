import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface HpFlashState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: HpFlashState = {
  loading: true,
  error: null,
  data: { data: [] },
};

export const getHpFlash = createAsyncThunk("HpFlash/getHpFlash", async () => {
  const { data } = await axios.get(`http://localhost:8081/newGoodses`);
  return data;
});

export const HpFlashSlice = createSlice({
  name: "HpFlash",
  initialState,
  reducers: {},
  extraReducers: {
    [getHpFlash.pending.type]: (state) => {
      return { ...state, loading: true };
      // state.loading = true;
    },
    [getHpFlash.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getHpFlash.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

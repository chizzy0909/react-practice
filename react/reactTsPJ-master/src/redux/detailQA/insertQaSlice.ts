import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface QaInstertState {
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: QaInstertState = {
  loading: true,
  error: null,
  message: null,
};

export const InsertQa = createAsyncThunk(
  "QaInstert/InsertQa",
  async (paramaters: { goodsId: number; question: string; answer: string }) => {
    const { data } = await axios.post(`http://localhost:8081/insertQA`, {
      goodsId: paramaters.goodsId,
      question: paramaters.question,
      answer: paramaters.answer,
    });
    return data.message;
  }
);

export const QaInstertSlice = createSlice({
  name: "QaInstert",
  initialState,
  reducers: {
    // logOut: (state) => {
    //   state.token = null;
    //   state.error = null;
    //   state.loading = false;
    // },
  },
  extraReducers: {
    [InsertQa.pending.type]: (state) => {
      // state.loading = true;
    },
    [InsertQa.fulfilled.type]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.error = null;
    },
    [InsertQa.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
